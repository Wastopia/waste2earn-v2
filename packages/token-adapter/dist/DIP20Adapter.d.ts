import { PaginationResult, ResultStatus } from "@icpswap/types";
import { DIP20 } from "@icpswap/candid";
import { TokenHolder, Transaction, Metadata } from "./types";
import { BaseTokenAdapter, HoldersRequest, TotalHoldersRequest, SupplyRequest, BalanceRequest, TransferRequest, SetFeeRequest, SetFeeToRequest, GetFeeRequest, TransactionRequest, ApproveRequest, AllowanceRequest, MetadataRequest, SetLogoRequest, ActualReceivedByTransferRequest, BaseTokenResult } from "./BaseTokenAdapter";
export declare class DIP20TokenAdapter extends BaseTokenAdapter<DIP20> {
    holders({ canisterId, params }: HoldersRequest): Promise<{
        status: ResultStatus;
        message: string;
        data: PaginationResult<TokenHolder>;
    }>;
    totalHolders({ canisterId }: TotalHoldersRequest): Promise<import("@icpswap/types").StatusResult<bigint>>;
    supply({ canisterId }: SupplyRequest): Promise<import("@icpswap/types").StatusResult<bigint>>;
    balance({ canisterId, params }: BalanceRequest): Promise<import("@icpswap/types").StatusResult<bigint>>;
    transfer({ canisterId, identity, params }: TransferRequest): Promise<import("@icpswap/types").StatusResult<bigint>>;
    getFee({ canisterId }: GetFeeRequest): Promise<import("@icpswap/types").StatusResult<bigint>>;
    setFee({ canisterId, identity, params }: SetFeeRequest): Promise<import("@icpswap/types").StatusResult<boolean>>;
    setFeeTo({ canisterId, identity, params }: SetFeeToRequest): Promise<import("@icpswap/types").StatusResult<boolean>>;
    transactions({ canisterId, params }: TransactionRequest): Promise<import("@icpswap/types").StatusResult<PaginationResult<Transaction>>>;
    approve({ canisterId, params, identity }: ApproveRequest): Promise<import("@icpswap/types").StatusResult<boolean>>;
    allowance({ canisterId, params }: AllowanceRequest): Promise<import("@icpswap/types").StatusResult<bigint>>;
    metadata({ canisterId }: MetadataRequest): Promise<{
        status: ResultStatus;
        data: Metadata;
        message: string;
    }>;
    setLogo({ canisterId, params, identity }: SetLogoRequest): Promise<import("@icpswap/types").StatusResult<boolean>>;
    actualReceivedByTransfer({ amount }: ActualReceivedByTransferRequest): import("bignumber.js").BigNumber;
    getMintingAccount({ canisterId, }: {
        canisterId: string;
    }): BaseTokenResult<{
        owner: string;
        sub: number[] | undefined;
    }>;
}
export declare const DIP20Adapter: DIP20TokenAdapter;
//# sourceMappingURL=DIP20Adapter.d.ts.map