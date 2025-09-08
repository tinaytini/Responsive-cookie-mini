import type { CookieOption } from "./data/cookiesJSON";


interface ModalProps {
  handleInputValue:(title: string, value: boolean) => void
  handleAcceptAll: () => void;
  handleDeclineAll: () => void;
  handleSaveValue: () => void;
  cookies: CookieOption[];
}




const Modal: React.FC<ModalProps> = ({ 
  handleInputValue,
  handleAcceptAll, 
  handleDeclineAll, 
  cookies,
  handleSaveValue
}) => {



  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="fixed inset-0 bg-gray-700  opacity-70"></div>
      <div className="w-[384px] bg-white z-50">
        <div className="p-8">
          {cookies.map((cookie) => (
            <div className="text-gray-950 mb-8">
              <div className="flex justify-between">
                <label className="font-bold">{cookie.title}</label>
                <label
                  htmlFor={cookie.title}
                  className="relative inline-block w-[50px] h-[30px]"
                >
                  <input
                    id={cookie.title}
                    onChange={(e) =>
                      handleInputValue(cookie.title, e.target.checked)
                    }
                    className="peer w-0 h-0 opacity-0 "
                    type="checkbox"
                    checked={cookie.toggle}
                  />
                  <span className="absolute cursor-pointer bg-gray-100 top-0 left-0 right-0 bottom-0 rounded-full transition-all duration-400 ease-in-out before:content-[''] before:absolute before:bottom-[5px] before:left-[4px]  before:h-[22px] before:w-[22px] before:rounded-full before:bg-gray-300 before:transition before:duration-400 peer-checked:before:translate-x-[20px] peer-checked:bg-indigo-700 peer-checked:before:bg-white"></span>
                </label>
              </div>
              <p className="text-left text-gray-600">{cookie.description}</p>
            </div>
          ))}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <button
              onClick={handleAcceptAll}
              className="col-start-1 col-end-2 bg-indigo-700 transition delay-500"
            >
              Accept all
            </button>
            <button
              onClick={() => handleSaveValue()}
              className="col-start-2 col-end-3 border-1 shadow-md border-gray-200 text-gray-950 font-bold"
            >
              Save
            </button>
            <button
              onClick={handleDeclineAll}
              className="row-start-2 row-end-3 col-start-1 col-end-3 bg-red-700"
            >
              Decline all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
