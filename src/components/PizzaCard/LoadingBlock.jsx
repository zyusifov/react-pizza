import React from 'react';
import ContentLoader from "react-content-loader";


function LoadingBlock() {
    return (
        <ContentLoader
        className={"pizza-block"}
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="140" cy="160" r="130" /> 
        <circle cx="585" cy="546" r="26" /> 
        <rect x="0" y="300" rx="5" ry="5" width="280" height="18" /> 
        <rect x="0" y="325" rx="20" ry="20" width="280" height="70" /> 
        <rect x="5" y="410" rx="5" ry="5" width="100" height="40" /> 
        <rect x="163" y="410" rx="10" ry="10" width="100" height="40" />
      </ContentLoader>
    );
}

export default LoadingBlock
