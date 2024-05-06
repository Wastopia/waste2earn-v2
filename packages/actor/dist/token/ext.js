import { actor } from "../actor";
import { ActorName } from "../ActorName";
import { WrapICPInterfaceFactory, EXTTokenInterfaceFactory, } from "@w2e/candid";
export const ext = (canisterId, identity) => actor.create({
    identity,
    canisterId,
    idlFactory: EXTTokenInterfaceFactory,
});
export const wrapICP = (identity) => actor.create({
    actorName: ActorName.WICP,
    identity,
    idlFactory: WrapICPInterfaceFactory,
});
//# sourceMappingURL=ext.js.map