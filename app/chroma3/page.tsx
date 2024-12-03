"use client";

import React, { useEffect, useState } from "react";
import CaseAnimation from "../components/CaseAnimation";

// Fisher-Yates (Knuth) Shuffle Algorithm
function shuffleArray(
  array: { src: string; title: string; chance: string; rarity: string }[]
) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Rastgele bir indeks seç
    [array[i], array[j]] = [array[j], array[i]]; // Elemanları değiştir
  }
  return array;
}

// Function to dynamically generate image paths based on category, weapon, and skin
const getImagePath = (category: string, weapon: string, skin: string) => {
  return `/${category}/${weapon}/${skin}.webp`; // Public klasöründen erişim
};

// chroma3 kasasındaki item'ler
const chroma3Items = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("assault", "m4a1s", "Chantico's_Fire"),
    title: "M4A1-S | Chantico's Fire",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("smg", "pp-bizon", "Judgement_of_Anubis"),
    title: "PP-Bizon | Judgement of Anubis",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("pistols", "p250", "Asiimov"),
    title: "P250 | Asiimov",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("smg", "ump-45", "Primal_Saber"),
    title: "UMP-45 | Primal Saber",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("assault", "aug", "Fleet_Flock"),
    title: "AUG | Fleet Flock",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("sniper", "ssg_08", "Ghost_Crusader"),
    title: "SSG 08 | Ghost Crusader",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "xm1014", "Black_Tie"),
    title: "XM1014 | Black Tie",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("assault", "galil-ar", "Firefight"),
    title: "Galil AR | Firefight",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "tec-9", "Re-Entry"),
    title: "Tec-9 | Re-Entry",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "cz75-auto", "Red_Astor"),
    title: "CZ75-Auto | Red Astor",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("smg", "mp9", "Bioleak"),
    title: "MP9 | Bioleak",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "p2000", "Oceanic"),
    title: "P2000 | Oceanic",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "dual_berettas", "Ventilators"),
    title: "Dual Berettas | Ventilators",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "g3sg1", "Orange_Crash"),
    title: "G3SG1 | Orange Crash",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "m249", "Spectre"),
    title: "M249 | Spectre",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "sawed-off", "Fubar"),
    title: "Sawed-Off | Fubar",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "sg553", "Atlas"),
    title: "SG 553 | Atlas",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const chroma3Knives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const Chroma3Page: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(chroma3Items);
  const [shuffledKnives, setShuffledKnives] = useState(chroma3Knives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...chroma3Items]));
    setShuffledKnives(shuffleArray([...chroma3Knives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Snakebite"
      />
    </div>
  );
};

export default Chroma3Page;
