import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    publicGetCfgV2Products(params?: {}): Promise<implicitReturnType>;
    publicGetCfgFundingRates(params?: {}): Promise<implicitReturnType>;
    publicGetProducts(params?: {}): Promise<implicitReturnType>;
    publicGetNomicsTrades(params?: {}): Promise<implicitReturnType>;
    publicGetMdKline(params?: {}): Promise<implicitReturnType>;
    publicGetMdV2KlineList(params?: {}): Promise<implicitReturnType>;
    publicGetMdV2Kline(params?: {}): Promise<implicitReturnType>;
    publicGetMdV2KlineLast(params?: {}): Promise<implicitReturnType>;
    publicGetMdOrderbook(params?: {}): Promise<implicitReturnType>;
    publicGetMdTrade(params?: {}): Promise<implicitReturnType>;
    publicGetMdSpotTicker24hr(params?: {}): Promise<implicitReturnType>;
    publicGetExchangePublicCfgChainSettings(params?: {}): Promise<implicitReturnType>;
    v1GetMdFullbook(params?: {}): Promise<implicitReturnType>;
    v1GetMdOrderbook(params?: {}): Promise<implicitReturnType>;
    v1GetMdTrade(params?: {}): Promise<implicitReturnType>;
    v1GetMdTicker24hr(params?: {}): Promise<implicitReturnType>;
    v1GetMdTicker24hrAll(params?: {}): Promise<implicitReturnType>;
    v1GetMdSpotTicker24hr(params?: {}): Promise<implicitReturnType>;
    v1GetMdSpotTicker24hrAll(params?: {}): Promise<implicitReturnType>;
    v1GetExchangePublicProducts(params?: {}): Promise<implicitReturnType>;
    v1GetApiDataPublicDataFundingRateHistory(params?: {}): Promise<implicitReturnType>;
    v2GetMdV2Orderbook(params?: {}): Promise<implicitReturnType>;
    v2GetMdV2Trade(params?: {}): Promise<implicitReturnType>;
    v2GetMdV2Ticker24hr(params?: {}): Promise<implicitReturnType>;
    v2GetMdV2Ticker24hrAll(params?: {}): Promise<implicitReturnType>;
    v2GetApiDataPublicDataFundingRateHistory(params?: {}): Promise<implicitReturnType>;
    privateGetSpotOrdersActive(params?: {}): Promise<implicitReturnType>;
    privateGetSpotOrders(params?: {}): Promise<implicitReturnType>;
    privateGetSpotWallets(params?: {}): Promise<implicitReturnType>;
    privateGetExchangeSpotOrder(params?: {}): Promise<implicitReturnType>;
    privateGetExchangeSpotOrderTrades(params?: {}): Promise<implicitReturnType>;
    privateGetExchangeOrderV2OrderList(params?: {}): Promise<implicitReturnType>;
    privateGetExchangeOrderV2TradingList(params?: {}): Promise<implicitReturnType>;
    privateGetAccountsAccountPositions(params?: {}): Promise<implicitReturnType>;
    privateGetGAccountsAccountPositions(params?: {}): Promise<implicitReturnType>;
    privateGetAccountsPositions(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataFuturesFundingFees(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataGFuturesFundingFees(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataFuturesOrders(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataGFuturesOrders(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataFuturesOrdersByOrderId(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataGFuturesOrdersByOrderId(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataFuturesTrades(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataGFuturesTrades(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataFuturesTradingFees(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataGFuturesTradingFees(params?: {}): Promise<implicitReturnType>;
    privateGetGOrdersActiveList(params?: {}): Promise<implicitReturnType>;
    privateGetOrdersActiveList(params?: {}): Promise<implicitReturnType>;
    privateGetExchangeOrderList(params?: {}): Promise<implicitReturnType>;
    privateGetExchangeOrder(params?: {}): Promise<implicitReturnType>;
    privateGetExchangeOrderTrade(params?: {}): Promise<implicitReturnType>;
    privateGetPhemexUserUsersChildren(params?: {}): Promise<implicitReturnType>;
    privateGetPhemexUserWalletsV2DepositAddress(params?: {}): Promise<implicitReturnType>;
    privateGetPhemexUserWalletsTradeAccountDetail(params?: {}): Promise<implicitReturnType>;
    privateGetPhemexDepositWalletsApiDepositAddress(params?: {}): Promise<implicitReturnType>;
    privateGetPhemexDepositWalletsApiDepositHist(params?: {}): Promise<implicitReturnType>;
    privateGetPhemexDepositWalletsApiChainCfg(params?: {}): Promise<implicitReturnType>;
    privateGetPhemexWithdrawWalletsApiWithdrawHist(params?: {}): Promise<implicitReturnType>;
    privateGetPhemexWithdrawWalletsApiAssetInfo(params?: {}): Promise<implicitReturnType>;
    privateGetPhemexUserOrderClosedPositionList(params?: {}): Promise<implicitReturnType>;
    privateGetExchangeMarginsTransfer(params?: {}): Promise<implicitReturnType>;
    privateGetExchangeWalletsConfirmWithdraw(params?: {}): Promise<implicitReturnType>;
    privateGetExchangeWalletsWithdrawList(params?: {}): Promise<implicitReturnType>;
    privateGetExchangeWalletsDepositList(params?: {}): Promise<implicitReturnType>;
    privateGetExchangeWalletsV2DepositAddress(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataSpotsFunds(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataSpotsOrders(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataSpotsOrdersByOrderId(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataSpotsPnls(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataSpotsTrades(params?: {}): Promise<implicitReturnType>;
    privateGetApiDataSpotsTradesByOrderId(params?: {}): Promise<implicitReturnType>;
    privateGetAssetsConvert(params?: {}): Promise<implicitReturnType>;
    privateGetAssetsTransfer(params?: {}): Promise<implicitReturnType>;
    privateGetAssetsSpotsSubAccountsTransfer(params?: {}): Promise<implicitReturnType>;
    privateGetAssetsFuturesSubAccountsTransfer(params?: {}): Promise<implicitReturnType>;
    privateGetAssetsQuote(params?: {}): Promise<implicitReturnType>;
    privatePostSpotOrders(params?: {}): Promise<implicitReturnType>;
    privatePostOrders(params?: {}): Promise<implicitReturnType>;
    privatePostGOrders(params?: {}): Promise<implicitReturnType>;
    privatePostPositionsAssign(params?: {}): Promise<implicitReturnType>;
    privatePostExchangeWalletsTransferOut(params?: {}): Promise<implicitReturnType>;
    privatePostExchangeWalletsTransferIn(params?: {}): Promise<implicitReturnType>;
    privatePostExchangeMargins(params?: {}): Promise<implicitReturnType>;
    privatePostExchangeWalletsCreateWithdraw(params?: {}): Promise<implicitReturnType>;
    privatePostExchangeWalletsCancelWithdraw(params?: {}): Promise<implicitReturnType>;
    privatePostExchangeWalletsCreateWithdrawAddress(params?: {}): Promise<implicitReturnType>;
    privatePostAssetsTransfer(params?: {}): Promise<implicitReturnType>;
    privatePostAssetsSpotsSubAccountsTransfer(params?: {}): Promise<implicitReturnType>;
    privatePostAssetsFuturesSubAccountsTransfer(params?: {}): Promise<implicitReturnType>;
    privatePostAssetsUniversalTransfer(params?: {}): Promise<implicitReturnType>;
    privatePostAssetsConvert(params?: {}): Promise<implicitReturnType>;
    privatePostPhemexWithdrawWalletsApiCreateWithdraw(params?: {}): Promise<implicitReturnType>;
    privatePostPhemexWithdrawWalletsApiCancelWithdraw(params?: {}): Promise<implicitReturnType>;
    privatePutSpotOrdersCreate(params?: {}): Promise<implicitReturnType>;
    privatePutSpotOrders(params?: {}): Promise<implicitReturnType>;
    privatePutOrdersReplace(params?: {}): Promise<implicitReturnType>;
    privatePutGOrdersReplace(params?: {}): Promise<implicitReturnType>;
    privatePutPositionsLeverage(params?: {}): Promise<implicitReturnType>;
    privatePutGPositionsLeverage(params?: {}): Promise<implicitReturnType>;
    privatePutGPositionsSwitchPosModeSync(params?: {}): Promise<implicitReturnType>;
    privatePutPositionsRiskLimit(params?: {}): Promise<implicitReturnType>;
    privateDeleteSpotOrders(params?: {}): Promise<implicitReturnType>;
    privateDeleteSpotOrdersAll(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrdersCancel(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrders(params?: {}): Promise<implicitReturnType>;
    privateDeleteOrdersAll(params?: {}): Promise<implicitReturnType>;
    privateDeleteGOrdersCancel(params?: {}): Promise<implicitReturnType>;
    privateDeleteGOrders(params?: {}): Promise<implicitReturnType>;
    privateDeleteGOrdersAll(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
