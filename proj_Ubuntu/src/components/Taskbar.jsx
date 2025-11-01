import React from "react";
import ubuntu from "../assets/ubuntu.png";
import search from "../assets/search.png";
import notes from "../assets/notes.png";
import firefox from "../assets/firefox.png";
import textbox from "../assets/text-box.png";
import terminal from "../assets/terminal.png";
import folderClosed from "../assets/folderClosed.png";
import battery from "../assets/battery.png";
import arrowheadUp from "../assets/arrowhead-up.png";
import wifi from "../assets/wifi.png";
import speaker from "../assets/speaker.png";
import notification from "../assets/notification.png";
import Clock from "./Clock";

const Taskbar = () => {
  const folderIcons = [firefox, textbox, notes, folderClosed, terminal];

  return (
    <div>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 min-h-10 py-2 w-[580px] max-w-[700px] border border-white/20 bg-black/20 backdrop-blur-2xl rounded-full flex items-center justify-center px-4 shadow-lg z-10">
        {/* Left side */}
        <div className="flex gap-3 items-center">
          <img src={ubuntu} alt="Windows" className="taskbarIcon" />

          {/* Search Bar */}
          <div className="relative flex-1 max-w-[300px]">
            <img
              id="search"
              src={search}
              alt="Search"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
            />
            <input
              type="text"
              placeholder="Type here to search"
              className="outline-none pl-10 border border-gray-300 rounded-full text-sm py-1 w-full bg-gray-100 focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Folder Icons */}
          <div className="flex gap-4">
            {folderIcons.map((icon, idx) => (
              <img key={idx} src={icon} alt="" className="taskbarIcon" />
            ))}
          </div>
        </div>
      </div>

      {/* notification section */}
      <div className="fixed bottom-4 right-2 h-10 w-[260px] max-w-[300px] bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center gap-2 px-4 shadow-lg z-10">
        <img src={arrowheadUp} alt="ArrowheadUp" className="notification" />
        <img src={wifi} alt="Wifi" className="notification" />
        <img src={battery} alt="Battery" className="notification" />
        <img src={speaker} alt="Speaker" className="notification" />
        <Clock />
        <img src={notification} alt="Notification" className="notification" />
      </div>
    </div>
  );
};

export default Taskbar;
