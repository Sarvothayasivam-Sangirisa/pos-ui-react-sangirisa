import { FiSearch, FiChevronRight } from "react-icons/fi";
import { MdNotifications } from "react-icons/md";
import photo from '../assets/images/employee.png';

const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center w-full">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 w-full sm:w-auto">

        <div className="relative w-full sm:w-80">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
            <MdNotifications className="text-2xl text-gray-600" />
          </button>
          <img
            src={photo}
            alt="female"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>

        <div className="flex items-center gap-2">
          <FiChevronRight className="text-2xl text-gray-800" />
          <span className="text-lg font-bold text-gray-800">Bill</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
