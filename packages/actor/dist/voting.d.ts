import { ActorIdentity } from "@icpswap/types";
import { VoteController, VoteFile, VoteProject } from "@icpswap/candid";
export declare const votingController: (identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<VoteController>>;
export declare const votingCanister: (canisterId: string, identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<VoteProject>>;
export declare const votingFile: (canisterId: string, identity?: ActorIdentity) => Promise<import("@dfinity/agent").ActorSubclass<VoteFile>>;
//# sourceMappingURL=voting.d.ts.map