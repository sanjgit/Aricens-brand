import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always enabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookiePreferences");
    if (!storedConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    setIsVisible(false);
  };

  const handleToggle = (category) => {
    setPreferences({ ...preferences, [category]: !preferences[category] });
  };

  return (
    isVisible && (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg border-t border-gray-700 animate-slideUp">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            We use cookies to improve your experience. Manage your preferences below.{" "}
            <a href="/privacy-policy" className="text-blue-400 underline">
              Learn more
            </a>.
          </p>
          <div className="flex items-center space-x-4 mt-3 md:mt-0">
            <label className="flex items-center">
              <input type="checkbox" checked disabled className="mr-2" /> Necessary
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={() => handleToggle("analytics")}
                className="mr-2"
              />
              Analytics
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={() => handleToggle("marketing")}
                className="mr-2"
              />
              Marketing
            </label>
            <button
              onClick={handleAccept}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CookieConsent;
