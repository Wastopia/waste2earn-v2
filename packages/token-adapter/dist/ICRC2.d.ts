import { PaginationResult, ResultStatus } from "@icpswap/types";
import { ICRC2 } from "@icpswap/candid";
import { BaseTokenAdapter, SupplyRequest, BalanceRequest, TransferRequest, GetFeeRequest, TransactionRequest, ApproveRequest, AllowanceRequest, MetadataRequest, ActualReceivedByTransferRequest } from "./BaseTokenAdapter";
import { TokenHolder } from "./types";
export declare class ICRC2Adapter extends BaseTokenAdapter<ICRC2> {
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
    transactions({ canisterId, params }: TransactionRequest): Promise<import("@icpswap/types").StatusResult<PaginationResult<import("./types").Transaction>>>;
    approve({ canisterId, params, identity }: ApproveRequest): Promise<import("@icpswap/types").StatusResult<boolean>>;
    allowance({ canisterId, params }: AllowanceRequest): Promise<import("@icpswap/types").StatusResult<bigint>>;
    metadata({ canisterId }: MetadataRequest): Promise<{
        status: ResultStatus;
        data: import("./types").Metadata;
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
export declare const icrc2Adapter: ICRC2Adapter;
//# sourceMappingURL=ICRC2.d.ts.map