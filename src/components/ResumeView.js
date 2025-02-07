import React, { useEffect } from 'react';

const ResumeView = () => {
  useEffect(() => {
    window.location.href = 'https://saquib.in/SRMISTRMP_MOHAMMAD_SAQUIB_DAIYAN.pdf';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Loading resume...</p>
    </div>
  );
};

export default ResumeView;