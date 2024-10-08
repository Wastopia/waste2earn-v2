/* Autogenerated file. Do not edit manually. */
// @ts-nocheck

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { CkETH, CkETHInterface } from "../CkETH";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_cketh_minter_main_address",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "principal",
        type: "bytes32",
      },
    ],
    name: "ReceivedEth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SentEth",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_principal",
        type: "bytes32",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinterAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class CkETH__factory {
  static readonly abi = _abi;

  static createInterface(): CkETHInterface {
    return new utils.Interface(_abi) as CkETHInterface;
  }

  // @ts-ignore
  static connect(address: string, signerOrProvider: Signer | Provider): CkETH {
    // @ts-ignore
    return new Contract(address, _abi, signerOrProvider) as CkETH;
  }
}
