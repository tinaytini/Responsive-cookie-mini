
interface CookiesProps {
  handleManageCookies: () => void;
  handleAcceptAll: () => void;
  handleDeclineAll: () => void;
}


const Cookies: React.FC<CookiesProps> = ({handleManageCookies, handleAcceptAll, handleDeclineAll}) => {

  return (
    <div className="w-full min-h-[184px] bg-white absolute bottom-0 p-4 trasition duration-300 delay-150">
      <div className="w-8/12 mx-auto">
        <div className="text-left my-4">
          <span className="text-gray-950 text-md font-bold">
            We use cookies
          </span>
          <p className="text-base/9 text-gray-950">
            We use cookies to enhance your browsing experience and improve our
            website's performance. By continuing to use this site, you consent
            to the use of cookies. To learn more about how we use your cookies
            and your options, please read our <a>cookie policy</a>.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <button onClick={handleDeclineAll} className="bg-red-700 order-2 md:order-1">Decline all</button>
          <div className="flex flex-col  md:flex-row gap-4 order-1 md:order-2">
            <button onClick={handleAcceptAll} className="bg-indigo-700 font-white">Allow cookies</button>
            <button onClick={handleManageCookies} className="bg-white text-gray-950 border-2 border-gray-200">
              Manage cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
