import {
  FiHome,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { BsBoxes } from "react-icons/bs";
import { LiaBoxesSolid } from "react-icons/lia";
import { PiUserCircleGear, PiHandshakeBold } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { IoIosHelpCircle } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";



const Menu = ({ currentPage, onPageChange }) => {
  const topItems = [
    { id: "home", label: "Home", icon: FiHome },
    { id: "sales", label: "Sales", icon: FaBoxOpen },
    { id: "products", label: "Products", icon: BsBoxes },
    { id: "utilities", label: "Utilities", icon: PiUserCircleGear },
    { id: "stocks", label: "Stocks", icon: LiaBoxesSolid },
    { id: "reports", label: "Reports", icon: IoIosListBox },
    { id: "users", label: "Users", icon: BsPeopleFill },
    { id: "suppliers", label: "Suppliers", icon: PiHandshakeBold },
    { id: "settings", label: "Settings", icon: BsGearFill },
  ];

  const bottomItems = [
    { id: "exit", label: "Exit", icon: ImExit, color: "text-red-500" },
    { id: "help", label: "Help", icon: IoIosHelpCircle },
  ];

  return (
    <div className="w-32 h-screen flex flex-col bg-white shadow-lg border-r">
      {/* Fixed Top Section */}
      <div className="pt-3 pb-1 px-2">
        <div className="flex justify-center gap-1 mb-3">
          <button className="p-1 border border-gray-300 rounded hover:bg-gray-100">
            <FiArrowLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button className="p-1 border border-gray-300 rounded hover:bg-gray-100">
            <FiArrowRight className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        <div className="text-left mb-4">
          <h1 className="text-black font-bold text-xl">POS</h1>
          <p className="text-black font-bold text-base">NAME</p>
        </div>

        {/* Home Button with Gradient */}
        <button
          onClick={() => onPageChange("home")}
          className={`w-full flex items-center gap-2 px-3 py-2 rounded-md mb-3 transition-all ${
            currentPage === "home"
              ? "bg-gradient-to-r from-green-400 to-green-600 text-white shadow"
              : "bg-gradient-to-r from-green-500 to-green-700 text-white hover:opacity-90"
          }`}
        >
          <FiHome className="w-5 h-5" />
          <span className="text-sm font-medium">Home</span>
        </button>
      </div>

      {/* Scrollable Menu Items */}
      <div className="flex-1 overflow-y-auto px-2">
        {topItems.slice(1).map(({ id, label, icon: Icon }) => (
          <div key={id} className="w-full mb-1">
            <button
              onClick={() => onPageChange(id)}
              className={`w-full flex flex-col items-center py-2 rounded-md transition ${
                currentPage === id ? "text-green-600 font-semibold" : "text-gray-600 hover:text-green-500"
              }`}
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs mt-0.5">{label}</span>
            </button>

            <div
              className={`w-[60%] h-px mx-auto transition ${
                currentPage === id ? "bg-green-500" : "bg-gray-200"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="px-2 py-3 border-t">
        {bottomItems.map(({ id, label, icon: Icon, color }) => (
          <button
            key={id}
            onClick={() => onPageChange(id)}
            className={`flex items-center gap-2 w-full px-2 py-2 rounded-md text-sm transition ${
              currentPage === id
                ? "text-green-600 bg-green-50"
                : color || "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
