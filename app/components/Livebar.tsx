"use client"; // Bu satırı ekleyin

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const Livebar = () => {
  const [activePlayers, setActivePlayers] = useState(0); // Aktif oyuncu sayısını tutacak state

  useEffect(() => {
    // WebSocket bağlantısı oluştur
    const socket = new WebSocket("ws://localhost:3001");

    // WebSocket üzerinden mesaj alındığında
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setActivePlayers(data.activePlayers); // Gelen aktif oyuncu sayısını state'e yaz
    };

    // WebSocket bağlantısı kapandığında temizleme işlemi
    socket.onclose = () => {
      console.log("WebSocket bağlantısı kapandı");
    };

    // Bileşen unmount olduğunda WebSocket bağlantısını kapat
    return () => {
      socket.close();
    };
  }, []); // Bileşen yüklendiğinde WebSocket bağlantısı kurulur

  const [activeButton, setActiveButton] = useState<"best" | "all">("best"); // Başlangıçta "best" butonu aktif

  // Parametre tipi olarak "best" | "all" kullanıyoruz
  const handleButtonClick = (button: "best" | "all") => {
    setActiveButton(button); // Tıklanan butonu aktif olarak ayarla
  };
  return (
    <div className="bg-[#323232] flex custom-font-4">
      <div className="flex flex-col items-center text-center bg-[#414141] text-white p-4 w-32">
        <h3 className="text-xl font-semibold">LiveDrop</h3>
        <p className="text-green-500 text-lg flex mr-4">
          <Icon icon="svg-spinners:pulse" className="mt-1" />
          {activePlayers.toLocaleString()} {/* Aktif oyuncu sayısını göster */}
        </p>
        <span className="text-sm">ONLINE</span>
      </div>
      <div className="text-white text-center text-sm">
        <button
          className={`w-16 h-1/2 rounded-sm flex flex-col items-center justify-center ${
            activeButton === "best"
              ? "bg-[#585858] text-yellow-500"
              : "bg-[#222222] text-white"
          }`}
          onClick={() => handleButtonClick("best")} // "BEST DROPS" butonuna basıldığında aktif yap
        >
          <Icon icon="bxs:crown" className="w-5 h-5 mb-1" />
          BEST DROPS
        </button>

        <button
          className={`w-16 h-1/2 rounded-sm flex flex-col items-center justify-center ${
            activeButton === "all"
              ? "bg-[#585858] text-yellow-500"
              : "bg-[#222222] text-white"
          }`}
          onClick={() => handleButtonClick("all")} // "ALL DROPS" butonuna basıldığında aktif yap
        >
          <Icon icon="bxs:crown" className="w-5 h-5 mb-1" />
          ALL DROPS
        </button>
      </div>
    </div>
  );
};

export default Livebar;
