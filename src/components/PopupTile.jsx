import { useState } from "react";
import Popup from "./Popup";

const PopupTile = ({ message }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => {
    setIsPopupVisible(true);
  };

  const hidePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="flex flex-col gap-2 rounded-box p-4 justify-center items-center outline outline-gray-300">
      <h1 className="text-2xl font-bold mb-4">Popup Example</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={showPopup}>
        Show Popup
      </button>
      {isPopupVisible && (
        <Popup message="This is a popup message" onClose={hidePopup} />
      )}
    </div>
  );
};

export default PopupTile;
