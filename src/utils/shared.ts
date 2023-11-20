export const createEncodedData=(data:any)=>{
    const encodedParams = btoa(
      JSON.stringify(data));
    return encodedParams;
  }
  

 export  const createIframe = (iframeUrl:string,hookName:string) => {
    const iframeContainer = document.createElement("div");
    iframeContainer.id =hookName ;
    iframeContainer.className = "bg flex justify-between bg-transparent absolute bottom-4 right-2";
    iframeContainer.style.position = "absolute";
    iframeContainer.style.bottom = "4px";
    iframeContainer.style.right = "2px";

    const innerContainer = document.createElement("div");
    innerContainer.className = "mb-4 mr-2 relative rounded-[20px]";

    const iframeWrapper = document.createElement("div");
    iframeWrapper.className = "h-[586px] w-[312px] rounded-[20px] overflow-hidden";

    const iframe = document.createElement("iframe");
    iframe.width = "312";
    iframe.height = "586";
    iframe.src = iframeUrl;
    iframe.allow = "publickey-credentials-get";
    iframe.style.border = "none";

    // Append elements to construct the desired structure
    iframeWrapper.appendChild(iframe);
    innerContainer.appendChild(iframeWrapper);
    iframeContainer.appendChild(innerContainer);

    // Append iframeContainer to the document body or a specific container
    document.body.appendChild(iframeContainer);

    // Return any relevant data if needed
    
  };