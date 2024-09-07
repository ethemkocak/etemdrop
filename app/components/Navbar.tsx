"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Kullanıcının giriş yapıp yapmadığını kontrol et (token veya başka bir bilgi kullanarak)
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Kullanıcıyı çıkış yaptır ve durumu güncelle
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div
      className="flex justify-between bg-app-yellow bg-app-yellow-2 py-5"
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
              className="text-white bg-purple-600 rounded-md p-3"
            >
              Giriş Yap
            </Link>
            <Link
              href={"/signup"}
              className="text-white bg-purple-600 rounded-md p-3"
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
