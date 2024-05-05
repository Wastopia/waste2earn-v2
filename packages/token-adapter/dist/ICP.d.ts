import { Ledger } from "@icpswap/candid";
import { PaginationResult, ResultStatus } from "@icpswap/types";
import { TokenHolder, Transaction, Metadata } from "./types";
import { BaseTokenAdapter, BalanceRequest, TransferRequest, MetadataRequest, ActualReceivedByTransferRequest } from "./BaseTokenAdapter";
export declare class ICPAdapter extends BaseTokenAdapter<Ledger> {
    holders(): Promise<{
        status: ResultStatus;
        data: PaginationResult<TokenHolder>;
        message: string;
    }>;
    totalHolders(): Promise<import("@icpswap/types").StatusResult<bigint>>;
    supply(): Promise<import("@icpswap/types").StatusResult<bigint>>;
    balance({ params }: BalanceRequest): Promise<import("@icpswap/types").StatusResult<bigint>>;
    transfer({ canisterId, identity, params }: TransferRequest): Promise<import("@icpswap/types").StatusResult<bigint>>;
    getFee(): Promise<import("@icpswap/types").StatusResult<bigint>>;
    setFee(): Promise<import("@icpswap/types").StatusResult<boolean>>;
    setFeeTo(): Promise<import("@icpswap/types").StatusResult<boolean>>;
    transactions(): Promise<import("@icpswap/types").StatusResult<PaginationResult<Transaction>>>;
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
        sub: number[];
    }>>;
}
export declare const icpAdapter: ICPAdapter;
//# sourceMappingURL=ICP.d.ts.map