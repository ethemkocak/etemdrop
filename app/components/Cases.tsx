"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

const Cases = () => {
  const [showNormalCases, setShowNormalCases] = useState(true);
  const [showSpecialCases, setShowSpecialCases] = useState(true);

  const cases = [
    {
      src: "kilowatt.png",
      title: "Kilowatt Case",
      price: "$3.60",
      link: "/kilowatt",
    },
    {
      src: "revolution.png",
      title: "Revolution Case",
      price: "$0.30",
      link: "/revolution",
    },
    {
      src: "recoil.webp",
      title: "Recoil Case",
      price: "$0.20",
      link: "/recoil",
    },
    {
      src: "dreams_nightmares.png",
      title: "Dreams & Nightmares Case",
      price: "$0.70",
      link: "/dreams-nightmares",
    },
    {
      src: "snakebite.png",
      title: "Snakebite Case",
      price: "$0.25",
      link: "/snakebite",
    },
    {
      src: "fracture.png",
      title: "Fracture Case",
      price: "$0.25",
      link: "/fracture",
    },
    {
      src: "clutch.png",
      title: "Clutch Case",
      price: "$0.40",
      link: "/clutch",
    },
    {
      src: "prisma_2.png",
      title: "Prisma 2 Case",
      price: "$0.70",
      link: "/prisma2",
    },
    {
      src: "prisma.png",
      title: "Prisma Case",
      price: "$0.70",
      link: "/prisma",
    },
    {
      src: "cs20.png",
      title: "CS20 Case",
      price: "$0.60",
      link: "/cs20",
    },
    {
      src: "danger_zone.png",
      title: "Danger Zone Case",
      price: "$0.75",
      link: "/danger-zone",
    },
    {
      src: "horizon.png",
      title: "Horizon Case",
      price: "$0.75",
      link: "/horizon",
    },
    {
      src: "spectrum_2.png",
      title: "Spectrum 2 Case",
      price: "$1.65",
      link: "/spectrum2",
    },
    {
      src: "spectrum.png",
      title: "Spectrum Case",
      price: "$2.40",
      link: "/spectrum",
    },
    {
      src: "glove.png",
      title: "Glove Case",
      price: "$5.00",
      link: "/glove",
    },
    {
      src: "gamma_2.png",
      title: "Gamma 2 Case",
      price: "$2.10",
      link: "/gamma2",
    },
    {
      src: "gamma.png",
      title: "Gamma Case",
      price: "$2.10",
      link: "/gamma",
    },
    {
      src: "chroma_3.png",
      title: "Chroma 3 Case",
      price: "$1.90",
      link: "/chroma3",
    },
    {
      src: "chroma_2.png",
      title: "Chroma 2 Case",
      price: "$1.90",
      link: "/chroma2",
    },
    {
      src: "chroma.png",
      title: "Chroma Case",
      price: "$1.90",
      link: "/chroma",
    },
    {
      src: "revolver.png",
      title: "Revolver Case",
      price: "$1.80",
      link: "/revolver",
    },
    {
      src: "shadow.png",
      title: "Shadow Case",
      price: "$0.90",
      link: "/shadow",
    },
    {
      src: "falchion.png",
      title: "Falchion Case",
      price: "$0.95",
      link: "/falchion",
    },
    {
      src: "huntsman_weapon.png",
      title: "Huntsman Case",
      price: "$1.80",
      link: "/huntsman",
    },
    {
      src: "shattered_web.png",
      title: "Shattered Web Case",
      price: "$4.50",
      link: "/shattered-web",
    },
  ];

  const special_case = [
    {
      src: "best_case.png",
      title: "Best Case",
      price: "$10",
      link: "/best-case",
    },
    {
      src: "pistol_case.png",
      title: "Pistol Case",
      price: "$10",
      link: "/pistol-case",
    },
    {
      src: "retro_case.png",
      title: "Retro Case",
      price: "$10",
      link: "/retro-case",
    },
    {
      src: "skull_case.png",
      title: "Skull Case",
      price: "$10",
      link: "/skull-case",
    },
    {
      src: "special_case.png",
      title: "Special Case",
      price: "$10",
      link: "/special-case",
    },
  ];

  return (
    <div className="w-3/4 mx-auto flex flex-col justify-center items-center mt-10 relative">
      {/* Özel Kasalar Başlığı ve Çizgisi */}
      <div className="flex items-center justify-between w-full">
        <Icon
          icon="game-icons:cut-diamond"
          className="text-blue-600 h-10 w-10"
        />
        <h2 className="text-2xl font-bold text-white">SPECIAL CASES</h2>
        <div className="border-t border-gray-500 w-3/4 ml-5"></div>
        {/* Show/Hide Butonu */}
        <button
          onClick={() => setShowSpecialCases(!showSpecialCases)}
          className="text-gray-400 flex items-center cursor-pointer ml-2"
        >
          {showSpecialCases ? (
            <>
              HIDE <span className="ml-1">▲</span>
            </>
          ) : (
            <>
              SHOW <span className="ml-1">▼</span>
            </>
          )}
        </button>
      </div>

      {/* Özel Kasalar (gizlenebilir) */}
      {showSpecialCases && (
        <div className="w-full flex flex-wrap justify-center mb-8">
          {special_case.map((item, index) => (
            <Link key={index} href={item.link} passHref>
              <div className="bg-[#FFA500] w-48 h-48 rounded-2xl flex flex-col justify-center items-center gap-3 ml-5 mt-5 cursor-pointer border-2 border-white shadow-md shadow-slate-200">
                <img
                  src={"/special_case/" + item.src}
                  alt={item.title}
                  className="w-28 h-24"
                />
                <h2 className="custom-font-3 text-black">{item.title}</h2>
                <h4 className="bg-[#F0EDEE] rounded-md p-1">{item.price}</h4>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Normal Kasalar Başlığı ve Çizgisi */}
      <div className="flex items-center justify-between w-full mt-10">
        <Icon icon="fluent-emoji-flat:crown" className="h-10 w-10" />
        <h2 className="text-2xl font-bold text-white ">GABEN CASES</h2>
        <div className="border-t border-gray-500 w-3/4 ml-5"></div>
        {/* Show/Hide Butonu */}
        <button
          onClick={() => setShowNormalCases(!showNormalCases)}
          className="text-gray-400 flex items-center cursor-pointer ml-2"
        >
          {showNormalCases ? (
            <>
              HIDE <span className="ml-1">▲</span>
            </>
          ) : (
            <>
              SHOW <span className="ml-1">▼</span>
            </>
          )}
        </button>
      </div>

      {/* Normal Kasalar (gizlenebilir) */}
      {showNormalCases && (
        <div className="w-full flex flex-wrap justify-center">
          {cases.map((item, index) => (
            <Link key={index} href={item.link ?? "#"} passHref>
              <div className="bg-[#D4A373] w-48 h-48 rounded-2xl flex flex-col justify-center items-center gap-3 ml-5 mt-5 cursor-pointer border-2 border-white shadow-md shadow-slate-200">
                <img
                  src={"/cases/" + item.src}
                  alt={item.title}
                  className="w-28 h-24"
                />
                <h2 className=" custom-font-3 text-black ">{item.title}</h2>
                <h4 className="bg-[#F0EDEE] rounded-md p-1">{item.price}</h4>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cases;
