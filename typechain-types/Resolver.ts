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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ResolverInterface extends utils.Interface {
  contractName: "Resolver";
  functions: {
    "ETH()": FunctionFragment;
    "checkLiquidate()": FunctionFragment;
    "checkReset()": FunctionFragment;
    "converter()": FunctionFragment;
    "executeLiquidate(address)": FunctionFragment;
    "executeReset(address)": FunctionFragment;
    "gelato()": FunctionFragment;
    "marginLong()": FunctionFragment;
    "pokeMe()": FunctionFragment;
    "pool()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "checkLiquidate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkReset",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "converter", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "executeLiquidate",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "executeReset",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "gelato", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "marginLong",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pokeMe", values?: undefined): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkLiquidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "checkReset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "converter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeLiquidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeReset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gelato", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "marginLong", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pokeMe", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;

  events: {};
}

export interface Resolver extends BaseContract {
  contractName: "Resolver";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ResolverInterface;

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
    ETH(overrides?: CallOverrides): Promise<[string]>;

    checkLiquidate(
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    checkReset(
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    converter(overrides?: CallOverrides): Promise<[string]>;

    executeLiquidate(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeReset(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    gelato(overrides?: CallOverrides): Promise<[string]>;

    marginLong(overrides?: CallOverrides): Promise<[string]>;

    pokeMe(overrides?: CallOverrides): Promise<[string]>;

    pool(overrides?: CallOverrides): Promise<[string]>;
  };

  ETH(overrides?: CallOverrides): Promise<string>;

  checkLiquidate(
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

  checkReset(
    overrides?: CallOverrides
  ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

  converter(overrides?: CallOverrides): Promise<string>;

  executeLiquidate(
    account_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeReset(
    account_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  gelato(overrides?: CallOverrides): Promise<string>;

  marginLong(overrides?: CallOverrides): Promise<string>;

  pokeMe(overrides?: CallOverrides): Promise<string>;

  pool(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    ETH(overrides?: CallOverrides): Promise<string>;

    checkLiquidate(
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    checkReset(
      overrides?: CallOverrides
    ): Promise<[boolean, string] & { canExec: boolean; execPayload: string }>;

    converter(overrides?: CallOverrides): Promise<string>;

    executeLiquidate(
      account_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    executeReset(account_: string, overrides?: CallOverrides): Promise<void>;

    gelato(overrides?: CallOverrides): Promise<string>;

    marginLong(overrides?: CallOverrides): Promise<string>;

    pokeMe(overrides?: CallOverrides): Promise<string>;

    pool(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    ETH(overrides?: CallOverrides): Promise<BigNumber>;

    checkLiquidate(overrides?: CallOverrides): Promise<BigNumber>;

    checkReset(overrides?: CallOverrides): Promise<BigNumber>;

    converter(overrides?: CallOverrides): Promise<BigNumber>;

    executeLiquidate(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeReset(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    gelato(overrides?: CallOverrides): Promise<BigNumber>;

    marginLong(overrides?: CallOverrides): Promise<BigNumber>;

    pokeMe(overrides?: CallOverrides): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    checkLiquidate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    checkReset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    converter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeLiquidate(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeReset(
      account_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    gelato(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marginLong(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pokeMe(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
