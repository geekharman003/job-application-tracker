import { Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import useTheme from "../../store/useThemeStore.js";

function Header() {
  const [sideBarDisplay, setSideBarDisplay] = useState(false);

  const { darkMode, setDarkMode } = useTheme();

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
        className="flex justify-between items-center dark:bg-zinc-900 dark:text-white p-4 border-b-2 dark:border-b-zinc-700 h-20"
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
            onClick={() => setDarkMode()}
            id="dark-mode"
            className="hover:bg-slate-200 hover:dark:bg-zinc-800 cursor-pointer rounded-lg p-1"
          >
            {darkMode ? <Sun /> : <Moon size={20} />}
          </span>
          {/* <span
            id="profile-icon"
            className="bg-blue-700 text-white text-center p-2 w-10 rounded-full"
          >
            U
          </span> */}
        </div>
      </div>
    </>
  );
}

export default Header;
