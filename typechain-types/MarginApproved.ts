/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MarginApprovedInterface extends utils.Interface {
  contractName: "MarginApproved";
  functions: {
    "addBorrowedToken(address[])": FunctionFragment;
    "addCollateralToken(address[])": FunctionFragment;
    "isApprovedBorrowedToken(address)": FunctionFragment;
    "isApprovedCollateralToken(address)": FunctionFragment;
    "isBorrowedToken(address)": FunctionFragment;
    "isCollateralToken(address)": FunctionFragment;
    "oracle()": FunctionFragment;
    "owner()": FunctionFragment;
    "pool()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setApprovedBorrowedToken(address[],bool[])": FunctionFragment;
    "setApprovedCollateralToken(address[],bool[])": FunctionFragment;
    "setOracle(address)": FunctionFragment;
    "setPool(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addBorrowedToken",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addCollateralToken",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedBorrowedToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isApprovedCollateralToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isBorrowedToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isCollateralToken",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovedBorrowedToken",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovedCollateralToken",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(functionFragment: "setOracle", values: [string]): string;
  encodeFunctionData(functionFragment: "setPool", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBorrowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addCollateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedBorrowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedCollateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBorrowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCollateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedBorrowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedCollateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AddBorrowedToken(address)": EventFragment;
    "AddCollateralToken(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddBorrowedToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddCollateralToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type AddBorrowedTokenEvent = TypedEvent<[string], { token: string }>;

export type AddBorrowedTokenEventFilter =
  TypedEventFilter<AddBorrowedTokenEvent>;

export type AddCollateralTokenEvent = TypedEvent<[string], { token: string }>;

export type AddCollateralTokenEventFilter =
  TypedEventFilter<AddCollateralTokenEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface MarginApproved extends BaseContract {
  contractName: "MarginApproved";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarginApprovedInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addBorrowedToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addCollateralToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isApprovedBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isApprovedCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pool(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovedBorrowedToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setApprovedCollateralToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPool(
      pool_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addBorrowedToken(
    token_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addCollateralToken(
    token_: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isApprovedBorrowedToken(
    token_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isApprovedCollateralToken(
    token_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isBorrowedToken(token_: string, overrides?: CallOverrides): Promise<boolean>;

  isCollateralToken(
    token_: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  oracle(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pool(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovedBorrowedToken(
    token_: string[],
    approved_: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setApprovedCollateralToken(
    token_: string[],
    approved_: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOracle(
    oracle_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPool(
    pool_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBorrowedToken(
      token_: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    addCollateralToken(
      token_: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    isApprovedBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isApprovedCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    oracle(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pool(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setApprovedBorrowedToken(
      token_: string[],
      approved_: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovedCollateralToken(
      token_: string[],
      approved_: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    setOracle(oracle_: string, overrides?: CallOverrides): Promise<void>;

    setPool(pool_: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddBorrowedToken(address)"(token?: null): AddBorrowedTokenEventFilter;
    AddBorrowedToken(token?: null): AddBorrowedTokenEventFilter;

    "AddCollateralToken(address)"(token?: null): AddCollateralTokenEventFilter;
    AddCollateralToken(token?: null): AddCollateralTokenEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    addBorrowedToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addCollateralToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isApprovedBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovedBorrowedToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setApprovedCollateralToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPool(
      pool_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBorrowedToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addCollateralToken(
      token_: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isApprovedBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBorrowedToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCollateralToken(
      token_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovedBorrowedToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setApprovedCollateralToken(
      token_: string[],
      approved_: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOracle(
      oracle_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPool(
      pool_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
