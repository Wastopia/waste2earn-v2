import { actor } from "../actor";
import { PoolStorageInterfaceFactory } from "@icpswap/candid";
export const poolStorage = (id, identity) => actor.create({
    idlFactory: PoolStorageInterfaceFactory,
    canisterId: id,
    identity,
});
//# sourceMappingURL=pool.js.map