"use client";

import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { Icon } from "@iconify/react";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false); // Switch için state

  useEffect(() => {
    // API'den username'i çekmek için fetch isteği
    const fetchUsername = async () => {
      try {
        const response = await fetch("/api/profile/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Token ile doğrulama
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUsername(data.username);
        } else {
          setError(data.message); // Hata mesajını set ediyoruz
        }
      } catch (error) {
        console.error("Error fetching username:", error);
        setError("Failed to fetch user data"); // Burada hata mesajını gönderiyoruz
      }
    };

    fetchUsername();
  }, []); // Sadece ilk render'da çalışması için boş dependency array

  // Switch butonu işlevi
  const handleToggle = () => {
    setIsActive(!isActive); // Durumu tersine çevir
  };

  return (
    <div className="mt-6 flex flex-col items-center">
      {/* Avatar Bileşeni */}
      <Avatar />

      {/* Kullanıcı Adı veya Hata Mesajı */}
      <div className="text-white mt-2">
        {error ? <p>{error}</p> : <p>{username}</p>}
      </div>

      {/* Envanter Başlığı */}
      <div className="flex items-center text-white mt-20">
        <Icon icon="mdi:gun" className="h-5 w-5 mr-2" />
        <span>Envanter</span>
      </div>

      {/* Toggle (Switch) Butonu */}
      <div className="flex items-center space-x-4 mt-4">
        <span
          className={`${!isActive ? "text-white font-bold" : "text-gray-400"}`}
        >
          Tümü
        </span>
        <button
          onClick={handleToggle}
          className={`relative w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
            isActive ? "bg-yellow-500" : "bg-gray-600"
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              isActive ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
        <span
          className={`${
            isActive ? "text-yellow-500 font-bold" : "text-gray-400"
          }`}
        >
          Aktif
        </span>
      </div>

      {/* Alt Çizgi */}
      <div className="border-b border-white w-10/12 mt-4"></div>
    </div>
  );
};

export default Profile;
