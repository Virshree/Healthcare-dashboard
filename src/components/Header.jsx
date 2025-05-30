import { Bell, Plus, Search } from "lucide-react";
import React from "react";

function Header() {
  return (
    <header className="grid  col-span-4   p-5 shadow  ">
      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Search Input */}
        <div className=" relative w-[500px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />

          {/* Notification Icon */}
          <Bell 
            className="w-5 h-5 text-gray-600 absolute right-3 top-1/2  -translate-y-1/2  "
            fill="blue"
          />
          <input
            type="text"
            placeholder="Search..."
            className="pl-7 mr-6 py-2 border border-gray-300 w-full "
          />
        </div>

        {/* Profile Image */}
        <div className="flex items-center ml-auto gap-6">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
