"use client"; // Next.js kullanıyorsanız bu gerekli
import React from "react";
import { Icon } from "@iconify/react";

const Menu = () => {
  return (
    <div className="flex flex-col items-center text-white p-5">
      <div className="w-full max-w-5xl mb-8">
        <h3 className="text-xl mb-4">Account</h3>
        <div className="grid grid-cols-4 gap-4">
          <div>My Account</div>
        </div>
      </div>

      <div className="w-full max-w-5xl mb-8">
        <h3 className="text-xl mb-4">Games</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-green-500">
            <Icon
              icon={"material-symbols:swords"}
              className="w-5 h-5 mr-1 text-green-500"
            />
            Case Battle
          </div>
          <div className="text-blue-400 ">
            <Icon
              icon="jam:pie-chart-alt"
              className="text-blue-400 w-5 h-5 mr-1"
            />
            Upgrader
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
