"use client";
import Link from "next/link";
import { useState } from "react";

const Cases = () => {
  const [showMore, setShowMore] = useState(false);

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

  // Display either 10 cases or all depending on the state
  const displayedCases = showMore ? cases : cases.slice(0, 10);

  return (
    <div className=" w-3/4 mx-auto flex flex-col justify-center items-center mt-10 relative">
      {/* Özel Kasalar */}
      <div className="w-full flex flex-wrap justify-center mb-8">
        {special_case.map((item, index) => (
          <Link key={index} href={item.link} passHref>
            <div className="bg-yellow-400 w-48 h-48 rounded-xl flex flex-col justify-center items-center gap-3 ml-5 mt-5 cursor-pointer">
              <img
                src={"/special_case/" + item.src}
                alt={item.title}
                className="w-28 h-24"
              />
              <h2 className="text-sm">{item.title}</h2>
              <h4 className="bg-teal-700 rounded-sm p-1">{item.price}</h4>
            </div>
          </Link>
        ))}
      </div>

      {/* Normal Kasalar */}
      <div className="w-full flex flex-wrap justify-center">
        {displayedCases.map((item, index) => (
          <Link key={index} href={item.link ?? "#"} passHref>
            <div className="bg-gradient-to-b from-purple-950 to-purple-600 border-4  border-violet-500 w-48 h-48 rounded-xl flex flex-col justify-center items-center gap-3 ml-5 mt-5 cursor-pointer">
              <img
                src={"/cases/" + item.src}
                alt={item.title}
                className="w-28 h-24"
              />
              <h2 className="text-sm">{item.title}</h2>
              <h4 className="bg-teal-700 rounded-sm p-1">{item.price}</h4>
            </div>
          </Link>
        ))}
      </div>

      {/* Show More / Show Less Butonu */}
      <div className="ml-auto mt-2 mr-5 mb-5">
        {!showMore ? (
          <button
            onClick={() => setShowMore(true)}
            className="bg-teal-700 text-white rounded-lg px-4 py-2"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={() => setShowMore(false)}
            className="bg-red-500 text-white rounded-lg px-4 py-2"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Cases;
