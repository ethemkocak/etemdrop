import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#2e2e2e] flex flex-col items-center mt-20 h-56 text-white">
      {/* Logo Section */}
      <div className="flex mb-4">
        <img src="logo.png" alt="Logo" className="mt-4 w-48 h-12" />
      </div>

      {/* Github Link */}
      <Link
        href={"https://github.com/ethemkocak"}
        className="flex mb-4 justify-self-end"
      >
        <Icon icon="mdi:github" className="h-8 w-8" />
      </Link>

      {/* Copyright and Disclaimer */}
      <div className="text-center text-sm">
        <p>© 2024 Copyright Ethem Koçak</p>
        <p>This site is a simulation and does not represent a real platform.</p>
      </div>
    </div>
  );
};

export default Footer;
