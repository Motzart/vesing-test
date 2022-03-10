import { utils } from 'near-api-js';
import BN from 'bn.js';
import { wallet } from '~utils/near-utils';
import getConfig from '../config'

const config = getConfig();

const LOCKUP_CONTRACT_ID = config.LOCKUP_CONTRACT_ID;

export const getGas = (gas: string) =>
  gas ? new BN(gas) : new BN('100000000000000');

export const getAmount = (amount: string) =>
  amount ? new BN(utils.format.parseNearAmount(amount)) : new BN('0');

export interface ViewFunctionOptions {
  methodName: string;
  args?: object;
}

export interface FunctionCallOptions extends ViewFunctionOptions {
  gas?: string;
  amount?: string;
}

export const viewFunction = ({
  methodName,
  args,
}: ViewFunctionOptions) => {
 return wallet.account().viewFunction(LOCKUP_CONTRACT_ID, methodName, args);
};

export const functionCall = ({
  methodName,
  args,
  gas,
  amount,
}: FunctionCallOptions) => {
  return wallet
    .account()
    .functionCall(
      LOCKUP_CONTRACT_ID,
      methodName,
      args,
      getGas(gas),
      getAmount(amount)
    );
};

export const getUserLockups = (): Promise<[]> => {
  return viewFunction({
    methodName: 'get_account_lockups',
    args: { account_id: wallet.getAccountId() },
  });
}

export const claim = () => {
  return functionCall({
    methodName: 'claim',
    args: { account_id: wallet.getAccountId() },
    gas: getGas('300000000000000').toString(),
  })
}
