'use strict';

//  ---------------------------------------------------------------------------

const Exchange = require ('./base/Exchange');
const { AuthenticationError } = require ('./base/errors');
//  ---------------------------------------------------------------------------

module.exports = class bitmart extends Exchange {
    describe () {
        return this.deepExtend (super.describe (), {
            'id': 'bitmart',
            'name': 'Bitmart',
            'countries': [ 'US', 'CN', 'HK', 'KR' ],
            'rateLimit': 1000,
            'version': 'v2',
            'has': {
                'CORS': true,
                'fetchMarkets': true,
                'fetchTicker': true,
                'fetchTickers': true,
                'fetchCurrencies': true,
                'fetchOrderBook': true,
                'fetchTrades': true,
                'fetchOHLCV': true,
                'fetchBalance': true,
            },
            'urls': {
                'logo': 'https://www.bitmart.com/_nuxt/img/ed5c199.png',
                'api': 'https://openapi.bitmart.com',
                'www': 'https://www.bitmart.com/',
                'doc': 'https://github.com/bitmartexchange/bitmart-official-api-docs/blob/master/REST.md',
            },
            'requiredCredentials': {
                'apiKey': true,
                'secret': true,
                'uid': true,
            },
            'api': {
                'token': {
                    'post': [
                        'authentication',
                    ],
                },
                'public': {
                    'get': [
                        'currencies',
                        'ping',
                        'steps',
                        'symbols',
                        'symbols_details',
                        'symbols/{symbol}/kline',
                        'symbols/{symbol}/orders',
                        'symbols/{symbol}/trades',
                        'ticker',
                        'time',
                    ],
                },
                'private': {
                    'get': [
                        'wallet',
                    ],
                },
            },
        });
    }

    async signIn (params = {}) {
        let message = this.apiKey + ':' + this.secret + ':' + this.uid;
        let data = {
            'grant_type': 'client_credentials',
            'client_id': this.apiKey,
            'client_secret': this.hmac (this.encode (message), this.encode (this.secret), 'sha256'),
        };
        let response = await this.tokenPostAuthentication (this.extend (data, params));
        let accessToken = this.safeString (response, 'access_token');
        if (!accessToken) {
            throw new AuthenticationError (this.id + ' signIn() failed to authenticate. Access token missing from response.');
        }
        let expiresIn = this.safeInteger (response, 'expires_in');
        this.options['expires'] = this.sum (this.nonce (), expiresIn * 1000);
        this.options['accessToken'] = accessToken;
        return response;
    }

    async fetchMarkets (params = {}) {
        let markets = await this.publicGetSymbolsDetails ();
        let result = [];
        for (let i = 0; i < markets.length; i++) {
            let market = markets[i];
            let id = market['id'];
            let base = market['base_currency'];
            let quote = market['quote_currency'];
            let symbol = base + '/' + quote;
            let precision = {
                'amount': 8,
                'price': market['price_max_precision'],
            };
            result.push ({
                'id': id,
                'symbol': symbol,
                'base': base,
                'quote': quote,
                'precision': precision,
                'info': market,
            });
        }
        return result;
    }

    parseTicker (ticker, market = undefined) {
        let timestamp = this.milliseconds ();
        let symbol = ticker['symbol_id'];
        let last = this.safeFloat (ticker, 'current_price');
        let percentage = this.safeFloat (ticker, 'fluctuation');
        return {
            'symbol': symbol,
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'high': this.safeFloat (ticker, 'highest_price'),
            'low': this.safeFloat (ticker, 'lowest_price'),
            'bid': this.safeFloat (ticker, 'bid_1'),
            'bidVolume': this.safeFloat (ticker, 'bid_1_amount'),
            'ask': this.safeFloat (ticker, 'ask_1'),
            'askVolume': this.safeFloat (ticker, 'ask_1_amount'),
            'vwap': undefined,
            'open': undefined,
            'close': last,
            'last': last,
            'previousClose': undefined,
            'change': undefined,
            'percentage': percentage * 100,
            'average': undefined,
            'baseVolume': this.safeFloat (ticker, 'base_volume'),
            'quoteVolume': this.safeFloat (ticker, 'volume'),
            'info': ticker,
        };
    }

    async fetchTicker (symbol, params = {}) {
        await this.loadMarkets ();
        let ticker = await this.publicGetTicker (this.extend ({
            'symbol': this.marketId (symbol),
        }, params));
        return this.parseTicker (ticker);
    }

    async fetchTickers (symbols = undefined, params = {}) {
        await this.loadMarkets ();
        let tickers = await this.publicGetTicker (params);
        let result = {};
        for (let i = 0; i < tickers.length; i++) {
            let ticker = this.parseTicker (tickers[i]);
            let symbol = ticker['symbol'];
            result[symbol] = ticker;
        }
        return result;
    }

    async fetchCurrencies (params = {}) {
        let currencies = await this.publicGetCurrencies (params);
        let result = {};
        for (let i = 0; i < currencies.length; i++) {
            let currency = currencies[i];
            let id = currency['id'];
            result[id] = {
                'id': id,
                'code': id,
                'name': currency['name'],
                'info': currency, // the original payload
                'active': true,
            };
        }
        return result;
    }

    async fetchOrderBook (symbol, limit = undefined, params = {}) {
        await this.loadMarkets ();
        //
        // order query parameters:
        //    precision : price precision whose range is defined in symbol details : [optional]
        //
        let response = await this.publicGetSymbolsSymbolOrders (this.extend ({
            'symbol': this.marketId (symbol),
        }, params));
        return this.parseOrderBook (response, undefined, 'buys', 'sells', 'price', 'amount');
    }

    parseTrade (trade, market) {
        let timestamp = parseInt (trade['order_time']);
        return {
            'info': trade,
            'id': trade['tid'].toString (),
            'order': undefined,
            'timestamp': timestamp,
            'datetime': this.iso8601 (timestamp),
            'symbol': market['symbol'],
            'type': undefined,
            'side': trade['type'].toLowerCase (),
            'price': this.safeFloat (trade, 'price'),
            'amount': this.safeFloat (trade, 'amount'),
        };
    }

    async fetchTrades (symbol, since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets ();
        let market = this.market (symbol);
        let response = await this.publicGetSymbolsSymbolTrades (this.extend ({
            'symbol': this.marketId (symbol),
        }, params));
        return this.parseTrades (response, market, since, limit);
    }

    parseOHLCV (ohlcv, market = undefined, timeframe = '1m', since = undefined, limit = undefined) {
        return [
            parseInt (ohlcv['timestamp']) * 100,
            this.safeFloat (ohlcv, 'open_price'),
            this.safeFloat (ohlcv, 'highest_price'),
            this.safeFloat (ohlcv, 'lowest_price'),
            this.safeFloat (ohlcv, 'current_price'),
            this.safeFloat (ohlcv, 'volume'),
        ];
    }

    async fetchOHLCV (symbol, timeframe = '1m', since = undefined, limit = undefined, params = {}) {
        await this.loadMarkets ();
        let market = this.market (symbol);
        //
        // ohlcv query parameters:
        //    from : start time of k-line data (in milliseconds) : [required]
        //    to : end time of k-line data (in milliseconds) : [required]
        //    step : steps of sampling (in minutes, default 1 minute) : [optional]
        //
        let response = await this.publicGetSymbolsSymbolKline (this.extend ({
            'symbol': this.marketId (symbol),
        }, params));
        return this.parseOHLCVs (response, market, timeframe, since, limit);
    }

    async fetchBalance (params = {}) {
        await this.loadMarkets ();
        let balances = await this.privateGetWallet (params);
        let result = {};
        for (let i = 0; i < balances.length; i++) {
            let balance = balances[i];
            let id = this.safeString (balance, 'id');
            if (id in this.currencies_by_id) {
                id = this.currencies_by_id[id]['code'];
            }
            let free = this.safeFloat (balance, 'available');
            let used = this.safeFloat (balance, 'frozen');
            result[id] = {
                'free': free,
                'used': used,
                'total': this.sum (free, used),
            };
        }
        return result;
    }

    nonce () {
        return this.milliseconds ();
    }

    sign (path, api = 'public', method = 'GET', params = {}, headers = undefined, body = undefined) {
        let url = this.urls['api'] + '/' + this.version + '/' + path;
        let query = this.omit (params, this.extractParams (path));
        if (api === 'public') {
            if (Object.keys (query).length)
                url += '?' + this.urlencode (query);
        } else if (api === 'token') {
            this.checkRequiredCredentials ();
            body = this.urlencode (query);
            headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
            };
        } else {
            this.checkRequiredCredentials ();
            let token = this.safeString (this.options, 'accessToken');
            if (token === undefined) {
                throw new AuthenticationError (this.id + ' ' + path + ' endpoint requires an accessToken option or a prior call to signIn() method');
            }
            let expires = this.safeInteger (this.options, 'expires');
            if (expires !== undefined) {
                if (this.nonce () >= expires) {
                    throw new AuthenticationError (this.id + ' accessToken expired, supply a new accessToken or call to signIn() method');
                }
            }
            headers = {
                'Content-Type': 'application/json',
                'X-BM-TIMESTAMP': this.nonce (),
                'X-BM-AUTHORIZATION': 'Bearer ' + token,
            };
        }
        return { 'url': url, 'method': method, 'body': body, 'headers': headers };
    }
};
