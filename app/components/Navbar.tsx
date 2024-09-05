import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-stone-700 py-5">
      <img src="/logo.png" alt="" />
      <div className="flex gap-4 mr-4">
        <button className="text-white bg-blue-400 rounded-md p-2">
          Giriş Yap
        </button>
        <button className="text-white bg-blue-400 rounded-md p-2">
          Kayıt Ol
        </button>
      </div>
    </div>
  );
};

export default Navbar;
