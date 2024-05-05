import { Principal } from "@dfinity/principal";
import type { ActorIdentity, StatusResult } from "@icpswap/types";
export declare function getTokenTotalHolder(canisterId: string | undefined): Promise<bigint>;
export declare function useTokenTotalHolder(canisterId: string | undefined, reload?: boolean): import("@icpswap/types").CallResult<bigint>;
export declare function getTokenHolders(canisterId: string, offset: number, limit: number): Promise<import("@icpswap/types").PaginationResult<import("@icpswap/types").TokenHolder>>;
export declare function useTokenHolders(canisterId: string, offset: number, limit: number): import("@icpswap/types").CallResult<import("@icpswap/types").PaginationResult<import("@icpswap/types").TokenHolder>>;
export interface getTokenTransactionProps {
    canisterId: string;
    account: string | undefined | null | Principal;
    offset: number;
    limit: number;
    capId?: string;
    witness?: boolean;
}
export declare function getTokenTransaction({ canisterId, account, offset, limit, capId, witness, }: getTokenTransactionProps): Promise<import("@icpswap/types").PaginationResult<import("@icpswap/token-adapter/dist/types").Transaction>>;
export interface useTokenTransactionsProps {
    canisterId: string;
    account: string | undefined | null | Principal;
    offset: number;
    limit: number;
    cap?: boolean;
    capId?: string;
    witness?: boolean;
}
export declare function useTokenTransactions({ canisterId, account, offset, limit, capId, witness, }: useTokenTransactionsProps): import("@icpswap/types").CallResult<import("@icpswap/types").PaginationResult<import("@icpswap/token-adapter/dist/types").Transaction>>;
export declare function getTokenSupply(canisterId: string): Promise<bigint>;
export declare function useTokenSupply(canisterId: string | undefined, reload?: boolean): import("@icpswap/types").CallResult<bigint>;
export declare function getTokenMetadata(canisterId: string): Promise<import("@icpswap/token-adapter/dist/types").Metadata>;
export declare function useTokenMetadata(canisterId: string | undefined): import("@icpswap/types").CallResult<import("@icpswap/token-adapter/dist/types").Metadata>;
export interface Allowance {
    canisterId: string;
    account: Principal | string;
    spenderCanisterId: string;
    subaccount?: number[];
}
export declare function allowance({ canisterId, account, spenderCanisterId, subaccount }: Allowance): Promise<bigint>;
export interface Approve {
    canisterId: string;
    identity: ActorIdentity;
    spenderCanisterId: string;
    value: number | string | bigint;
    account: string | Principal | undefined;
    subaccount?: number[];
}
export declare function approve({ canisterId, identity, spenderCanisterId, value, account, subaccount }: Approve): Promise<StatusResult<boolean>>;
export declare function useApproveCallback(): (approveParams: Approve) => Promise<StatusResult<boolean>>;
export declare function getTokenMintingAccount(canisterId: string): Promise<{
    owner: string;
    sub: number[];
}>;
export declare function useTokenMintingAccount(canisterId: string | undefined): import("@icpswap/types").CallResult<{
    owner: string;
    sub: number[];
}>;
//# sourceMappingURL=calls.d.ts.map