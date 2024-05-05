import { actor } from "../actor";
import { ActorName } from "../ActorName";
import { SwapFactoryInterfaceFactory, SwapNFTInterfaceFactory, SwapPoolInterfaceFactory, TicketInterfaceFactory, PositionIndexInterfaceFactory, } from "@icpswap/candid";
export const swapNFT = (identity) => actor.create({
    actorName: ActorName.SwapNFTCanister,
    identity,
    idlFactory: SwapNFTInterfaceFactory,
});
export const swapFactory = (identity) => actor.create({
    actorName: ActorName.SwapFactory,
    identity,
    idlFactory: SwapFactoryInterfaceFactory,
});
export const swapPool = (canisterId, identity) => actor.create({
    identity,
    canisterId: canisterId,
    idlFactory: SwapPoolInterfaceFactory,
});
export const swapTicket = () => actor.create({
    actorName: ActorName.SwapTicket,
    idlFactory: TicketInterfaceFactory,
});
export const swapPosition = (identity) => actor.create({
    actorName: ActorName.Position,
    idlFactory: PositionIndexInterfaceFactory,
    identity,
});
//# sourceMappingURL=global.js.map