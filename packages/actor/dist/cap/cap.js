import { actor } from "../actor";
import { CapInterfaceFactory, CapRouterInterfaceFactory, } from "@icpswap/candid";
export const cap = (canisterId) => actor.create({
    idlFactory: CapInterfaceFactory,
    canisterId,
});
export const cap_router = () => actor.create({
    idlFactory: CapRouterInterfaceFactory,
    canisterId: "lj532-6iaaa-aaaah-qcc7a-cai",
});
//# sourceMappingURL=cap.js.map