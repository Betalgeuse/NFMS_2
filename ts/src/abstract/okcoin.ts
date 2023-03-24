import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract generalGetTime (params?: {}): Promise<implicitReturnType>;
    abstract accountGetWallet (params?: {}): Promise<implicitReturnType>;
    abstract accountGetSubAccount (params?: {}): Promise<implicitReturnType>;
    abstract accountGetAssetValuation (params?: {}): Promise<implicitReturnType>;
    abstract accountGetWalletCurrency (params?: {}): Promise<implicitReturnType>;
    abstract accountGetWithdrawalHistory (params?: {}): Promise<implicitReturnType>;
    abstract accountGetWithdrawalHistoryCurrency (params?: {}): Promise<implicitReturnType>;
    abstract accountGetLedger (params?: {}): Promise<implicitReturnType>;
    abstract accountGetDepositAddress (params?: {}): Promise<implicitReturnType>;
    abstract accountGetDepositHistory (params?: {}): Promise<implicitReturnType>;
    abstract accountGetDepositHistoryCurrency (params?: {}): Promise<implicitReturnType>;
    abstract accountGetCurrencies (params?: {}): Promise<implicitReturnType>;
    abstract accountGetWithdrawalFee (params?: {}): Promise<implicitReturnType>;
    abstract accountGetDepositLightning (params?: {}): Promise<implicitReturnType>;
    abstract accountGetWithdrawalLightning (params?: {}): Promise<implicitReturnType>;
    abstract accountGetFiatDepositDetail (params?: {}): Promise<implicitReturnType>;
    abstract accountGetFiatDepositDetails (params?: {}): Promise<implicitReturnType>;
    abstract accountGetFiatWithdrawDetail (params?: {}): Promise<implicitReturnType>;
    abstract accountGetFiatWithdrawDetails (params?: {}): Promise<implicitReturnType>;
    abstract accountGetFiatChannel (params?: {}): Promise<implicitReturnType>;
    abstract accountPostTransfer (params?: {}): Promise<implicitReturnType>;
    abstract accountPostWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract accountPostFiatCancelDeposit (params?: {}): Promise<implicitReturnType>;
    abstract accountPostFiatDeposit (params?: {}): Promise<implicitReturnType>;
    abstract accountPostFiatWithdraw (params?: {}): Promise<implicitReturnType>;
    abstract accountPostFiatCancelWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract otcGetRfqInstruments (params?: {}): Promise<implicitReturnType>;
    abstract otcGetRfqTrade (params?: {}): Promise<implicitReturnType>;
    abstract otcGetRfqHistory (params?: {}): Promise<implicitReturnType>;
    abstract otcPostRfqQuote (params?: {}): Promise<implicitReturnType>;
    abstract otcPostRfqTrade (params?: {}): Promise<implicitReturnType>;
    abstract usersGetSubaccountInfo (params?: {}): Promise<implicitReturnType>;
    abstract usersGetAccountInfo (params?: {}): Promise<implicitReturnType>;
    abstract usersGetSubaccountApikey (params?: {}): Promise<implicitReturnType>;
    abstract usersPostCreateSubaccount (params?: {}): Promise<implicitReturnType>;
    abstract usersPostDeleteSubaccount (params?: {}): Promise<implicitReturnType>;
    abstract usersPostSubaccountApikey (params?: {}): Promise<implicitReturnType>;
    abstract usersPostSubacountDeleteApikey (params?: {}): Promise<implicitReturnType>;
    abstract usersPostSubacountModifyApikey (params?: {}): Promise<implicitReturnType>;
    abstract earningGetOffers (params?: {}): Promise<implicitReturnType>;
    abstract earningGetOrders (params?: {}): Promise<implicitReturnType>;
    abstract earningGetPositions (params?: {}): Promise<implicitReturnType>;
    abstract earningPostPurchase (params?: {}): Promise<implicitReturnType>;
    abstract earningPostRedeem (params?: {}): Promise<implicitReturnType>;
    abstract earningPostCancel (params?: {}): Promise<implicitReturnType>;
    abstract spotGetAccounts (params?: {}): Promise<implicitReturnType>;
    abstract spotGetAccountsCurrency (params?: {}): Promise<implicitReturnType>;
    abstract spotGetAccountsCurrencyLedger (params?: {}): Promise<implicitReturnType>;
    abstract spotGetOrders (params?: {}): Promise<implicitReturnType>;
    abstract spotGetOrdersPending (params?: {}): Promise<implicitReturnType>;
    abstract spotGetOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract spotGetOrdersClientOid (params?: {}): Promise<implicitReturnType>;
    abstract spotGetTradeFee (params?: {}): Promise<implicitReturnType>;
    abstract spotGetFills (params?: {}): Promise<implicitReturnType>;
    abstract spotGetAlgo (params?: {}): Promise<implicitReturnType>;
    abstract spotGetInstruments (params?: {}): Promise<implicitReturnType>;
    abstract spotGetInstrumentsInstrumentIdBook (params?: {}): Promise<implicitReturnType>;
    abstract spotGetInstrumentsTicker (params?: {}): Promise<implicitReturnType>;
    abstract spotGetInstrumentsInstrumentIdTicker (params?: {}): Promise<implicitReturnType>;
    abstract spotGetInstrumentsInstrumentIdTrades (params?: {}): Promise<implicitReturnType>;
    abstract spotGetInstrumentsInstrumentIdCandles (params?: {}): Promise<implicitReturnType>;
    abstract spotPostOrderAlgo (params?: {}): Promise<implicitReturnType>;
    abstract spotPostOrders (params?: {}): Promise<implicitReturnType>;
    abstract spotPostBatchOrders (params?: {}): Promise<implicitReturnType>;
    abstract spotPostCancelOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract spotPostCancelOrdersClientOid (params?: {}): Promise<implicitReturnType>;
    abstract spotPostCancelBatchAlgos (params?: {}): Promise<implicitReturnType>;
    abstract spotPostCancelBatchOrders (params?: {}): Promise<implicitReturnType>;
    abstract spotPostAmendOrderInstrumentId (params?: {}): Promise<implicitReturnType>;
    abstract spotPostAmendBatchOrders (params?: {}): Promise<implicitReturnType>;
    abstract marginGetAccounts (params?: {}): Promise<implicitReturnType>;
    abstract marginGetAccountsInstrumentId (params?: {}): Promise<implicitReturnType>;
    abstract marginGetAccountsInstrumentIdLedger (params?: {}): Promise<implicitReturnType>;
    abstract marginGetAccountsAvailability (params?: {}): Promise<implicitReturnType>;
    abstract marginGetAccountsInstrumentIdAvailability (params?: {}): Promise<implicitReturnType>;
    abstract marginGetAccountsBorrowed (params?: {}): Promise<implicitReturnType>;
    abstract marginGetAccountsInstrumentIdBorrowed (params?: {}): Promise<implicitReturnType>;
    abstract marginGetOrders (params?: {}): Promise<implicitReturnType>;
    abstract marginGetAccountsInstrumentIdLeverage (params?: {}): Promise<implicitReturnType>;
    abstract marginGetOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract marginGetOrdersClientOid (params?: {}): Promise<implicitReturnType>;
    abstract marginGetOrdersPending (params?: {}): Promise<implicitReturnType>;
    abstract marginGetFills (params?: {}): Promise<implicitReturnType>;
    abstract marginGetInstrumentsInstrumentIdMarkPrice (params?: {}): Promise<implicitReturnType>;
    abstract marginPostAccountsBorrow (params?: {}): Promise<implicitReturnType>;
    abstract marginPostAccountsRepayment (params?: {}): Promise<implicitReturnType>;
    abstract marginPostOrders (params?: {}): Promise<implicitReturnType>;
    abstract marginPostBatchOrders (params?: {}): Promise<implicitReturnType>;
    abstract marginPostCancelOrders (params?: {}): Promise<implicitReturnType>;
    abstract marginPostCancelOrdersOrderId (params?: {}): Promise<implicitReturnType>;
    abstract marginPostCancelOrdersClientOid (params?: {}): Promise<implicitReturnType>;
    abstract marginPostCancelBatchOrders (params?: {}): Promise<implicitReturnType>;
    abstract marginPostAmendOrderInstrumentId (params?: {}): Promise<implicitReturnType>;
    abstract marginPostAmendBatchOrders (params?: {}): Promise<implicitReturnType>;
    abstract marginPostAccountsInstrumentIdLeverage (params?: {}): Promise<implicitReturnType>;
    abstract systemGetStatus (params?: {}): Promise<implicitReturnType>;
    abstract marketGetOracle (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetPosition (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstrumentIdPosition (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetAccounts (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetAccountsUnderlying (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetAccountsUnderlyingLeverage (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetAccountsUnderlyingLedger (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetOrderAlgoInstrumentId (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetOrdersInstrumentId (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetOrdersInstrumentIdOrderId (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetOrdersInstrumentIdClientOid (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetFills (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetTradeFee (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetAccountsInstrumentIdHolds (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstruments (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstrumentsInstrumentIdBook (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstrumentsTicker (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstrumentsInstrumentIdTicker (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstrumentsInstrumentIdTrades (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstrumentsInstrumentIdCandles (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstrumentsInstrumentIdHistoryCandles (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstrumentsInstrumentIdIndex (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetRate (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstrumentsInstrumentIdEstimatedPrice (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstrumentsInstrumentIdOpenInterest (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstrumentsInstrumentIdPriceLimit (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstrumentsInstrumentIdMarkPrice (params?: {}): Promise<implicitReturnType>;
    abstract futuresGetInstrumentsInstrumentIdLiquidation (params?: {}): Promise<implicitReturnType>;
    abstract futuresPostAccountsUnderlyingLeverage (params?: {}): Promise<implicitReturnType>;
    abstract futuresPostOrder (params?: {}): Promise<implicitReturnType>;
    abstract futuresPostAmendOrderInstrumentId (params?: {}): Promise<implicitReturnType>;
    abstract futuresPostOrders (params?: {}): Promise<implicitReturnType>;
    abstract futuresPostCancelOrderInstrumentIdOrderId (params?: {}): Promise<implicitReturnType>;
    abstract futuresPostCancelOrderInstrumentIdClientOid (params?: {}): Promise<implicitReturnType>;
    abstract futuresPostCancelBatchOrdersInstrumentId (params?: {}): Promise<implicitReturnType>;
    abstract futuresPostAccountsMarginMode (params?: {}): Promise<implicitReturnType>;
    abstract futuresPostClosePosition (params?: {}): Promise<implicitReturnType>;
    abstract futuresPostCancelAll (params?: {}): Promise<implicitReturnType>;
    abstract futuresPostOrderAlgo (params?: {}): Promise<implicitReturnType>;
    abstract futuresPostCancelAlgos (params?: {}): Promise<implicitReturnType>;
    abstract swapGetPosition (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentIdPosition (params?: {}): Promise<implicitReturnType>;
    abstract swapGetAccounts (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentIdAccounts (params?: {}): Promise<implicitReturnType>;
    abstract swapGetAccountsInstrumentIdSettings (params?: {}): Promise<implicitReturnType>;
    abstract swapGetAccountsInstrumentIdLedger (params?: {}): Promise<implicitReturnType>;
    abstract swapGetOrdersInstrumentId (params?: {}): Promise<implicitReturnType>;
    abstract swapGetOrdersInstrumentIdOrderId (params?: {}): Promise<implicitReturnType>;
    abstract swapGetOrdersInstrumentIdClientOid (params?: {}): Promise<implicitReturnType>;
    abstract swapGetFills (params?: {}): Promise<implicitReturnType>;
    abstract swapGetAccountsInstrumentIdHolds (params?: {}): Promise<implicitReturnType>;
    abstract swapGetTradeFee (params?: {}): Promise<implicitReturnType>;
    abstract swapGetOrderAlgoInstrumentId (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstruments (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentsInstrumentIdDepth (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentsTicker (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentsInstrumentIdTicker (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentsInstrumentIdTrades (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentsInstrumentIdCandles (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentsInstrumentIdHistoryCandles (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentsInstrumentIdIndex (params?: {}): Promise<implicitReturnType>;
    abstract swapGetRate (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentsInstrumentIdOpenInterest (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentsInstrumentIdPriceLimit (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentsInstrumentIdLiquidation (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentsInstrumentIdFundingTime (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentsInstrumentIdMarkPrice (params?: {}): Promise<implicitReturnType>;
    abstract swapGetInstrumentsInstrumentIdHistoricalFundingRate (params?: {}): Promise<implicitReturnType>;
    abstract swapPostAccountsInstrumentIdLeverage (params?: {}): Promise<implicitReturnType>;
    abstract swapPostOrder (params?: {}): Promise<implicitReturnType>;
    abstract swapPostAmendOrderInstrumentId (params?: {}): Promise<implicitReturnType>;
    abstract swapPostOrders (params?: {}): Promise<implicitReturnType>;
    abstract swapPostCancelOrderInstrumentIdOrderId (params?: {}): Promise<implicitReturnType>;
    abstract swapPostCancelOrderInstrumentIdClientOid (params?: {}): Promise<implicitReturnType>;
    abstract swapPostCancelBatchOrdersInstrumentId (params?: {}): Promise<implicitReturnType>;
    abstract swapPostOrderAlgo (params?: {}): Promise<implicitReturnType>;
    abstract swapPostCancelAlgos (params?: {}): Promise<implicitReturnType>;
    abstract swapPostClosePosition (params?: {}): Promise<implicitReturnType>;
    abstract swapPostCancelAll (params?: {}): Promise<implicitReturnType>;
    abstract optionGetAccounts (params?: {}): Promise<implicitReturnType>;
    abstract optionGetPosition (params?: {}): Promise<implicitReturnType>;
    abstract optionGetUnderlyingPosition (params?: {}): Promise<implicitReturnType>;
    abstract optionGetAccountsUnderlying (params?: {}): Promise<implicitReturnType>;
    abstract optionGetOrdersUnderlying (params?: {}): Promise<implicitReturnType>;
    abstract optionGetFillsUnderlying (params?: {}): Promise<implicitReturnType>;
    abstract optionGetAccountsUnderlyingLedger (params?: {}): Promise<implicitReturnType>;
    abstract optionGetTradeFee (params?: {}): Promise<implicitReturnType>;
    abstract optionGetOrdersUnderlyingOrderId (params?: {}): Promise<implicitReturnType>;
    abstract optionGetOrdersUnderlyingClientOid (params?: {}): Promise<implicitReturnType>;
    abstract optionGetUnderlying (params?: {}): Promise<implicitReturnType>;
    abstract optionGetInstrumentsUnderlying (params?: {}): Promise<implicitReturnType>;
    abstract optionGetInstrumentsUnderlyingSummary (params?: {}): Promise<implicitReturnType>;
    abstract optionGetInstrumentsUnderlyingSummaryInstrumentId (params?: {}): Promise<implicitReturnType>;
    abstract optionGetInstrumentsInstrumentIdBook (params?: {}): Promise<implicitReturnType>;
    abstract optionGetInstrumentsInstrumentIdTrades (params?: {}): Promise<implicitReturnType>;
    abstract optionGetInstrumentsInstrumentIdTicker (params?: {}): Promise<implicitReturnType>;
    abstract optionGetInstrumentsInstrumentIdCandles (params?: {}): Promise<implicitReturnType>;
    abstract optionPostOrder (params?: {}): Promise<implicitReturnType>;
    abstract optionPostOrders (params?: {}): Promise<implicitReturnType>;
    abstract optionPostCancelOrderUnderlyingOrderId (params?: {}): Promise<implicitReturnType>;
    abstract optionPostCancelOrderUnderlyingClientOid (params?: {}): Promise<implicitReturnType>;
    abstract optionPostCancelBatchOrdersUnderlying (params?: {}): Promise<implicitReturnType>;
    abstract optionPostAmendOrderUnderlying (params?: {}): Promise<implicitReturnType>;
    abstract optionPostAmendBatchOrdersUnderlying (params?: {}): Promise<implicitReturnType>;
    abstract informationGetCurrencyLongShortRatio (params?: {}): Promise<implicitReturnType>;
    abstract informationGetCurrencyVolume (params?: {}): Promise<implicitReturnType>;
    abstract informationGetCurrencyTaker (params?: {}): Promise<implicitReturnType>;
    abstract informationGetCurrencySentiment (params?: {}): Promise<implicitReturnType>;
    abstract informationGetCurrencyMargin (params?: {}): Promise<implicitReturnType>;
    abstract indexGetInstrumentIdConstituents (params?: {}): Promise<implicitReturnType>;
}