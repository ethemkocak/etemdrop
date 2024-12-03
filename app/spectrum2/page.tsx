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

// Snakebite kasasındaki item'ler
const spectrum2Items = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("assault", "ak47", "The_Empress"),
    title: "AK-47 | The Empress",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("pistols", "p250", "See_Ya_Later"),
    title: "P250 | See Ya Later",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("assault", "m4a1s", "Leaded_Glass"),
    title: "M4A1-S | Leaded Glass",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("pistols", "r8_revolver", "Llama_Cannon"),
    title: "R8 Revolver | Llama Cannon",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("smg", "pp-bizon", "High_Roller"),
    title: "PP-Bizon | High Roller",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("smg", "mp9", "Goo"),
    title: "MP9 | Goo",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "cz75-auto", "Tacticat"),
    title: "CZ75-Auto | Tacticat",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "ump-45", "Exposure"),
    title: "UMP-45 | Exposure",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("assault", "sg553", "Phantom"),
    title: "SG 553 | Phantom",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "xm1014", "Ziggy"),
    title: "XM1014 | Ziggy",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("pistols", "glock18", "Off_World"),
    title: "Glock-18 | Off World",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "aug", "Triqua"),
    title: "AUG | Triqua",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mac-10", "Oceanic"),
    title: "MAC-10 | Oceanic",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "tec-9", "Cracked_Opal"),
    title: "Tec-9 | Cracked Opal",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "g3sg1", "Hunter"),
    title: "G3SG1 | Hunter",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "scar-20", "Jungle_Slipstream"),
    title: "Scar-20 | Jungle Slipstream",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "sawed-off", "Morris"),
    title: "Sawed-off",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const spectrum2Knives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const Spectrum2Page: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(spectrum2Items);
  const [shuffledKnives, setShuffledKnives] = useState(spectrum2Knives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...spectrum2Items]));
    setShuffledKnives(shuffleArray([...spectrum2Knives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Spectrum2"
      />
    </div>
  );
};

export default Spectrum2Page;
