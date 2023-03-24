import { implicitReturnType } from '../base/types.js'
import { Exchange as _Exchange } from '../base/Exchange.js'

export default abstract class Exchange extends _Exchange {
    abstract matcherGetMatcher (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherSettings (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherSettingsRates (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherBalanceReservedPublicKey (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherDebugAllSnashotOffsets (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherDebugCurrentOffset (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherDebugLastOffset (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherDebugOldestSnapshotOffset (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherOrderbook (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherOrderbookAmountAssetPriceAsset (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherOrderbookBaseIdQuoteIdPublicKeyPublicKey (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherOrderbookBaseIdQuoteIdOrderId (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherOrderbookBaseIdQuoteIdInfo (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherOrderbookBaseIdQuoteIdStatus (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherOrderbookBaseIdQuoteIdTradeableBalanceAddress (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherOrderbookPublicKey (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherOrderbookPublicKeyOrderId (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherOrdersAddress (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherOrdersAddressOrderId (params?: {}): Promise<implicitReturnType>;
    abstract matcherGetMatcherTransactionsOrderId (params?: {}): Promise<implicitReturnType>;
    abstract matcherPostMatcherOrderbook (params?: {}): Promise<implicitReturnType>;
    abstract matcherPostMatcherOrderbookMarket (params?: {}): Promise<implicitReturnType>;
    abstract matcherPostMatcherOrderbookCancel (params?: {}): Promise<implicitReturnType>;
    abstract matcherPostMatcherOrderbookBaseIdQuoteIdCancel (params?: {}): Promise<implicitReturnType>;
    abstract matcherPostMatcherOrderbookAmountAssetPriceAssetCalculateFee (params?: {}): Promise<implicitReturnType>;
    abstract matcherPostMatcherDebugSaveSnapshots (params?: {}): Promise<implicitReturnType>;
    abstract matcherPostMatcherOrdersAddressCancel (params?: {}): Promise<implicitReturnType>;
    abstract matcherPostMatcherOrdersCancelOrderId (params?: {}): Promise<implicitReturnType>;
    abstract matcherDeleteMatcherOrderbookBaseIdQuoteId (params?: {}): Promise<implicitReturnType>;
    abstract matcherDeleteMatcherSettingsRatesAssetId (params?: {}): Promise<implicitReturnType>;
    abstract matcherPutMatcherSettingsRatesAssetId (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddresses (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddressesBalanceAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddressesBalanceAddressConfirmations (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddressesBalanceDetailsAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddressesDataAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddressesDataAddressKey (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddressesEffectiveBalanceAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddressesEffectiveBalanceAddressConfirmations (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddressesPublicKeyPublicKey (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddressesScriptInfoAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddressesScriptInfoAddressMeta (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddressesSeedAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddressesSeqFromTo (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAddressesValidateAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAliasByAddressAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAliasByAliasAlias (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAssetsAssetIdDistributionHeightLimit (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAssetsBalanceAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAssetsBalanceAddressAssetId (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAssetsDetailsAssetId (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetAssetsNftAddressLimitLimit (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetBlockchainRewards (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetBlockchainRewardsHeight (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetBlocksAddressAddressFromTo (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetBlocksAtHeight (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetBlocksDelaySignatureBlockNum (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetBlocksFirst (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetBlocksHeadersLast (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetBlocksHeadersSeqFromTo (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetBlocksHeight (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetBlocksHeightSignature (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetBlocksLast (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetBlocksSeqFromTo (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetBlocksSignatureSignature (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetConsensusAlgo (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetConsensusBasetarget (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetConsensusBasetargetBlockId (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetConsensusGeneratingbalanceAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetConsensusGenerationsignature (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetConsensusGenerationsignatureBlockId (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetDebugBalancesHistoryAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetDebugBlocksHowMany (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetDebugConfigInfo (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetDebugHistoryInfo (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetDebugInfo (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetDebugMinerInfo (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetDebugPortfoliosAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetDebugState (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetDebugStateChangesAddressAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetDebugStateChangesInfoId (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetDebugStateWavesHeight (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetLeasingActiveAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetNodeState (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetNodeVersion (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetPeersAll (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetPeersBlacklisted (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetPeersConnected (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetPeersSuspended (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetTransactionsAddressAddressLimitLimit (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetTransactionsInfoId (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetTransactionsStatus (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetTransactionsUnconfirmed (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetTransactionsUnconfirmedInfoId (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetTransactionsUnconfirmedSize (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetUtilsSeed (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetUtilsSeedLength (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetUtilsTime (params?: {}): Promise<implicitReturnType>;
    abstract nodeGetWalletSeed (params?: {}): Promise<implicitReturnType>;
    abstract nodePostAddresses (params?: {}): Promise<implicitReturnType>;
    abstract nodePostAddressesDataAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodePostAddressesSignAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodePostAddressesSignTextAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodePostAddressesVerifyAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodePostAddressesVerifyTextAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodePostDebugBlacklist (params?: {}): Promise<implicitReturnType>;
    abstract nodePostDebugPrint (params?: {}): Promise<implicitReturnType>;
    abstract nodePostDebugRollback (params?: {}): Promise<implicitReturnType>;
    abstract nodePostDebugValidate (params?: {}): Promise<implicitReturnType>;
    abstract nodePostNodeStop (params?: {}): Promise<implicitReturnType>;
    abstract nodePostPeersClearblacklist (params?: {}): Promise<implicitReturnType>;
    abstract nodePostPeersConnect (params?: {}): Promise<implicitReturnType>;
    abstract nodePostTransactionsBroadcast (params?: {}): Promise<implicitReturnType>;
    abstract nodePostTransactionsCalculateFee (params?: {}): Promise<implicitReturnType>;
    abstract nodePostTranasctionsSign (params?: {}): Promise<implicitReturnType>;
    abstract nodePostTransactionsSignSignerAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodePostTranasctionsStatus (params?: {}): Promise<implicitReturnType>;
    abstract nodePostUtilsHashFast (params?: {}): Promise<implicitReturnType>;
    abstract nodePostUtilsHashSecure (params?: {}): Promise<implicitReturnType>;
    abstract nodePostUtilsScriptCompileCode (params?: {}): Promise<implicitReturnType>;
    abstract nodePostUtilsScriptCompileWithImports (params?: {}): Promise<implicitReturnType>;
    abstract nodePostUtilsScriptDecompile (params?: {}): Promise<implicitReturnType>;
    abstract nodePostUtilsScriptEstimate (params?: {}): Promise<implicitReturnType>;
    abstract nodePostUtilsSignPrivateKey (params?: {}): Promise<implicitReturnType>;
    abstract nodePostUtilsTransactionsSerialize (params?: {}): Promise<implicitReturnType>;
    abstract nodeDeleteAddressesAddress (params?: {}): Promise<implicitReturnType>;
    abstract nodeDeleteDebugRollbackToSignature (params?: {}): Promise<implicitReturnType>;
    abstract publicGetAssets (params?: {}): Promise<implicitReturnType>;
    abstract publicGetPairs (params?: {}): Promise<implicitReturnType>;
    abstract publicGetCandlesBaseIdQuoteId (params?: {}): Promise<implicitReturnType>;
    abstract publicGetTransactionsExchange (params?: {}): Promise<implicitReturnType>;
    abstract privateGetDepositAddressesCurrency (params?: {}): Promise<implicitReturnType>;
    abstract privateGetDepositAddressesCurrencyPlatform (params?: {}): Promise<implicitReturnType>;
    abstract privateGetPlatforms (params?: {}): Promise<implicitReturnType>;
    abstract privateGetDepositCurrencies (params?: {}): Promise<implicitReturnType>;
    abstract privateGetWithdrawCurrencies (params?: {}): Promise<implicitReturnType>;
    abstract privateGetWithdrawAddressesCurrencyAddress (params?: {}): Promise<implicitReturnType>;
    abstract privatePostOauth2Token (params?: {}): Promise<implicitReturnType>;
    abstract forwardGetMatcherOrdersAddress (params?: {}): Promise<implicitReturnType>;
    abstract forwardGetMatcherOrdersAddressOrderId (params?: {}): Promise<implicitReturnType>;
    abstract forwardPostMatcherOrdersWavesAddressCancel (params?: {}): Promise<implicitReturnType>;
    abstract marketGetTickers (params?: {}): Promise<implicitReturnType>;
}