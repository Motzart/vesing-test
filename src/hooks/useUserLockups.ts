import { useEffect, useState } from 'react';
import { getUserLockups } from '~services/near';

export interface UserLockupsView {
  account_id: string,
  schedule: [],
  claimed_balance: string,
  termination_config: null,
  timestamp: number,
  total_balance: string,
  unclaimed_balance: string,
}

export const useUserLockups = () => {
  const [userLockups, setUserLockups] = useState<UserLockupsView>();

  useEffect(() => {
    getUserLockups()
      .then((data: any) => {
        return setUserLockups(data[0][1]);
      })
      .catch(() => setUserLockups(null));
  }, []);

  return userLockups;
};
