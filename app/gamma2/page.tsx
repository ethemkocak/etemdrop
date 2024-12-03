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

// gamma2 kasasındaki item'ler
const gamma2Items = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("assault", "ak47", "Neon_Revolution"),
    title: "AK-47 | Neon Revolution",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("assault", "famas", "Roll_Cage"),
    title: "Famas | Roll Cage",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("pistols", "tec-9", "Fuel_Injector"),
    title: "Tec-9 | Fuel Injector",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("smg", "mp9", "Airlock"),
    title: "MP9 | Airlock",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("assault", "aug", "Syd_Mead"),
    title: "AUG | Syd Mead",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("pistols", "desert_eagle", "Directive"),
    title: "Desert Eagle | Directive",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "glock18", "Weasel"),
    title: "Glock-18 | Weasel",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("assault", "sg553", "Triarch"),
    title: "SG 553 | Triarch",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "mag-7", "Petroglyph"),
    title: "Mag-7 | Petroglyph",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("sniper", "scar-20", "Powercore"),
    title: "Scar-20 | Powercore",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("smg", "p90", "Grim"),
    title: "P90 | Grim",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "xm1014", "Slipstream"),
    title: "XM1014 | Slipstream",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "negev", "Dazzle"),
    title: "Negev | Dazzle",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "cz75-auto", "Imprint"),
    title: "CZ75-Auto | Imprint",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "g3sg1", "Ventilator"),
    title: "G3SG1 | Ventilator",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "ump-45", "Briefing"),
    title: "UMP-45 | Briefing",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "five-seven", "Scumbria"),
    title: "Five-SeveN | Scumbria",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const gamma2Knives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const Gamma2Page: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(gamma2Items);
  const [shuffledKnives, setShuffledKnives] = useState(gamma2Knives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...gamma2Items]));
    setShuffledKnives(shuffleArray([...gamma2Knives]));
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

export default Gamma2Page;
