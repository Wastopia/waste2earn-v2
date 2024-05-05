import { actor } from "../actor";
import { LedgerInterfaceFactory } from "@icpswap/candid";
import { LEDGER_CANISTER_ID, ic_host } from "@icpswap/constants";
export const ledgerService = (identity) => actor.create({
    idlFactory: LedgerInterfaceFactory,
    canisterId: LEDGER_CANISTER_ID,
    identity,
    host: ic_host,
});
//# sourceMappingURL=ledger.js.map