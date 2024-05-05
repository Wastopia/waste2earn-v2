import { ActorIdentity } from "@icpswap/types";
import { WrapICP, EXTToken } from "@icpswap/candid";
export declare const ext: (canisterId: string, identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<EXTToken>>;
export declare const wrapICP: (identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<WrapICP>>;
//# sourceMappingURL=ext.d.ts.map