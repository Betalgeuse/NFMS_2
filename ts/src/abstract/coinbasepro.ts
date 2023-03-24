import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract publicGetCurrencies (params?: {}): Promise<implicitReturnType>;
    abstract publicGetProducts (params?: {}): Promise<implicitReturnType>;
    abstract publicGetProductsId (params?: {}): Promise<implicitReturnType>;
    abstract publicGetProductsIdBook (params?: {}): Promise<implicitReturnType>;
    abstract publicGetProductsIdCandles (params?: {}): Promise<implicitReturnType>;
    abstract publicGetProductsIdStats (params?: {}): Promise<implicitReturnType>;
    abstract publicGetProductsIdTicker (params?: {}): Promise<implicitReturnType>;
    abstract publicGetProductsIdTrades (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTime (params?: {}): Promise<implicitReturnType>;
    abstract publicGetProductsSparkLines (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccounts (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountsId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountsIdHolds (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountsIdLedger (params?: {}): Promise<implicitReturnType>;
    abstract privateGetAccountsIdTransfers (params?: {}): Promise<implicitReturnType>;
    abstract privateGetCoinbaseAccounts (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFills (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFunding (params?: {}): Promise<implicitReturnType>;
    abstract privateGetFees (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginProfileInformation (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginBuyingPower (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginWithdrawalPower (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginWithdrawalPowerAll (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginExitPlan (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginLiquidationHistory (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginPositionRefreshAmounts (params?: {}): Promise<implicitReturnType>;
    abstract privateGetMarginStatus (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOracle (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrdersId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOrdersClientClientOid (params?: {}): Promise<implicitReturnType>;
    abstract privateGetOtcOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateGetPaymentMethods (params?: {}): Promise<implicitReturnType>;
    abstract privateGetPosition (params?: {}): Promise<implicitReturnType>;
    abstract privateGetProfiles (params?: {}): Promise<implicitReturnType>;
    abstract privateGetProfilesId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetReportsReportId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTransfers (params?: {}): Promise<implicitReturnType>;
    abstract privateGetTransfersTransferId (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUsersSelfExchangeLimits (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUsersSelfHoldBalances (params?: {}): Promise<implicitReturnType>;
    abstract privateGetUsersSelfTrailingVolume (params?: {}): Promise<implicitReturnType>;
    abstract privateGetWithdrawalsFeeEstimate (params?: {}): Promise<implicitReturnType>;
    abstract privateGetConversionsConversionId (params?: {}): Promise<implicitReturnType>;
    abstract privatePostConversions (params?: {}): Promise<implicitReturnType>;
    abstract privatePostDepositsCoinbaseAccount (params?: {}): Promise<implicitReturnType>;
    abstract privatePostDepositsPaymentMethod (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCoinbaseAccountsIdAddresses (params?: {}): Promise<implicitReturnType>;
    abstract privatePostFundingRepay (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostPositionClose (params?: {}): Promise<implicitReturnType>;
    abstract privatePostProfilesMarginTransfer (params?: {}): Promise<implicitReturnType>;
    abstract privatePostProfilesTransfer (params?: {}): Promise<implicitReturnType>;
    abstract privatePostReports (params?: {}): Promise<implicitReturnType>;
    abstract privatePostWithdrawalsCoinbase (params?: {}): Promise<implicitReturnType>;
    abstract privatePostWithdrawalsCoinbaseAccount (params?: {}): Promise<implicitReturnType>;
    abstract privatePostWithdrawalsCrypto (params?: {}): Promise<implicitReturnType>;
    abstract privatePostWithdrawalsPaymentMethod (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrders (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrdersClientClientOid (params?: {}): Promise<implicitReturnType>;
    abstract privateDeleteOrdersId (params?: {}): Promise<implicitReturnType>;
}