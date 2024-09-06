"use client";
import { useState } from "react";

const Cases = () => {
  const [showMore, setShowMore] = useState(false);

  const cases = [
    { src: "kilowatt.png", title: "Kilowatt Case", price: "$3.60" },
    { src: "revolution.png", title: "Revolution Case", price: "$0.30" },
    { src: "recoil.webp", title: "Recoil Case", price: "$0.20" },
    {
      src: "dreams_nightmares.png",
      title: "Dreams & Nightmares Case",
      price: "$0.70",
    },
    { src: "snakebite.png", title: "Snakebite Case", price: "$0.25" },
    { src: "fracture.png", title: "Fracture Case", price: "$0.25" },
    { src: "clutch.png", title: "Clutch Case", price: "$0.40" },
    { src: "prisma_2.png", title: "Prisma 2 Case", price: "$0.70" },
    { src: "prisma.png", title: "Prisma Case", price: "$0.70" },
    { src: "cs20.png", title: "CS20 Case", price: "$0.60" },
    { src: "danger_zone.png", title: "Danger Zone Case", price: "$0.75" },
    { src: "horizon.png", title: "Horizon Case", price: "$0.75" },
    { src: "spectrum_2.png", title: "Spectrum 2 Case", price: "$1.65" },
    { src: "spectrum.png", title: "Spectrum Case", price: "$2.40" },
    { src: "glove.png", title: "Glove Case", price: "$5.00" },
    { src: "gamma_2.png", title: "Gamma 2 Case", price: "$2.10" },
    { src: "gamma.png", title: "Gamma Case", price: "$2.10" },
    { src: "chroma_3.png", title: "Chroma 3 Case", price: "$1.90" },
    { src: "chroma_2.png", title: "Chroma 2 Case", price: "$1.90" },
    { src: "chroma.png", title: "Chroma Case", price: "$1.90" },
    { src: "revolver.png", title: "Revolver Case", price: "$1.80" },
    { src: "shadow.png", title: "Shadow Case", price: "$0.90" },
    { src: "falchion.png", title: "Falchion Case", price: "$0.95" },
    { src: "huntsman_weapon.png", title: "Huntsman Case", price: "$1.80" },
    { src: "shattered_web.png", title: "Shattered Web Case", price: "$4.50" },
  ];

  // Display either 10 cases or all depending on the state
  const displayedCases = showMore ? cases : cases.slice(0, 10);

  return (
    <div className="bg-zinc-900 rounded-lg w-3/4 mx-auto flex flex-wrap justify-center mt-10 relative">
      {displayedCases.map((item, index) => (
        <div
          key={index}
          className="bg-slate-400 w-48 h-48 rounded-xl flex flex-col justify-center items-center gap-3 ml-5 mt-5"
        >
          <img
            src={"/cases/" + item.src}
            alt={item.title}
            className="w-28 h-24"
          />
          <h2 className="text-sm">{item.title}</h2>
          <h4 className="bg-teal-700 rounded-sm p-1">{item.price}</h4>
        </div>
      ))}

      {/* Button to toggle between showing more or fewer cases */}
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
