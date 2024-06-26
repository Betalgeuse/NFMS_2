// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

namespace ccxt;

public partial class whitebit : Exchange
{
    public whitebit (object args = null): base(args) {}

    public async Task<object> webGetV1Healthcheck (object parameters = null)
    {
        return await this.callAsync ("webGetV1Healthcheck",parameters);
    }

    public async Task<object> v1PublicGetMarkets (object parameters = null)
    {
        return await this.callAsync ("v1PublicGetMarkets",parameters);
    }

    public async Task<object> v1PublicGetTickers (object parameters = null)
    {
        return await this.callAsync ("v1PublicGetTickers",parameters);
    }

    public async Task<object> v1PublicGetTicker (object parameters = null)
    {
        return await this.callAsync ("v1PublicGetTicker",parameters);
    }

    public async Task<object> v1PublicGetSymbols (object parameters = null)
    {
        return await this.callAsync ("v1PublicGetSymbols",parameters);
    }

    public async Task<object> v1PublicGetDepthResult (object parameters = null)
    {
        return await this.callAsync ("v1PublicGetDepthResult",parameters);
    }

    public async Task<object> v1PublicGetHistory (object parameters = null)
    {
        return await this.callAsync ("v1PublicGetHistory",parameters);
    }

    public async Task<object> v1PublicGetKline (object parameters = null)
    {
        return await this.callAsync ("v1PublicGetKline",parameters);
    }

    public async Task<object> v1PrivatePostAccountBalance (object parameters = null)
    {
        return await this.callAsync ("v1PrivatePostAccountBalance",parameters);
    }

    public async Task<object> v1PrivatePostOrderNew (object parameters = null)
    {
        return await this.callAsync ("v1PrivatePostOrderNew",parameters);
    }

    public async Task<object> v1PrivatePostOrderCancel (object parameters = null)
    {
        return await this.callAsync ("v1PrivatePostOrderCancel",parameters);
    }

    public async Task<object> v1PrivatePostOrders (object parameters = null)
    {
        return await this.callAsync ("v1PrivatePostOrders",parameters);
    }

    public async Task<object> v1PrivatePostAccountOrderHistory (object parameters = null)
    {
        return await this.callAsync ("v1PrivatePostAccountOrderHistory",parameters);
    }

    public async Task<object> v1PrivatePostAccountExecutedHistory (object parameters = null)
    {
        return await this.callAsync ("v1PrivatePostAccountExecutedHistory",parameters);
    }

    public async Task<object> v1PrivatePostAccountExecutedHistoryAll (object parameters = null)
    {
        return await this.callAsync ("v1PrivatePostAccountExecutedHistoryAll",parameters);
    }

    public async Task<object> v1PrivatePostAccountOrder (object parameters = null)
    {
        return await this.callAsync ("v1PrivatePostAccountOrder",parameters);
    }

    public async Task<object> v2PublicGetMarkets (object parameters = null)
    {
        return await this.callAsync ("v2PublicGetMarkets",parameters);
    }

    public async Task<object> v2PublicGetTicker (object parameters = null)
    {
        return await this.callAsync ("v2PublicGetTicker",parameters);
    }

    public async Task<object> v2PublicGetAssets (object parameters = null)
    {
        return await this.callAsync ("v2PublicGetAssets",parameters);
    }

    public async Task<object> v2PublicGetFee (object parameters = null)
    {
        return await this.callAsync ("v2PublicGetFee",parameters);
    }

    public async Task<object> v2PublicGetDepthMarket (object parameters = null)
    {
        return await this.callAsync ("v2PublicGetDepthMarket",parameters);
    }

    public async Task<object> v2PublicGetTradesMarket (object parameters = null)
    {
        return await this.callAsync ("v2PublicGetTradesMarket",parameters);
    }

    public async Task<object> v4PublicGetAssets (object parameters = null)
    {
        return await this.callAsync ("v4PublicGetAssets",parameters);
    }

    public async Task<object> v4PublicGetCollateralMarkets (object parameters = null)
    {
        return await this.callAsync ("v4PublicGetCollateralMarkets",parameters);
    }

    public async Task<object> v4PublicGetFee (object parameters = null)
    {
        return await this.callAsync ("v4PublicGetFee",parameters);
    }

    public async Task<object> v4PublicGetOrderbookMarket (object parameters = null)
    {
        return await this.callAsync ("v4PublicGetOrderbookMarket",parameters);
    }

    public async Task<object> v4PublicGetTicker (object parameters = null)
    {
        return await this.callAsync ("v4PublicGetTicker",parameters);
    }

