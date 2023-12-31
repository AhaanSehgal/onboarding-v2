import { IframeArgs } from '../types';
import { Send } from '@tria-sdk/web';
import { eventTypes } from '../utils/constants';

export class IframeController {
  walletUrl: string;
  parentUrl: string;

  constructor({ parentUrl, walletUrl }: IframeArgs) {
    this.parentUrl = parentUrl;
    this.walletUrl = walletUrl;
  }

  getVault({
    triaName,
    password,
    userId,
  }: {
    triaName?: string;
    password: string;
    userId?: string;
  }): {} {
    const encodedParams = btoa(
      JSON.stringify({
        op: 'getVault',
        triaName,
        password,
        userId,
      })
    );
    // wallet iframe trigger for auto wallet login
    const iframeUrl = `${this.walletUrl}/login?params=${encodedParams}`;
    const eventType = eventTypes.logIn;
    return { iframeUrl, eventType };
  }

  createAccount({ triaName, password }: { triaName: string; password: string }) {
    const encodedParams = btoa(
      JSON.stringify({
        op: 'createAccount',
        triaName,
        password,
      })
    );
    // wallet iframe trigger for auto wallet login
    const iframeUrl = `${this.walletUrl}/login?params=${encodedParams}`;
    const eventType = eventTypes.triaSignUp;
    return { iframeUrl, eventType };
  }

  socialogin({
    triaName,
    password,
    platform,
    userId,
    isPasswordLess,
  }: {
    triaName: string;
    password: string;
    platform: string;
    userId: string;
    isPasswordLess: boolean;
  }) {
    const encodedParams = btoa(
      JSON.stringify({
        op: 'socialogin',
        triaName,
        password,
        userId,
        platform,
        isPasswordLess,
      })
    );
    // wallet iframe trigger for auto wallet login
    const iframeUrl = `${this.walletUrl}/login?params=${encodedParams}`;
    const eventType = eventTypes.socialSignUp;
    return { iframeUrl, eventType };
  }

  async signMessage(chainName: string, message: string, loginType: 'native', triaName: '', socialName: '', userId: '', input: '',appDomain:'',appLogo:'') {
    const encodedParams = btoa(
      JSON.stringify({
        chainName,
        message,
        loginType,
        triaName,
        socialName,
        userId,
        input,
        appDomain,
        appLogo
      })
    );
    const iframeUrl = `${this.walletUrl}/sign?params=${encodedParams}`;
    const signWindow = window.open(iframeUrl, '_blank', `popup,width=400,height=500`);
    const eventType = eventTypes.signMessage;
    return { iframeUrl, eventType };
  }

  async send(chainName: string, payload: Send) {
    const encodedParams = btoa(
      JSON.stringify({
        chainName,
        payload,
      })
    );
    const iframeUrl = `${this.walletUrl}/send?params=${encodedParams}`;
    const sendWindow = window.open(iframeUrl, '_blank', `popup,width=400,height=500`);
    const eventType = eventTypes.send;
    return { iframeUrl, eventType };
  }

  approve(triaName: string, chainName: string, tokenAddress: string, amount: number) {
    const encodedParams = btoa(
      JSON.stringify({
        chainName,
        triaName,
        tokenAddress,
        amount,
      })
    );
    const iframeUrl = `${this.walletUrl}/approve?params=${encodedParams}`;
    const approveWindow = window.open(iframeUrl, '_blank', `popup,width=400,height=500`);
    const eventType = 'Approve';
    return { iframeUrl, eventType };
  }
}
