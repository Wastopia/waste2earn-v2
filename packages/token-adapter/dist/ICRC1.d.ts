import { PaginationResult, ResultStatus } from "@icpswap/types";
import { ICRC1_SERVICE } from "@icpswap/candid";
import { TokenHolder, Transaction, Metadata } from "./types";
import { BaseTokenAdapter, SupplyRequest, BalanceRequest, TransferRequest, GetFeeRequest, TransactionRequest, MetadataRequest, ActualReceivedByTransferRequest } from "./BaseTokenAdapter";
export declare class ICRC1Adapter extends BaseTokenAdapter<ICRC1_SERVICE> {
    holders(): Promise<{
        status: ResultStatus;
        data: PaginationResult<TokenHolder>;
        message: string;
    }>;
    totalHolders(): Promise<import("@icpswap/types").StatusResult<bigint>>;
    supply({ canisterId }: SupplyRequest): Promise<import("@icpswap/types").StatusResult<bigint>>;
    balance({ canisterId, params }: BalanceRequest): Promise<import("@icpswap/types").StatusResult<bigint>>;
    transfer({ canisterId, identity, params }: TransferRequest): Promise<import("@icpswap/types").StatusResult<bigint>>;
    getFee({ canisterId }: GetFeeRequest): Promise<import("@icpswap/types").StatusResult<bigint>>;
    setFee(): Promise<import("@icpswap/types").StatusResult<boolean>>;
    setFeeTo(): Promise<import("@icpswap/types").StatusResult<boolean>>;
    transactions({ canisterId, params }: TransactionRequest): Promise<import("@icpswap/types").StatusResult<PaginationResult<Transaction>>>;
    approve(): Promise<import("@icpswap/types").StatusResult<boolean>>;
    allowance(): Promise<import("@icpswap/types").StatusResult<bigint>>;
    metadata({ canisterId }: MetadataRequest): Promise<{
        status: ResultStatus;
        data: Metadata;
        message: string;
    }>;
    setLogo(): Promise<import("@icpswap/types").StatusResult<boolean>>;
    actualReceivedByTransfer({ amount }: ActualReceivedByTransferRequest): import("bignumber.js").BigNumber;
    getMintingAccount({ canisterId }: {
        canisterId: string;
    }): Promise<import("@icpswap/types").StatusResult<{
        owner: string;
        sub: number[] | undefined;
    }>>;
}
export declare const icrc1Adapter: ICRC1Adapter;
//# sourceMappingURL=ICRC1.d.ts.map