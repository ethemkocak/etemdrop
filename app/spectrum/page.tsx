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
const spectrumItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("assault", "ak47", "Bloodsport"),
    title: "AK47 | Bloodsport",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("pistols", "usp-s", "Neo-Noir"),
    title: "USP-S | Neo-Noir",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("assault", "m4a1s", "Decimator"),
    title: "M4A1-S | Decimator",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("sniper", "awp", "Fever_Dream"),
    title: "AWP | Fever Dream",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("pistols", "cz75-auto", "Xiangliu"),
    title: "CZ75-Auto Xiangliu",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("assault", "galil-ar", "Crimson_Tsunami"),
    title: "Galil-AR | Crimson_Tsunami",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "xm1014", "Seasons"),
    title: "XM1014 | Seasons",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mac-10", "Last_Dive"),
    title: "Mac-10 | Last_Dive",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "ump-45", "Scaffold"),
    title: "| Ump-45 | Scaffold",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "m249", "Emerald_Poison_Dart"),
    title: "M249 | Emerald Poison Dart",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("pistols", "desert_eagle", "Oxide_Blaze"),
    title: "Desert Eagle | Oxide Blaze",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "five-seven", "Capillary"),
    title: "Five-SeveN | Capillary",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "p250", "Ripple"),
    title: "P250 | Ripple",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "scar-20", "Blueprint"),
    title: "SCAR-20 | Blueprint",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "pp-bizon", "Jungle_Slipstream"),
    title: "PP-Bizon | Jungle Slipstream",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mp7", "Akoben"),
    title: "MP7 | Akoben",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "sawed-off", "Zander"),
    title: "Sawed-Off | Zender",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const spectrumKnives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const SpectrumPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(spectrumItems);
  const [shuffledKnives, setShuffledKnives] = useState(spectrumKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...spectrumItems]));
    setShuffledKnives(shuffleArray([...spectrumKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Spectrum"
      />
    </div>
  );
};

export default SpectrumPage;
