import gateRest from '../gate.js';
import { Int, Str, Strings } from '../base/types.js';
import Client from '../base/ws/Client.js';
export default class gate extends gateRest {
    describe(): any;
    watchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<any>;
    handleOrderBookSubscription(client: Client, message: any, subscription: any): void;
    handleOrderBook(client: Client, message: any): void;
    getCacheIndex(orderBook: any, cache: any): any;
    handleBidAsks(bookSide: any, bidAsks: any): void;
    handleDelta(orderbook: any, delta: any): void;
    watchTicker(symbol: string, params?: {}): Promise<any>;
    watchTickers(symbols?: Strings, params?: {}): Promise<any>;
    handleTicker(client: Client, message: any): void;
    watchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    watchTradesForSymbols(symbols: string[], since?: Int, limit?: Int, params?: {}): Promise<any>;
    handleTrades(client: Client, message: any): void;
    watchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    handleOHLCV(client: Client, message: any): void;
    watchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<any>;
    handleMyTrades(client: Client, message: any): void;
    watchBalance(params?: {}): Promise<any>;
    handleBalance(client: Client, message: any): void;
    watchPositions(symbols?: Strings, since?: Int, limit?: Int, params?: {}): Promise<any>;
    setPositionsCache(client: Client, type: any, symbols?: Strings): void;
    loadPositionsSnapshot(client: any, messageHash: any, type: any): Promise<void>;
    handlePositions(client: any, message: any): void;
    watchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<any>;
    handleOrder(client: Client, message: any): void;
    handleErrorMessage(client: Client, message: any): boolean;
    handleBalanceSubscription(client: Client, message: any, subscription?: any): void;
    handleSubscriptionStatus(client: Client, message: any): void;
    handleMessage(client: Client, message: any): void;
    getUrlByMarket(market: any): any;
    getTypeByMarket(market: any): "spot" | "futures" | "options";
    getUrlByMarketType(type: any, isInverse?: boolean): any;
    getMarketTypeByUrl(url: string): any;
    requestId(): any;
    subscribePublic(url: any, messageHash: any, payload: any, channel: any, params?: {}, subscription?: any): Promise<any>;
    subscribePrivate(url: any, messageHash: any, payload: any, channel: any, params: any, requiresUid?: boolean): Promise<any>;
}
