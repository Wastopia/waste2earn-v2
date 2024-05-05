import { actor } from "../actor";
import { GovernanceInterfaceFactory } from "@icpswap/candid";
import { GOVERNANCE_CANISTER_ID, ic_host } from "@icpswap/constants";
export const governanceService = (identity) => actor.create({
    idlFactory: GovernanceInterfaceFactory,
    canisterId: GOVERNANCE_CANISTER_ID,
    identity,
    host: ic_host,
});
//# sourceMappingURL=governance.js.map