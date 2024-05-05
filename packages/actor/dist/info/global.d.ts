import { ActorIdentity } from "@icpswap/types";
import { GlobalIndex, GlobalStorage, GlobalTVL } from "@icpswap/candid";
export declare const globalIndex: (identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<GlobalIndex>>;
export declare const globalStorage: (id: string) => Promise<import("@dfinity/agent").ActorSubclass<GlobalStorage>>;
export declare const globalTVL: (id: string, identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<GlobalTVL>>;
//# sourceMappingURL=global.d.ts.map