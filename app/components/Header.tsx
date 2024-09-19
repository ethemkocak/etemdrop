import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full header custom-font-1 relative py-24 bg-gradient-to-b from-[#636262] to-[#000000]">
      <div className=" w-1/3 text-center mx-auto font-bold">
        <h2 className="text-8xl text-[#800020]">OPEN CASE</h2>
        <h2 className="text-8xl text-[#800020]">- NOW -</h2>
        <div className="mt-10">
          <Link
            href={"/kilowatt"}
            className="shadow-lg bg-[#FFD700] px-5 py-3 text-xl rounded-full text-[#4B0082]"
          >
            OPEN YOUR FREE CASE NOW
          </Link>
        </div>
      </div>
      <div className="w-[22rem] absolute bottom-0 left-10">
        <Image
          width={500}
          height={200}
          src="/hero-banner-2.png"
          className=""
          alt=""
        />
      </div>
      <div className="w-[26.5rem] absolute bottom-0 right-0">
        <Image
          width={500}
          height={200}
          src="/hero-banner.png"
          className=""
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
