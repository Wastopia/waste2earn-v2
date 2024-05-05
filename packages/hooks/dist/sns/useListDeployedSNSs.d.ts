import type { ListDeployedSnsesResponse } from "@icpswap/candid";
import type { SnsTokensInfo } from "@icpswap/types";
export declare function getListDeployedSNSs(): Promise<ListDeployedSnsesResponse>;
export declare function useListDeployedSNSs(): import("@icpswap/types").CallResult<ListDeployedSnsesResponse>;
export declare function getSnsTokensInfo(page: number): Promise<SnsTokensInfo[] | undefined>;
export declare function getSnsAllTokensInfo(): Promise<SnsTokensInfo[]>;
export declare function useSnsAllTokensInfo(): {
    loading: boolean;
    result: SnsTokensInfo[];
};
//# sourceMappingURL=useListDeployedSNSs.d.ts.map