import { ActorIdentity } from "@icpswap/types";
import { BaseIndex, BaseStorage } from "@icpswap/candid";
export declare const baseIndex: (identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<BaseIndex>>;
export declare const baseStorage: (id: string, identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<BaseStorage>>;
//# sourceMappingURL=base.d.ts.map