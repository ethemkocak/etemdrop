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

// Chroma kasasındaki item'ler
const chromaItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("sniper", "awp", "Man-o'-war"),
    title: "AWP | Man-o'-war",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("assault", "galil-ar", "Chatterbox"),
    title: "Galil AR | Chatterbox",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("assault", "ak47", "Cartel"),
    title: "AK-47 | Cartel",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("assault", "m4a4", "龍王_(Dragon King)"),
    title: "M4A4 | 龍王 (Dragon King)",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("pistols", "p250", "Muertos"),
    title: "P250 | Muertos",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.99
  {
    src: getImagePath("pistols", "desert_eagle", "Naga"),
    title: "Desert Eagle | Naga",
    chance: "3.99%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mac-10", "Malachite"),
    title: "MAC-10 | Malachite",
    chance: "3.99%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "dual_berettas", "Urban_Shock"),
    title: "Dual Berettas | Urban Shock",
    chance: "3.99%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "sawed-off", "Serenity"),
    title: "Sawed-Off | Serenity",
    chance: "3.99%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %15.98
  {
    src: getImagePath("smg", "mp9", "Deadly_Poison"),
    title: "MP9 | Deadly Poison",
    chance: "15.98%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "glock18", "Catacombs"),
    title: "Glock-18 | Catacombs",
    chance: "15.98%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "m249", "System_Lock"),
    title: "M249 | System Lock",
    chance: "15.98%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "scar-20", "Grotto"),
    title: "SCAR-20 | Grotto",
    chance: "15.98%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "xm1014", "Quicksilver"),
    title: "XM1014 | Quicksilver",
    chance: "15.98%",
    rarity: "mil-spec",
  },
];

const chromaKnives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const ChromaPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(chromaItems);
  const [shuffledKnives, setShuffledKnives] = useState(chromaKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...chromaItems]));
    setShuffledKnives(shuffleArray([...chromaKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Chroma"
      />
    </div>
  );
};

export default ChromaPage;
