import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract publicGetOrderBook (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTicker (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTransactions (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTradingPairs (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBalances (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBitcoinCashWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBitcoinCashDepositAddresses (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBitcoinDepositAddresses (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBitcoinWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBitcoinWithdrawalFees (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBuyInstant (params?: {}): Promise<implicitReturnType>;
    abstract privatePostBuyLimit (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCancelOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCancelOrderWithInfo (params?: {}): Promise<implicitReturnType>;
    abstract privatePostCreateVoucher (params?: {}): Promise<implicitReturnType>;
    abstract privatePostDashDepositAddresses (params?: {}): Promise<implicitReturnType>;
    abstract privatePostDashWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostEthereumWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostEthereumDepositAddresses (params?: {}): Promise<implicitReturnType>;
    abstract privatePostLitecoinWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostLitecoinDepositAddresses (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOpenOrders (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrder (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderHistory (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOrderById (params?: {}): Promise<implicitReturnType>;
    abstract privatePostPusherAuth (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRedeemVoucher (params?: {}): Promise<implicitReturnType>;
    abstract privatePostReplaceByBuyLimit (params?: {}): Promise<implicitReturnType>;
    abstract privatePostReplaceByBuyInstant (params?: {}): Promise<implicitReturnType>;
    abstract privatePostReplaceBySellLimit (params?: {}): Promise<implicitReturnType>;
    abstract privatePostReplaceBySellInstant (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRippleDepositAddresses (params?: {}): Promise<implicitReturnType>;
    abstract privatePostRippleWithdrawal (params?: {}): Promise<implicitReturnType>;
    abstract privatePostSellInstant (params?: {}): Promise<implicitReturnType>;
    abstract privatePostSellLimit (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTransactionHistory (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTraderFees (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTradeHistory (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTransfer (params?: {}): Promise<implicitReturnType>;
    abstract privatePostTransferHistory (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUnconfirmedBitcoinDeposits (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUnconfirmedBitcoinCashDeposits (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUnconfirmedDashDeposits (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUnconfirmedEthereumDeposits (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUnconfirmedLitecoinDeposits (params?: {}): Promise<implicitReturnType>;
    abstract privatePostUnconfirmedRippleDeposits (params?: {}): Promise<implicitReturnType>;
}