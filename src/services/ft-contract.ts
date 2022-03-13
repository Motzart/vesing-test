import { wallet } from '~utils/near-utils';
import { getAmount, getGas, IFunctionCallOptions } from '~services/near';
import getConfig from '~config';

const config = getConfig();

const TOKEN_CONTRACT_ID = config.TOKEN_CONTRACT_ID;

export const ftViewFunction = ({
  methodName,
  args
}: IFunctionCallOptions ) => {
  return wallet.account().viewFunction(TOKEN_CONTRACT_ID, methodName, args);
};

export const ftFunctionCall = ({
  methodName,
  args,
  gas,
  amount,
}: IFunctionCallOptions) => {
  return wallet
    .account()
    .functionCall(
      TOKEN_CONTRACT_ID,
      methodName,
      args,
      getGas(gas),
      getAmount(amount)
    );
};

export const ftGetBalance = () => {
  return ftViewFunction({
    methodName: 'ft_balance_of',
    args: { account_id: wallet.getAccountId() },
  }).catch(() => '0');
};
