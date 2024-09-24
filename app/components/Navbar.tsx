"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Menu from "./Menu"; // Menu bileşenini ekleyelim

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü açık mı değil mi kontrol ediyoruz

  // Menü açma-kapama işlevi
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      className="relative flex justify-between bg-app-yellow bg-[#2e2e2e] py-5"
      style={{ boxShadow: "10px black" }}
    >
      <Link href={"/"}>
        <Image width={200} height={50} src="/logo.png" alt="Logo" />
      </Link>
      <div className="flex gap-4 mr-4 items-center">
        {isLoggedIn ? (
          <>
            {/* Kullanıcı giriş yaptıysa Profil ve Çıkış seçeneklerini göster */}
            <Link href={"/profile"} className="text-white">
              <Icon icon="gg:profile" className="w-10 h-10" />
            </Link>

            <button onClick={toggleMenu} className="relative">
              <Icon
                icon="mingcute:menu-fill"
                className="text-white w-10 h-10"
              />
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

      {/* Menü açıldığında gösterilir */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 w-96 bg-gray-800 p-4 z-50">
          <Menu /> {/* Menu bileşeni burada açılır */}
          <button
            onClick={handleLogout}
            className="text-white bg-red-400 rounded-md p-3"
          >
            Çıkış Yap
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
