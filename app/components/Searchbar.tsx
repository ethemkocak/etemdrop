import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Searchbar = () => {
  return (
    <div className="h-16 w-full flex items-center justify-between bg-[#525151] px-4">
      <div className="text-2xl text-yellow-200">OPEN CASE</div>
      <div className="flex gap-5">
        <Link
          href={"/casebattle"}
          className="flex items-center text-green-500 custom-font-2 text-xl"
        >
          <Icon
            icon={"material-symbols:swords"}
            className="w-5 h-5 mr-1 text-green-500"
          />
          Case Battle
        </Link>
        <Link
          href={"/upgrader"}
          className="flex items-center text-blue-400 custom-font-2 text-xl"
        >
          <Icon
            icon="jam:pie-chart-alt"
            className="text-blue-400 w-5 h-5 mr-1"
          />
          Upgrader
        </Link>
      </div>
    </div>
  );
};

export default Searchbar;
