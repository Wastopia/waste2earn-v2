import { lazy } from "react";
import Loadable from "../components/Loading/Loadable";

const Home = Loadable(lazy(() => import("../views/home")));
const Partner = Loadable(lazy(() => import("../views/partner")));
const Wallet = Loadable(lazy(() => import("../views/wallet/index")));
const StakingFarm = Loadable(lazy(() => import("../views/staking-farm/index")));
const StakingFarmCreate = Loadable(lazy(() => import("../views/staking-farm/create")));

const StakingToken = Loadable(lazy(() => import("../views/staking-token")));
const StakingTokenCreate = Loadable(lazy(() => import("../views/staking-token/create")));

const Swap = Loadable(lazy(() => import("../views/swap-liquidity-v3/Swap")));
const Liquidity = Loadable(lazy(() => import("../views/swap-liquidity-v3/liquidity/index")));
const AddLiquidity = Loadable(lazy(() => import("../views/swap-liquidity-v3/liquidity/AddLiquidity")));
const IncreaseLiquidity = Loadable(lazy(() => import("../views/swap-liquidity-v3/liquidity/IncreaseLiquidity")));
const DecreaseLiquidity = Loadable(lazy(() => import("../views/swap-liquidity-v3/liquidity/DecreaseLiquidity")));
const SwapReclaim = Loadable(lazy(() => import("../views/swap-liquidity-v3/Reclaim")));
const SwapFindMisTransferToken = Loadable(lazy(() => import("../views/swap-liquidity-v3/MisTransferTokens")));
const SwapRevokeApprove = Loadable(lazy(() => import("../views/swap-liquidity-v3/RevokeApprove")));
const PCMReclaim = Loadable(lazy(() => import("../views/swap-liquidity-v3/PCMReclaim")));

const NFTView = Loadable(lazy(() => import("../views/nft/View")));
const WalletNFTView = Loadable(lazy(() => import("../views/nft/WalletNFTView")));
const NFTMint = Loadable(lazy(() => import("../views/nft/Mint")));
const Console = Loadable(lazy(() => import("../views/console/index")));
const ConsoleBurn = Loadable(lazy(() => import("../views/console/burn")));

const NFTCanisterList = Loadable(lazy(() => import("../views/nft/CanisterList")));
const NFTCanisterCreate = Loadable(lazy(() => import("../views/nft/CanisterCreate")));
const NFTCanisterDetails = Loadable(lazy(() => import("../views/nft/CanisterDetails")));

const NFTMarket = Loadable(lazy(() => import("../views/nft")));
const NFTCollectMarket = Loadable(lazy(() => import("../views/nft/Collection")));
const NFTMarketCollections = Loadable(lazy(() => import("../views/nft/MarketplaceCollections")));

const Voting = Loadable(lazy(() => import("../views/voting/index")));
const VotingProject = Loadable(lazy(() => import("../views/voting/project")));
const VotingProposal = Loadable(lazy(() => import("../views/voting/proposal")));
const VotingCreateProposal = Loadable(lazy(() => import("../views/voting/create")));
const VoteCreateProject = Loadable(lazy(() => import("../views/voting/create-project")));

const TokenClaimIndex = Loadable(lazy(() => import("../views/token-claim/index")));
const TokenClaimTransactions = Loadable(lazy(() => import("../views/token-claim/transactions")));
const CreateTokenClaim = Loadable(lazy(() => import("../views/token-claim/create")));

const LiquidityV2 = Loadable(lazy(() => import("../views/swap-v2/liquidity/index")));
const AddLiquidityV2 = Loadable(lazy(() => import("../views/swap-v2/liquidity/AddLiquidity")));
const IncreaseLiquidityV2 = Loadable(lazy(() => import("../views/swap-v2/liquidity/IncreaseLiquidity")));
const DecreaseLiquidityV2 = Loadable(lazy(() => import("../views/swap-v2/liquidity/DecreaseLiquidity")));
const Wrap = Loadable(lazy(() => import("../views/swap-v2/wrap/index")));

const ckBTC = Loadable(lazy(() => import("../views/wallet/ckBTC")));
const ckETH = Loadable(lazy(() => import("../views/wallet/ckETH")));

export const routeConfigs: { [path: string]: (props: any) => JSX.Element } = {
  "/home": Home,
  "/partner": Partner,
  "/wallet": Wallet,

  "/wallet/ckBTC": ckBTC,
  "/wallet/ckETH": ckETH,
  "/wallet/nft/view/:canisterId/:tokenId": WalletNFTView,
  "/wallet/nft/canister/details/:id": NFTCanisterDetails,

  "/staking-token": StakingToken,
  "/staking-token/create": StakingTokenCreate,
  "/staking-farm": StakingFarm,
  "/staking-farm/create": StakingFarmCreate,

  "/swap": Swap,
  "/swap/liquidity": Liquidity,
  "/swap/liquidity/add/:currencyIdA?/:currencyIdB?/:feeAmount?": AddLiquidity,
  "/swap/liquidity/decrease/:positionId/:pool": DecreaseLiquidity,
  "/swap/liquidity/increase/:positionId/:pool": IncreaseLiquidity,
  "/swap/reclaim": SwapReclaim,
  "/swap/find-mis-transferred-token": SwapFindMisTransferToken,
  "/swap/revoke-approve": SwapRevokeApprove,
  "/swap/pcm/reclaim": PCMReclaim,

  "/swap/v2/liquidity": LiquidityV2,
  "/swap/v2/liquidity/add/:currencyIdA?/:currencyIdB?/:feeAmount?": AddLiquidityV2,
  "/swap/v2/liquidity/decrease/:positionId?": DecreaseLiquidityV2,
  "/swap/v2/liquidity/increase/:positionId?": IncreaseLiquidityV2,
  "/swap/v2/wrap": Wrap,

  "/marketplace/NFT": NFTMarket,
  "/marketplace/NFT/:canisterId": NFTCollectMarket,
  "/marketplace/NFT/view/:canisterId/:tokenId": NFTView,
  "/marketplace/collections": NFTMarketCollections,

  "/voting": Voting,
  "/voting/:canisterId": VotingProject,
  "/voting/project/create": VoteCreateProject,

  "/voting/proposal/details/:canisterId/:id": VotingProposal,
  "/voting/proposal/create/:id": VotingCreateProposal,

  "/token-claim": TokenClaimIndex,
  "/token-claim/transactions/:id": TokenClaimTransactions,
  "/token-claim/create": CreateTokenClaim,

  "/console": Console,
  "/console/burn": ConsoleBurn,
  "/console/nft/canister/create": NFTCanisterCreate,
  "/console/nft/mint": NFTMint,
  "/console/nft/canister/list": NFTCanisterList,
};
