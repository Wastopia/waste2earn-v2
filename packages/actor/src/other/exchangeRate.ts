import { actor } from "../actor";
import { ExchangeRate, ExchangeRateInterfaceFactory } from "@w2e/candid";

export const exchangeRate = () =>
  actor.create<ExchangeRate>({
    canisterId: "2ixw4-taaaa-aaaag-qcpdq-cai",
    idlFactory: ExchangeRateInterfaceFactory,
  });
