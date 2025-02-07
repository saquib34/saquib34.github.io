import React, { useEffect } from 'react';

const ResumeView = () => {
  useEffect(() => {
    window.location.href = '/SRMISTRMP_Mohammad_Saquib_Daiyan.pdf';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Loading resume...</p>
    </div>
  );
};

export default ResumeView;