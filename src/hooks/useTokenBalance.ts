import { useEffect, useState } from 'react';
import { ftGetBalance } from '~services/ft-contract';

export const useTokenBalance = () => {
  const [balance, setBalance] = useState<string>();

  useEffect(() => {
    ftGetBalance()
      .then(setBalance)
      .catch(() => setBalance('0'));
  }, []);

  return balance;
};
