"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Oturum bilgisini yerel depolamadan al
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // Token varsa kullanıcı giriş yapmıştır
    } else {
      setIsLoggedIn(false); // Token yoksa kullanıcı giriş yapmamıştır
    }
  }, []);
  const handleLogout = async () => {
    // Çıkış işlemi
    localStorage.removeItem("token"); // Token'ı yerel depolamadan kaldır
    setIsLoggedIn(false); // Durumu güncelle
  };

  return (
    <div
      className="flex justify-between bg-app-yellow bg-[#2e2e2e] py-5"
      style={{ boxShadow: "10px black" }}
    >
      <Link href={"/"}>
        <Image width={200} height={50} src="/logo.png" alt="Logo" />
      </Link>
      <div className="flex gap-4 mr-4">
        {isLoggedIn ? (
          <>
            {/* Kullanıcı giriş yaptıysa Profil ve Çıkış seçeneklerini göster */}
            <Link
              href={"/profile"}
              className="text-white bg-blue-400 rounded-md p-3"
            >
              Profil
            </Link>
            <button
              onClick={handleLogout}
              className="text-white bg-red-400 rounded-md p-3"
            >
              Çıkış Yap
            </button>
          </>
        ) : (
          <>
            {/* Kullanıcı giriş yapmadıysa Giriş Yap ve Kayıt Ol butonlarını göster */}
            <Link
              href={"/login"}
              className="text-white bg-[#0077FF] rounded-md p-3"
            >
              Giriş Yap
            </Link>
            <Link
              href={"/signup"}
              className="text-white bg-[#0077FF] rounded-md p-3"
            >
              Kayıt Ol
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
