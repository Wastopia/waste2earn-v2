import type { TokenListMetadata, AllTokenOfSwapTokenInfo, PaginationResult } from "@icpswap/types";
export declare function getTokensFromList(): Promise<TokenListMetadata[]>;
export declare function useTokensFromList(): import("@icpswap/types").CallResult<TokenListMetadata[]>;
export declare function useTokenListTokenInfo(canisterId: string | undefined | null): import("@icpswap/types").CallResult<TokenListMetadata>;
export declare function getAllTokensOfSwap(offset: number, limit: number): Promise<PaginationResult<AllTokenOfSwapTokenInfo>>;
export declare function useAllTokensOfSwap(): import("@icpswap/types").CallResult<AllTokenOfSwapTokenInfo[]>;
//# sourceMappingURL=calls.d.ts.map