import { ActorIdentity } from "@icpswap/types";
import { SwapFactory, SwapNFT, SwapPool, TICKET_SERVICE, PositionIndex } from "@icpswap/candid";
export declare const swapNFT: (identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<SwapNFT>>;
export declare const swapFactory: (identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<SwapFactory>>;
export declare const swapPool: (canisterId: string, identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<SwapPool>>;
export declare const swapTicket: () => Promise<import("@dfinity/agent").ActorSubclass<TICKET_SERVICE>>;
export declare const swapPosition: (identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<PositionIndex>>;
//# sourceMappingURL=global.d.ts.map