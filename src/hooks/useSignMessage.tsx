import { useEffect, useState } from 'react';
const authUrl="https://auth.tria.so";
import {createEncodedData,createIframe} from "../utils"


export const useSignMessage = (calldata:any) => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const signMessage = () => {
    setIsLoading(true);
    

    const iframeEncodedData = createEncodedData(calldata);
    const signIframeUrl = `${authUrl}/signMessage/${iframeEncodedData}`;
    createIframe(signIframeUrl,"sdkSign");
    setIsLoading(false);
    return signIframeUrl;

  };

  useEffect(() => {
    const detect = (event: MessageEvent) => {
      if (event.origin !== authUrl) return;

      let eventData;
      try {
        eventData = JSON.parse(event.data);
      } catch (err) {
        eventData = event.data;
      }
    
      if (eventData?.type ==='closeIframe' && eventData?.callFrom=="sign") {
        console.log("event",eventData);
        setData(eventData?.data);
        setIsLoading(false);
        document.getElementById("sdkSign")?.remove();
      }
    };
  
  

    window.addEventListener('message', detect);

    return () => {
      window.removeEventListener('message', detect);
    };
  }, []);

  return { data, isLoading, isError, isSuccess: !!data, signMessage };
};
