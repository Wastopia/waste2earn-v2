import { actor } from "../actor";
import { ICRCArchiveInterfaceFactory, ICRC1InterfaceFactory, ICRC2InterfaceFactory, } from "@icpswap/candid";
export const icrcArchive = (canisterId) => actor.create({
    idlFactory: ICRCArchiveInterfaceFactory,
    canisterId,
});
export const icrc1 = (canisterId, identity) => actor.create({
    identity,
    idlFactory: ICRC1InterfaceFactory,
    canisterId,
});
export const icrc2 = (canisterId, identity) => actor.create({
    identity,
    idlFactory: ICRC2InterfaceFactory,
    canisterId,
});
//# sourceMappingURL=icrc1.js.map