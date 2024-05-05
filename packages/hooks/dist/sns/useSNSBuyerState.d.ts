import type { GetBuyerStateResponse, RefreshBuyerTokensResponse } from "@icpswap/types";
export declare function getSNSBuyerState(swap_id: string, principal: string): Promise<GetBuyerStateResponse>;
export declare function useSNSBuyerState(swap_id: string | undefined, principal: string | undefined, reload?: boolean | number): import("@icpswap/types").CallResult<GetBuyerStateResponse>;
export declare function refreshSNSBuyerTokens(swap_id: string, buyer: string, confirmation_text?: string): Promise<RefreshBuyerTokensResponse>;
//# sourceMappingURL=useSNSBuyerState.d.ts.map