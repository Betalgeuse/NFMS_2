import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract publicGetContractsActive (params?: {}): Promise<implicitReturnType>;
    abstract publicGetContractsSymbol (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTicker (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTickers (params?: {}): Promise<implicitReturnType>;
    abstract publicGetLevel2Snapshot (params?: {}): Promise<implicitReturnType>;
    abstract publicGetLevel2Depth (params?: {}): Promise<implicitReturnType>;
    abstract publicGetLevel2MessageQuery (params?: {}): Promise<implicitReturnType>;
    abstract publicGetLevel3Snapshot (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTradeHistory (params?: {}): Promise<implicitReturnType>;
    abstract publicGetInterestQuery (params?: {}): Promise<implicitReturnType>;
    abstract publicGetIndexQuery (params?: {}): Promise<implicitReturnType>;
    abstract publicGetMarkPriceSymbolCurrent (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPremiumQuery (params?: {}): Promise<implicitReturnType>;
    abstract publicGetFundingRateSymbolCurrent (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTimestamp (params?: {}): Promise<implicitReturnType>;
    abstract publicGetStatus (params?: {}): Promise<implicitReturnType>;
    abstract publicGetKlineQuery (params?: {}): Promise<implicitReturnType>;
    abstract publicPostBulletPublic (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountOverview (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTransactionHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetStopOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetRecentDoneOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFills (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOpenOrderStatistics (params?: {}): Promise<implicitReturnType>;
    abstract privateGetPosition (params?: {}): Promise<implicitReturnType>;
    abstract privateGetPositions (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFundingHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginTypeQuery (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBatchOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostPositionMarginAutoDepositStatus (params?: {}): Promise<implicitReturnType>;
    abstract privatePostPositionMarginDepositMargin (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBulletPrivate (params?: {}): Promise<implicitReturnType>;
    abstract privatePostMarginTypeChange (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteStopOrders (params?: {}): Promise<implicitReturnType>;
}