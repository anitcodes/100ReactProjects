import React from "react";
import wallpaper from "../assets/wallpaper.png";
import recyclebin from "../assets/recycle-bin.png";
import folderClosed from "../assets/folderClosed.png";
import folderOpen from "../assets/folderOpen.png";
import Taskbar from "../components/Taskbar";

const Desktop = () => {
  const desktopIcons = [
    { img: recyclebin, label: "Recycle Bin" },
    { img: folderClosed, label: "Videos" },
    { img: folderClosed, label: "SCS" },
    { img: folderOpen, label: "CSIT" },
    { img: folderOpen, label: "React Project" },
  ];

  return (
    <div
      className="h-screen w-full bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div
        className="h-screen w-full pt-4 px-4 flex flex-col gap-6 items-start"
        id="desktop"
      >
        {desktopIcons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center gap-2 cursor-pointer">
            <img src={icon.img} alt={icon.label} className="deskIcon" />
            <h3 className="deskLabel">{icon.label}</h3>
          </div>
        ))}
      </div>

      <Taskbar />
    </div>
  );
};

export default Desktop;
