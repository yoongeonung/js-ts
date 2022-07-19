import React from 'react';

interface BannerProps {
    message?: string;
}

const ErrorBanner = ({message}:BannerProps) => {

  return (
   <div>
       {message}
   </div>
  );
}

export default ErrorBanner;