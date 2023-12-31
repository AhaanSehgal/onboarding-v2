import { TRIA_WALLET_STORE, eventTypes } from '../utils/constants';

export function useDisconnect() {
  const disconnect = () => {
    if (window.parent) {
      const message = JSON.stringify({
        type: eventTypes.disconnect,
        success: true,
      });
      window.parent.postMessage(message, '*');
    }
    window.localStorage.removeItem(TRIA_WALLET_STORE);
  };

  return { disconnect };
}
