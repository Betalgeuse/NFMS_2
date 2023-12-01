import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    publicGetV1Symbols(params?: {}): Promise<implicitReturnType>;
    publicGetV1SymbolsSummary(params?: {}): Promise<implicitReturnType>;
    publicGetV1SymbolsSymbol(params?: {}): Promise<implicitReturnType>;
    publicGetV1SymbolsSymbolSummary(params?: {}): Promise<implicitReturnType>;
    publicGetV1SymbolsSymbolBook(params?: {}): Promise<implicitReturnType>;
    publicGetV1SymbolsSymbolQuote(params?: {}): Promise<implicitReturnType>;
    publicGetV1SymbolsSymbolCandles(params?: {}): Promise<implicitReturnType>;
    publicGetV1SymbolsSymbolAuctions(params?: {}): Promise<implicitReturnType>;
    publicGetV1SymbolsSymbolAuctionsAuctionCode(params?: {}): Promise<implicitReturnType>;
    publicGetV1Time(params?: {}): Promise<implicitReturnType>;
    publicGetV1Assets(params?: {}): Promise<implicitReturnType>;
    privateGetV1Fees(params?: {}): Promise<implicitReturnType>;
    privateGetV1Accounts(params?: {}): Promise<implicitReturnType>;
    privateGetV1AccountsTraderId(params?: {}): Promise<implicitReturnType>;
    privateGetV1AccountsTraderIdLedger(params?: {}): Promise<implicitReturnType>;
    privateGetV1AccountsTraderIdWallets(params?: {}): Promise<implicitReturnType>;
    privateGetV1AccountsTraderIdWalletLedger(params?: {}): Promise<implicitReturnType>;
    privateGetV1AccountsTraderIdLedgerSummary(params?: {}): Promise<implicitReturnType>;
    privateGetV1Keys(params?: {}): Promise<implicitReturnType>;
    privateGetV1Fills(params?: {}): Promise<implicitReturnType>;
    privateGetV1Orders(params?: {}): Promise<implicitReturnType>;
    privateGetV1OrdersOrderId(params?: {}): Promise<implicitReturnType>;
    privateGetV1Reports(params?: {}): Promise<implicitReturnType>;
    privateGetV1Balances(params?: {}): Promise<implicitReturnType>;
    privateGetV1Transfers(params?: {}): Promise<implicitReturnType>;
    privateGetV1User(params?: {}): Promise<implicitReturnType>;
    privateGetV1Credits(params?: {}): Promise<implicitReturnType>;
    privatePostV1Keys(params?: {}): Promise<implicitReturnType>;
    privatePostV1Orders(params?: {}): Promise<implicitReturnType>;
    privatePostV1OrdersCancelAllAfter(params?: {}): Promise<implicitReturnType>;
    privatePostV1Reports(params?: {}): Promise<implicitReturnType>;
    privatePostV1TransfersToWallet(params?: {}): Promise<implicitReturnType>;
    privatePostV1TransfersFromWallet(params?: {}): Promise<implicitReturnType>;
    privatePostV1TransfersInternalTransfer(params?: {}): Promise<implicitReturnType>;
    privatePostV1TransfersWithdrawalRequest(params?: {}): Promise<implicitReturnType>;
    privatePostV1OrdersBulk(params?: {}): Promise<implicitReturnType>;
    privatePatchV1OrdersOrderId(params?: {}): Promise<implicitReturnType>;
    privatePatchV1OrdersBulk(params?: {}): Promise<implicitReturnType>;
    privateDeleteV1KeysKey(params?: {}): Promise<implicitReturnType>;
    privateDeleteV1Orders(params?: {}): Promise<implicitReturnType>;
    privateDeleteV1OrdersOrderId(params?: {}): Promise<implicitReturnType>;
    privateDeleteV1OrdersBulk(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
