import type { PaginationResult, WrapTransaction } from "@icpswap/types";
import { Principal } from "@dfinity/principal";
export declare function getWrapTransactions(account: string | undefined | Principal, offset: number, limit: number, index: number | undefined): Promise<import("@icpswap/candid/dist/token/wicp").Result>;
export declare function useWrapTransactions(account: string | undefined | Principal, offset: number, limit: number, index?: number | undefined): import("@icpswap/types").CallResult<PaginationResult<WrapTransaction>>;
//# sourceMappingURL=index.d.ts.map