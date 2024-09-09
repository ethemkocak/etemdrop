import React from "react";

const Searchbar = () => {
  return (
    <div className="h-16 flex items-center justify-between bg-yellow-200 w-full px-4">
      <div className="text-2xl font-bold text-fuchsia-800">OPEN CASE</div>
      <div className="flex gap-5">
        <div className="text-white bg-purple-400 rounded-md  font-bold text-xl">
          Case Battle
        </div>
        <div className="text-white bg-purple-400 rounded-md font-bold text-xl">
          Upgrader
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
