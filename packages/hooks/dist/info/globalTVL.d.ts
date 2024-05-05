import { TvlChartDayData } from "@icpswap/types";
export declare function getPoolChartTvl(id: string, pool: string, offset: number, limit: number): Promise<TvlChartDayData[]>;
export declare function usePoolChartTvl(id: string | undefined, pool: string | undefined, offset: number, limit: number): import("@icpswap/types").CallResult<TvlChartDayData[]>;
export declare function getTokenChartTvl(id: string, token: string, offset: number, limit: number): Promise<TvlChartDayData[]>;
export declare function useTokenChartTvl(id: string | undefined, token: string | undefined, offset: number, limit: number): import("@icpswap/types").CallResult<TvlChartDayData[]>;
//# sourceMappingURL=globalTVL.d.ts.map