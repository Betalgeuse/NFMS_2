#24.04.10.수(선거공휴일) 문서 생성: 객체를 사용.
import ccxt
from datetime import datetime
import pandas as pd
import pickle

# https://dev-stocker.tistory.com/3
# api key 부르기
with open("/workspaces/NFMS_2/nfms/binance.key") as f: 
    lines = f.readlines() 
    access = lines[0].strip() 
    secret = lines[1].strip() 

binance = ccxt.binance()
markets = binance.fetch_tickers()
# print(markets.keys())

#현재가 조회
ticker = binance.fetch_ticker('ETH/USDT')
# print(ticker['open'], ticker['high'], ticker['low'], ticker['close'])

#과거 데이터 조회
ohlcvs = binance.fetch_ohlcv('ETH/USDT', '1d')
for idx, ohlcv in enumerate(ohlcvs):
    ohlcvs[idx] = [datetime.fromtimestamp(ohlcv[0]/1000).strftime('%Y-%m-%d %H:%M:%S'), ohlcv[1], ohlcv[2], ohlcv[3], ohlcv[4]]
#print(ohlcvs)

# def fetch_ohlcv(self, symbol, timeframe='1m', since=None, limit=None, params={}):
#        self.load_markets()
#        market = self.market(symbol)
#        # binance docs say that the default limit 500, max 1500 for futures, max 1000 for spot markets
#        # the reality is that the time range wider than 500 candles won't work right
#        defaultLimit = 500
#        maxLimit = 1500
#        price = self.safe_string(params, 'price')
#        params = self.omit(params, 'price')
#        limit = defaultLimit if (limit is None) else min(limit, maxLimit)
#        request = {
#            'interval': self.timeframes[timeframe],
#            'limit': limit,
#        }
#        if price == 'index':
#            request['pair'] = market['id']   # Index price takes self argument instead of symbol
#        else:
#            request['symbol'] = market['id']
#        duration = self.parse_timeframe(timeframe)
#        if since is not None:
#            request['startTime'] = since
#            if since > 0:
#                endTime = self.sum(since, limit * duration * 1000 - 1)
#                now = self.milliseconds()
#                request['endTime'] = min(now, endTime)
#        method = 'publicGetKlines'
#        if price == 'mark':
#            if market['inverse']:
#                method = 'dapiPublicGetMarkPriceKlines'
#            else:
#                method = 'fapiPublicGetMarkPriceKlines'
#        elif price == 'index':
#            if market['inverse']:
#                method = 'dapiPublicGetIndexPriceKlines'
#            else:
#                method = 'fapiPublicGetIndexPriceKlines'
#        elif market['linear']:
#            method = 'fapiPublicGetKlines'
#        elif market['inverse']:
#            method = 'dapiPublicGetKlines'
#        response = getattr(self, method)(self.extend(request, params))
#        return self.parse_ohlcvs(response, market, timeframe, since, limit)

binance = ccxt.binance({
    'apiKey': access,
    'secret': secret,
})

balance =binance.fetch_balance()
#Spot 만 나오는 것으로 확인완료
print("USDT: ", balance['USDT'])
print("ETH: ", balance['ETH'])
print("SOL: ", balance['SOL'])
print("XRP: ", balance['XRP'])

#exchange는 binance 객체에서 enableRateLimit 한 것일 뿐
exchange = ccxt.binance({
    'apiKey': access,
    'secret': secret,
    'enableRateLimit': True,
})

# 최소주문 거래 찾는 방법
market = exchange.load_markets()
min_amount = exchange.markets['PEPE/USDT']['limits']['amount']['min']
print(f"PEPE/USDT의 최소 주문량은 {min_amount}입니다.")

# 중첩된 딕셔너리는 딕셔너리 안에 또 다른 딕셔너리(또는 그 이상)가 포함된 구조를 의미하며, 
# 여러 계층의 데이터를 계층적으로 표현할 때 사용됩니다.
# 이 구조는 JSON(JavaScript Object Notation) 형태와 유사하며, 
# 복잡한 데이터 관계를 효과적으로 표현하고 접근할 수 있도록 해줍니다.
# nested_dict = {
#     '키1': {
#         '중첩된 키1-1': 값1,
#         '중첩된 키1-2': 값2,
#         ...
#     },
#     '키2': {
#         '중첩된 키2-1': {
#             '더 깊게 중첩된 키': 값
#             ...
#         },
#         ...
#     },
#     ...
# }

#최소 거래량 확인
symbol='PEPE/USDT'
market = exchange.load_markets()
min_notional = exchange.markets[symbol]['limits']['cost']['min']
print(f"{symbol}의 최소 거래 금액은 {min_notional}입니다.")
#buy_order msg 계속 오류 그냥 msg라는 attribute가 없는 것으로 판단 우선은 unknown error로 반환
symbol = 'BTC/USDT'
amount = 0.0001
stop_loss = 0.95
take_profit = 1.05
min_price_diff = 50

buy_order = exchange.create_order()
print(buy_order['info'])
