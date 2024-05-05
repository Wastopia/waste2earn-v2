import type { V1StakingPoolInfo, V1StakingPoolTransaction, V1StakingPoolUserInfo } from "@icpswap/types";
import type { ActorIdentity, PaginationResult } from "@icpswap/types";
import { Principal } from "@dfinity/principal";
export declare function getV1StakingTokenPool(canisterId: string): Promise<V1StakingPoolInfo>;
export declare function useV1StakingTokenPool(canisterId: string | undefined, reload?: boolean): import("@icpswap/types").CallResult<V1StakingPoolInfo>;
export declare function getV1StakingTokenUserInfo(canisterId: string, account: string | Principal): Promise<V1StakingPoolUserInfo>;
export declare function useV1StakingTokenUserInfo(canisterId: string | undefined, account: string | Principal | undefined, reload?: boolean): import("@icpswap/types").CallResult<V1StakingPoolUserInfo>;
export declare function getV1StakingTokenCycles(canisterId: string): Promise<bigint>;
export declare function useV1StakingTokenCycles(canisterId: string | undefined, reload?: boolean): import("@icpswap/types").CallResult<bigint>;
export declare function stakingV1TokenDeposit(canisterId: string, identity: ActorIdentity, amount: bigint): Promise<import("@icpswap/types").StatusResult<string>>;
export declare function stakingV1TokenHarvest(canisterId: string, identity: ActorIdentity): Promise<import("@icpswap/types").StatusResult<bigint>>;
export declare function stakingV1TokenWithdraw(canisterId: string, identity: ActorIdentity, amount: bigint): Promise<import("@icpswap/types").StatusResult<string>>;
export declare function getV1StakingTokenTransactions(canisterId: string, offset: number, limit: number): Promise<PaginationResult<V1StakingPoolTransaction>>;
export declare function useV1StakingTokenTransactions(canisterId: string | undefined, offset: number, limit: number, reload?: boolean): import("@icpswap/types").CallResult<PaginationResult<V1StakingPoolTransaction>>;
export declare function getV1StakingTokenClaimTransactions(canisterId: string, offset: number, limit: number): Promise<PaginationResult<V1StakingPoolTransaction>>;
export declare function useV1StakingTokenClaimTransactions(canisterId: string | undefined, offset: number, limit: number, reload?: boolean): import("@icpswap/types").CallResult<PaginationResult<V1StakingPoolTransaction>>;
//# sourceMappingURL=v1.d.ts.map