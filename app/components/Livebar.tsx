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

  return (
    <div className="bg-[#323232]">
      <div className="flex flex-col items-center text-center bg-[#414141] text-white p-4 w-32">
        <h3 className="text-xl font-semibold">Aktif Oyuncu</h3>
        <p className="text-green-500 text-lg">
          <Icon icon="svg-spinners:pulse" className="" />
          {activePlayers.toLocaleString()} {/* Aktif oyuncu sayısını göster */}
        </p>
        <span className="text-sm">ONLINE</span>
      </div>
    </div>
  );
};

export default Livebar;
