import { TRIA_WALLET_SELECTED_CHAIN, eventTypes } from '../utils/constants';

export function useSwitchChain() {
  const switchChain = (chainName: string) => {
    if (window.parent) {
      const message = JSON.stringify({
        success: true,
        type: eventTypes.switchChain,
        data: { chainName },
      });
      window.parent.postMessage(message, '*');
    }
  };

  return { switchChain };
}

export function useChainName() {
  const chainName = window.localStorage.getItem(TRIA_WALLET_SELECTED_CHAIN);
  return { chainName };
}
