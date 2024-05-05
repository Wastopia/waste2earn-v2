import { actor } from "../actor";
import { TokenStorageInterfaceFactory } from "@icpswap/candid";
export const tokenStorage = (id, identity) => actor.create({
    idlFactory: TokenStorageInterfaceFactory,
    canisterId: id,
    identity,
});
//# sourceMappingURL=token.js.map