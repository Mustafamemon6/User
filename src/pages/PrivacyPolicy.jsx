// PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>
      <p>
        We value your privacy. Any personal information provided during signup is used solely for account verification and service delivery.
      </p>
      <p>
        Your data is stored securely in our Firebase database and will not be shared with third parties without your consent.
      </p>
      <p>
        You may request to update or delete your data by contacting support.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
