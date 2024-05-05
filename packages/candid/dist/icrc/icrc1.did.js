export const idlFactory = ({ IDL }) => {
    const Subaccount = IDL.Vec(IDL.Nat8);
    const Account = IDL.Record({
        owner: IDL.Principal,
        subaccount: IDL.Opt(Subaccount)
    });
    const Tokens = IDL.Nat;
    const Value = IDL.Variant({
        Int: IDL.Int,
        Nat: IDL.Nat,
        Blob: IDL.Vec(IDL.Nat8),
        Text: IDL.Text
    });
    const Memo = IDL.Vec(IDL.Nat8);
    const Timestamp = IDL.Nat64;
    const TxIndex = IDL.Nat;
    const TransferError = IDL.Variant({
        GenericError: IDL.Record({
            message: IDL.Text,
            error_code: IDL.Nat
        }),
        TemporarilyUnavailable: IDL.Null,
        BadBurn: IDL.Record({ min_burn_amount: Tokens }),
        Duplicate: IDL.Record({ duplicate_of: TxIndex }),
        BadFee: IDL.Record({ expected_fee: Tokens }),
        CreatedInFuture: IDL.Record({ ledger_time: Timestamp }),
        TooOld: IDL.Null,
        InsufficientFunds: IDL.Record({ balance: Tokens })
    });
    const TransferResult = IDL.Variant({ Ok: TxIndex, Err: TransferError });
    const GetTransactionsRequest = IDL.Record({
        start: IDL.Nat,
        length: IDL.Nat
    });
    const Burn = IDL.Record({
        from: Account,
        memo: IDL.Opt(IDL.Vec(IDL.Nat8)),
        created_at_time: IDL.Opt(IDL.Nat64),
        amount: IDL.Nat
    });
    const Mint = IDL.Record({
        to: Account,
        memo: IDL.Opt(IDL.Vec(IDL.Nat8)),
        created_at_time: IDL.Opt(IDL.Nat64),
        amount: IDL.Nat
    });
    const Transfer = IDL.Record({
        to: Account,
        fee: IDL.Opt(IDL.Nat),
        from: Account,
        memo: IDL.Opt(IDL.Vec(IDL.Nat8)),
        created_at_time: IDL.Opt(IDL.Nat64),
        amount: IDL.Nat
    });
    const Transaction = IDL.Record({
        burn: IDL.Opt(Burn),
        kind: IDL.Text,
        mint: IDL.Opt(Mint),
        timestamp: IDL.Nat64,
        transfer: IDL.Opt(Transfer)
    });
    const ArchivedTransactionRange = IDL.Record({
        callback: IDL.Func([GetTransactionsRequest], [IDL.Record({ transactions: IDL.Vec(Transaction) })], ["query"]),
        start: IDL.Nat,
        length: IDL.Nat
    });
    const GetTransactionsResponse = IDL.Record({
        first_index: IDL.Nat,
        log_length: IDL.Nat,
        transactions: IDL.Vec(Transaction),
        archived_transactions: IDL.Vec(ArchivedTransactionRange)
    });
    const Ledger = IDL.Service({
        get_transactions: IDL.Func([GetTransactionsRequest], [GetTransactionsResponse], ["query"]),
        icrc1_balance_of: IDL.Func([Account], [Tokens], ["query"]),
        icrc1_decimals: IDL.Func([], [IDL.Nat8], ["query"]),
        icrc1_fee: IDL.Func([], [IDL.Nat], ["query"]),
        icrc1_metadata: IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, Value))], ["query"]),
        icrc1_minting_account: IDL.Func([], [IDL.Opt(Account)], ["query"]),
        icrc1_name: IDL.Func([], [IDL.Text], ["query"]),
        icrc1_supported_standards: IDL.Func([], [IDL.Vec(IDL.Record({ url: IDL.Text, name: IDL.Text }))], ["query"]),
        icrc1_symbol: IDL.Func([], [IDL.Text], ["query"]),
        icrc1_total_supply: IDL.Func([], [Tokens], ["query"]),
        icrc1_logo: IDL.Func([], [IDL.Text], ["query"]),
        icrc1_transfer: IDL.Func([
            IDL.Record({
                to: Account,
                fee: IDL.Opt(Tokens),
                memo: IDL.Opt(Memo),
                from_subaccount: IDL.Opt(Subaccount),
                created_at_time: IDL.Opt(Timestamp),
                amount: Tokens
            })
        ], [TransferResult], [])
    });
    return Ledger;
};
export const init = ({ IDL }) => {
    return [
        IDL.Record({
            decimals: IDL.Nat8,
            token_symbol: IDL.Text,
            transfer_fee: IDL.Nat,
            minting_account: IDL.Record({
                owner: IDL.Principal,
                subaccount: IDL.Opt(IDL.Vec(IDL.Nat8))
            }),
            initial_mints: IDL.Vec(IDL.Record({
                account: IDL.Record({
                    owner: IDL.Principal,
                    subaccount: IDL.Opt(IDL.Vec(IDL.Nat8))
                }),
                amount: IDL.Nat
            })),
            token_name: IDL.Text
        })
    ];
};
//# sourceMappingURL=icrc1.did.js.map