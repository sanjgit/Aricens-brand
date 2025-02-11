import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">Privacy Policy</h1>
        <p className="text-gray-300 text-sm text-center mb-4">Effective Date: [Insert Date]</p>
        
        <h2 className="text-2xl font-semibold mt-6 text-blue-300">1. Introduction</h2>
        <p className="text-gray-300">
          Welcome to <strong>AriceNS</strong>. Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your data when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-blue-300">2. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li><strong>Personal Information:</strong> Name, Email, Phone, Company Name, etc.</li>
          <li><strong>Automated Data:</strong> IP Address, Browser Type, Pages Visited, etc.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-blue-300">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>To provide and improve our services</li>
          <li>To communicate with you via email or phone</li>
          <li>For security, fraud prevention, and legal compliance</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-blue-300">4. Your Rights</h2>
        <p className="text-gray-300">
          Depending on your location, you may have the right to access, correct, delete, or restrict your personal data.
          To exercise your rights, contact us at <strong>[your email]</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-blue-300">5. Cookies and Tracking</h2>
        <p className="text-gray-300">
          We use cookies to improve your browsing experience. You can manage cookie settings in your browser.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-blue-300">6. Contact Us</h2>
        <p className="text-gray-300">
          If you have any questions about this policy, reach out to us at <strong>[your email]</strong>.
        </p>

        <p className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} AriceNS. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
