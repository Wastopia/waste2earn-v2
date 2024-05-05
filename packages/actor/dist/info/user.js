import { actor } from "../actor";
import { UserStorageInterfaceFactory } from "@icpswap/candid";
export const userStorage = (id, identity) => actor.create({
    idlFactory: UserStorageInterfaceFactory,
    canisterId: id,
    identity,
});
//# sourceMappingURL=user.js.map