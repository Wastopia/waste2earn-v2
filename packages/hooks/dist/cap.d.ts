import type { PaginationResult } from "@icpswap/types";
import { Principal } from "@dfinity/principal";
import type { TokenTransaction } from "@icpswap/types";
export declare function getCapHistorySize(canisterId: string): Promise<bigint>;
export declare function useCapHistorySize(canisterId: string): import("@icpswap/types").CallResult<bigint>;
export declare function detailValueFormat(detailValue: any): any;
export declare function detailsFormatter(details: any): {
    [key: string]: any;
};
export declare function getCapTransactions(canisterId: string, witness: boolean, offset: number): Promise<{
    totalElements: number;
    offset: number;
    limit: number;
    content: TokenTransaction[];
}>;
export declare function useCapTransactions(canisterId: string | undefined, witness: boolean, offset: number): import("@icpswap/types").CallResult<PaginationResult<TokenTransaction>>;
export declare function getCapUserTransactions(canisterId: string, principal: Principal, witness: boolean, offset: number): Promise<{
    totalElements: number;
    offset: number;
    limit: number;
    content: TokenTransaction[];
}>;
export declare function useCapUserTransactions(canisterId: string | undefined, principal: Principal | undefined, witness: boolean, offset: number): import("@icpswap/types").CallResult<PaginationResult<TokenTransaction>>;
export declare function getCapRootId(canisterId: string, witness?: boolean): Promise<Principal>;
export declare function useCapRootId(canisterId: string | undefined, witness?: boolean): import("@icpswap/types").CallResult<Principal>;
//# sourceMappingURL=cap.d.ts.map