import { ICP, WRAPPED_ICP, W2E } from "./tokens";

export { Connector } from "@w2e/actor";

export const DISPLAY_IN_WALLET_FOREVER = [ICP.address, WRAPPED_ICP.address, W2E.address];

export const NO_HIDDEN_TOKENS = [ICP.address, WRAPPED_ICP.address, W2E.address];
