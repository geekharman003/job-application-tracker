import { Briefcase, X } from "lucide-react";
import { SidebarData } from "./Sidebar";
import { useState } from "react";
import "./Sidebar.css";

function Sidebar({ setSideBarDisplay }) {
  const [selectedLi, setSelectedLi] = useState("Dashboard");

  const changeSelectedLi = (name) => {
    setSelectedLi(name);
  };

  return (
    <div
      id="sidebar"
      className="w-56 h-screen fixed transition ease-in-out delay-150 bg-slate-900 text-white"
    >
      <div
        id="sidebar-header"
        className="flex items-end justify-between p-3 border-b-2 border-gray-800"
      >
        <div id="sidebar-logo-container" className="flex items-center gap-1">
          <div
            id="sidebar-logo"
            className="flex w-fit rounded-lg bg-blue-700 p-1"
          >
            <Briefcase />
          </div>
          <span className="text-lg font-semibold">JobFlow</span>
        </div>
        <span
          id="sidebar-close-btn"
          onClick={() => setSideBarDisplay((prev) => !prev)}
        >
          <button>
            <X size={20} />
          </button>
        </span>
      </div>
      <nav id="sidebar-nav" className="p-3">
        <ul>
          {SidebarData.map((item, index) => (
            <li
              key={index}
              onClick={() => changeSelectedLi(item.title)}
              className={`flex my-4 py-1 px-1 rounded-lg ${item.title === selectedLi ? "active" : ""}`}
            >
              <a
                href={item.path}
                className="
              flex items-center gap-2 w-full text-sm"
              >
                <span>{<item.icon size={15} />}</span>
                <span className="align-bottom">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
