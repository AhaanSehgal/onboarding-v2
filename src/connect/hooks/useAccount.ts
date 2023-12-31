import { TRIA_WALLET_STORE } from '../utils/constants';

export type Account = {
  triaName: string;
  evm: {
    address: string;
  };
};

export type useAccountResponse = {
  account: Account | null;
};

export function useAccount() {
  const account = window.localStorage.getItem(TRIA_WALLET_STORE);
  return { account: JSON.parse(account as string) } as useAccountResponse;
}