    public async Task<object> v4PublicGetTradesMarket (object parameters = null)
    {
        return await this.callAsync ("v4PublicGetTradesMarket",parameters);
    }

    public async Task<object> v4PublicGetTime (object parameters = null)
    {
        return await this.callAsync ("v4PublicGetTime",parameters);
    }

    public async Task<object> v4PublicGetPing (object parameters = null)
    {
        return await this.callAsync ("v4PublicGetPing",parameters);
    }

    public async Task<object> v4PublicGetMarkets (object parameters = null)
    {
        return await this.callAsync ("v4PublicGetMarkets",parameters);
    }

    public async Task<object> v4PublicGetFutures (object parameters = null)
    {
        return await this.callAsync ("v4PublicGetFutures",parameters);
    }

    public async Task<object> v4PrivatePostCollateralAccountBalance (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostCollateralAccountBalance",parameters);
    }

    public async Task<object> v4PrivatePostCollateralAccountPositionsHistory (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostCollateralAccountPositionsHistory",parameters);
    }

    public async Task<object> v4PrivatePostCollateralAccountLeverage (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostCollateralAccountLeverage",parameters);
    }

    public async Task<object> v4PrivatePostCollateralAccountPositionsOpen (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostCollateralAccountPositionsOpen",parameters);
    }

    public async Task<object> v4PrivatePostCollateralAccountSummary (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostCollateralAccountSummary",parameters);
    }

    public async Task<object> v4PrivatePostMainAccountAddress (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostMainAccountAddress",parameters);
    }

    public async Task<object> v4PrivatePostMainAccountBalance (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostMainAccountBalance",parameters);
    }

    public async Task<object> v4PrivatePostMainAccountCreateNewAddress (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostMainAccountCreateNewAddress",parameters);
    }

    public async Task<object> v4PrivatePostMainAccountCodes (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostMainAccountCodes",parameters);
    }

    public async Task<object> v4PrivatePostMainAccountCodesApply (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostMainAccountCodesApply",parameters);
    }

    public async Task<object> v4PrivatePostMainAccountCodesMy (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostMainAccountCodesMy",parameters);
    }

    public async Task<object> v4PrivatePostMainAccountCodesHistory (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostMainAccountCodesHistory",parameters);
    }

    public async Task<object> v4PrivatePostMainAccountFiatDepositUrl (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostMainAccountFiatDepositUrl",parameters);
    }

    public async Task<object> v4PrivatePostMainAccountHistory (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostMainAccountHistory",parameters);
    }

    public async Task<object> v4PrivatePostMainAccountWithdraw (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostMainAccountWithdraw",parameters);
    }

    public async Task<object> v4PrivatePostMainAccountWithdrawPay (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostMainAccountWithdrawPay",parameters);
    }

    public async Task<object> v4PrivatePostMainAccountTransfer (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostMainAccountTransfer",parameters);
    }

    public async Task<object> v4PrivatePostTradeAccountBalance (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostTradeAccountBalance",parameters);
    }

    public async Task<object> v4PrivatePostTradeAccountExecutedHistory (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostTradeAccountExecutedHistory",parameters);
    }

    public async Task<object> v4PrivatePostTradeAccountOrder (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostTradeAccountOrder",parameters);
    }

    public async Task<object> v4PrivatePostTradeAccountOrderHistory (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostTradeAccountOrderHistory",parameters);
    }

    public async Task<object> v4PrivatePostOrderCollateralLimit (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostOrderCollateralLimit",parameters);
    }

    public async Task<object> v4PrivatePostOrderCollateralMarket (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostOrderCollateralMarket",parameters);
    }

    public async Task<object> v4PrivatePostOrderCollateralTriggerMarket (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostOrderCollateralTriggerMarket",parameters);
    }

    public async Task<object> v4PrivatePostOrderNew (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostOrderNew",parameters);
    }

    public async Task<object> v4PrivatePostOrderMarket (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostOrderMarket",parameters);
    }

    public async Task<object> v4PrivatePostOrderStockMarket (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostOrderStockMarket",parameters);
    }

    public async Task<object> v4PrivatePostOrderStopLimit (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostOrderStopLimit",parameters);
    }

    public async Task<object> v4PrivatePostOrderStopMarket (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostOrderStopMarket",parameters);
    }

    public async Task<object> v4PrivatePostOrderCancel (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostOrderCancel",parameters);
    }

    public async Task<object> v4PrivatePostOrders (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostOrders",parameters);
    }

    public async Task<object> v4PrivatePostProfileWebsocketToken (object parameters = null)
    {
        return await this.callAsync ("v4PrivatePostProfileWebsocketToken",parameters);
    }

}