import { Menu, Moon } from "lucide-react";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";

function Header() {
  const [sideBarDisplay, setSideBarDisplay] = useState(false);

  return (
    <>
      {sideBarDisplay ? (
        <Sidebar
          sideBarDisplay={sideBarDisplay}
          setSideBarDisplay={setSideBarDisplay}
        />
      ) : (
        ""
      )}
      <div
        id="header"
        className="flex justify-between items-center p-4 border-b-2 h-20"
      >
        <span
          id="hamburger"
          className="cursor-pointer"
          onClick={() => setSideBarDisplay((prev) => !prev)}
        >
          <Menu size={20} />
        </span>
        <div className="flex items-center gap-2">
          <span
            id="dark-mode"
            className="hover:bg-slate-200 cursor-pointer rounded-lg p-1"
          >
            <Moon size={20} />
          </span>
          <span
            id="profile-icon"
            className="bg-blue-700 text-white text-center p-2 w-10 rounded-full"
          >
            U
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
