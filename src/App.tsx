import { useEffect, useState } from 'react';
import './App.css';
import Cookies from './Cookies';
import Modal from './Modal';
import { type CookieOption, initialCookies } from './data/cookiesJSON';
import { setCookie } from './utils/cookies';

const LS_KEY = 'cookiePreferences';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [cookies, setCookies] = useState<CookieOption[]>(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      return raw ? JSON.parse(raw) : initialCookies;
    } catch {
      return initialCookies;
    }
  });

  // 2) Persist to localStorage on every state change (auto-save)
  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(cookies));
      // If you ALSO need a real cookie for server/GTM, mirror it:
      // setCookie(LS_KEY, JSON.stringify(cookies), 30);
    } catch {
      console.error(LS_KEY);
    }
  }, [cookies]);

    const handleInputValue = (title: string, value: boolean) => {
    setCookies((prev) =>
      prev.map((cookie)  =>
        cookie.title === title ? { ...cookie, toggle: value } : cookie
      )
    );
  };

  const handleManageCookies = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    
  };

  const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

  const handleAcceptAll = async () => {
    setCookies((prev) =>
      prev.map((cookie) => ({
        ...cookie,
        toggle: true, // force all checkboxes to true
      }))
    );
    await sleep(500);

    setCookie('cookie Preferences', JSON.stringify(cookies), 30);
    handleCloseModal();
  };

  const handleDeclineAll = async () => {
    setCookies((prev) =>
      prev.map((cookie) => ({
        ...cookie,
        toggle: false, // force all checkboxes to false
      }))
    );
    await sleep(500);
    handleCloseModal();
  };

  const handleSaveValue = () => {
    setCookies((prev) => prev.map((cookie) => ({
      ...cookie,
    })))
    handleCloseModal()
  }

  return (
    <div className="w-full h-full realtive">
      <Cookies 
      handleDeclineAll={handleDeclineAll}
      handleAcceptAll={handleAcceptAll}
      handleManageCookies={handleManageCookies} />
      {showModal && (
        <Modal
          handleInputValue={handleInputValue}
          handleAcceptAll={handleAcceptAll}
          handleDeclineAll={handleDeclineAll}
          cookies={cookies}
          handleSaveValue={handleSaveValue}
        />
      )}
    </div>
  );
}

export default App;
