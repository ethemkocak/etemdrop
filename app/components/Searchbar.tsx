import React from "react";

const Searchbar = () => {
  return (
    <div className="h-16 w-full flex items-center justify-between bg-[#525151] px-4">
      <div className="text-2xl text-yellow-200">OPEN CASE</div>
      <div className="flex gap-5">
        <div className="flex items-center text-green-500 custom-font-2 text-xl">
          <img src="casebattle.png" className="h-4 w-4 mr-2" />
          Case Battle
        </div>
        <div className="flex items-center text-blue-400 custom-font-2 text-xl">
          <img src="upgrader.png" className="h-4 w-4 mr-2" />
          Upgrader
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
