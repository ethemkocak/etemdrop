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

// Clutch kasasındaki item'ler
const clutchItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("assault", "m4a4", "Neo-Noir"),
    title: "M4A4 | Neo-Noir",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("smg", "mp7", "Bloodsport"),
    title: "MP7 | Bloodsport",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("pistols", "usp-s", "Cortex"),
    title: "USP-S | Cortex",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("sniper", "awp", "Mortis"),
    title: "AWP | Mortis",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("assault", "aug", "Stymphalian"),
    title: "AUG | Stymphalian",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("pistols", "glock18", "Moonrise"),
    title: "Glock-18 | Moonrise",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "ump-45", "Arctic_Wolf"),
    title: "Ump-45 | Arctic Wolf",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "negev", "Lionfish"),
    title: "Negev | Lionfish",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "mag-7", "SWAG-7"),
    title: "Mag-7 | SWAG-7",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "nova", "Wild_Six"),
    title: "Nova | Wild Six",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("pistols", "five-seven", "Flame_Test"),
    title: "Five-SeveN | Flame Test",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "sg553", "Aloha"),
    title: "SG 553 | Aloha",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mp9", "Black_Sand"),
    title: "MP9 | Black Sand",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "xm1014", "Oxide_Blaze"),
    title: "XM1014 | Oxide Blaze",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "r8_revolver", "Grip"),
    title: "R8 Revolver | Grip",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "pp-bizon", "Night_Riot"),
    title: "PP-Bizon | Night Riot",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "p2000", "Urban_Hazard"),
    title: "P2000 | Urban Hazard",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const clutchKnives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("gloves", "random", "gold"),
    title: "Gloves",
    chance: "0.26%",
    rarity: "gold",
  },
];

const ClutchPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(clutchItems);
  const [shuffledKnives, setShuffledKnives] = useState(clutchKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...clutchItems]));
    setShuffledKnives(shuffleArray([...clutchKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Clutch"
      />
    </div>
  );
};

export default ClutchPage;
