import Link from "next/link";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-stone-700 py-5">
      <Image width={200} height={50} src="/logo.png" alt="" />
      <div className="flex gap-4 mr-4">
        <Link href={"/login"} className="text-white bg-blue-400 rounded-md p-3">
          Giriş Yap
        </Link>
        <Link
          href={"/signup"}
          className="text-white bg-blue-400 rounded-md p-3"
        >
          Kayıt Ol
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
