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

// horizon kasasındaki item'ler
const horizonItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("assault", "ak47", "Neon_Rider"),
    title: "AK-47 | Neon Rider",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("pistols", "desert_eagle", "Code_Red"),
    title: " Desert Eagle | Code Red",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("assault", "m4a1s", "Nightmare"),
    title: "M4A1-S | Nightmare",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("assault", "famas", "Eye_of_Athena"),
    title: "Famas | Eye Of Athena",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("heavy", "sawed-off", "Devourer"),
    title: "Sawed-Off | Devourer",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("sniper", "awp", "PAW"),
    title: "AWP | PAW",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "cz75-auto", "Eco"),
    title: "CZ75-Auto | Eco",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("sniper", "g3sg1", "High_Seas"),
    title: "G3SG1 | High Seas",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "nova", "Toy_Soldier"),
    title: "Nova | Toy Soldier",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mp7", "Powercore"),
    title: "MP7 | Powercore",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("smg", "mp9", "Capillary"),
    title: "MP9 | Capillary",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "p90", "Traction"),
    title: "P90 | Traction",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "glock18", "Warhawk"),
    title: "Glock-18 | Warhawk",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "dual_berettas", "Shred"),
    title: "Dual Berettas | Shred",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "tec-9", "Snek-9"),
    title: "Tec-9 | Snek-9",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "aug", "Amber_Slipstream"),
    title: "AUG | Amber Slipstream",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "r8_revolver", "Survivalist"),
    title: "R8 Revolver | Survivalist",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const horizonKnives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const HorizonPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(horizonItems);
  const [shuffledKnives, setShuffledKnives] = useState(horizonKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...horizonItems]));
    setShuffledKnives(shuffleArray([...horizonKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Horizon"
      />
    </div>
  );
};

export default HorizonPage;
