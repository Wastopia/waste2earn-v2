export declare function getExchangeRates(): Promise<import("@icpswap/candid/dist/other/ExchangeRate").ExchangeRate__1[]>;
export declare function useExchangeRates(): import("@icpswap/types").CallResult<import("@icpswap/candid/dist/other/ExchangeRate").ExchangeRate__1[]>;
export declare function getExchangeRate(pair: string): Promise<import("@icpswap/candid/dist/other/ExchangeRate").ExchangeRate__1>;
export declare function useExchangeRate(pair: string | undefined): import("@icpswap/types").CallResult<import("@icpswap/candid/dist/other/ExchangeRate").ExchangeRate__1>;
export declare function getXDR2USD(): Promise<string>;
export declare function useXDR2USD(): import("@icpswap/types").CallResult<string>;
//# sourceMappingURL=exchange_rate.d.ts.map