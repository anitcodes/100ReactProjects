import React, { useState } from "react";

const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <h1 className="text-9xl text-orange-500 font-semibold">{currentTime}</h1>
    </div>
  );
};

export default DigitalClock;
