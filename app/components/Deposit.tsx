import React from "react";
import { Icon } from "@iconify/react";

const Deposit = () => {
  return (
    <div className="flex text-yellow-500 flex-wrap gap-1 max-w-xs">
      <div className="bg-[#343434] w-24 h-10 rounded-md flex items-center justify-center text-center">
        $5.00
      </div>
      <div className="bg-[#343434] w-24 h-10 rounded-md flex items-center justify-center text-center">
        $10.00
      </div>
      <div className="bg-[#343434] w-24 h-10 rounded-md flex items-center justify-center text-center">
        $20.00
      </div>
      <div className="bg-[#343434] w-24 h-10 rounded-md flex items-center justify-center text-center">
        $50.00
      </div>
      <div className="bg-[#343434] w-24 h-10 rounded-md flex items-center justify-center text-center">
        $100.00
      </div>
      <div className="bg-[#343434] w-24 h-10 rounded-md flex items-center justify-center text-center">
        $200.00
      </div>
      <div className="bg-[#4e4e4e] h-40 w-96  mt-4">
        <div className="mt-10 flex ml-10">
          <div className=" bg-[#3e3e3e] h-10 w-10 flex items-center  justify-center">
            <Icon icon="fa:usd" className="text-white" />
          </div>
          <input
            type="number"
            min="0" // Negatif sayıları engeller
            className="text-white bg-[#343434] h-10 no-spinner"
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              if (target.value.length > 6) {
                target.value = target.value.slice(0, 6); // İlk 6 basamağı tut
              }
            }}
            maxLength={6}
            inputMode="numeric" // Numerik giriş modunu açar
            pattern="[0-9]*" // Sadece sayısal girişe izin verir
          />
        </div>
        <div className="bg-yellow-400 h-10 w-36 text-black justify-center items-center flex ml-20 mt-4">
          Öde
        </div>
      </div>
    </div>
  );
};

export default Deposit;
