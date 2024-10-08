import {
  ICRCArchive,
  ICRCArchiveInterfaceFactory,
  ICRC1_SERVICE,
  ICRC1InterfaceFactory,
  ICRC2,
  ICRC2InterfaceFactory,
} from "@w2e/candid";
import type { ActorIdentity } from "@w2e/types";
import { actor } from "../actor";

export const icrcArchive = (canisterId: string) =>
  actor.create<ICRCArchive>({
    idlFactory: ICRCArchiveInterfaceFactory,
    canisterId,
  });

export const icrc1 = (canisterId: string, identity?: ActorIdentity) =>
  actor.create<ICRC1_SERVICE>({
    identity,
    idlFactory: ICRC1InterfaceFactory,
    canisterId,
  });

export const icrc2 = (canisterId: string, identity?: ActorIdentity) =>
  actor.create<ICRC2>({
    identity,
    idlFactory: ICRC2InterfaceFactory,
    canisterId,
  });
