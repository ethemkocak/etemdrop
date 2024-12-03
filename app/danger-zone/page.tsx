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

// danger-zone kasasındaki item'ler
const DangerItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("assault", "ak47", "Asiimov"),
    title: "AK-47 | Asiimov",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("sniper", "awp", "Neo-Noir"),
    title: "AWP | Neo Noir",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("pistols", "desert_eagle", "Mecha_Industries"),
    title: "Desert Eagle | Mecha Industries",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("smg", "ump-45", "Momentum"),
    title: "UMP-45 | Momentum",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("smg", "mp5-sd", "Phosphor"),
    title: "MP5-SD | Phosphor",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("pistols", "usp-s", "Flashback"),
    title: "USP-S | Flashback",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "p250", "Nevermore"),
    title: "P250 | Nevermore",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("assault", "galil-ar", "Signal"),
    title: "Galil AR | Signal",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mac-10", "Pipe_Down"),
    title: "MAC-10 | Pipe Down",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("sniper", "g3sg1", "Scavenger"),
    title: "G3SG1 | Scavenger",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("assault", "m4a4", "Magnesium"),
    title: "M4A4 | Magnesium",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "glock18", "Oxide_Blaze"),
    title: "Glock-18 | Oxide Blaze",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mp9", "Modest_Threat"),
    title: "MP9 | Modest Threat",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "tec-9", "Fubar"),
    title: "Tec-9 | Fubar",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "sg553", "Danger_Close"),
    title: "SG 553 | Danger Close",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "Nova", "Wood_Fired"),
    title: "Nova | Wood Fired",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "sawed-off", "Black_Sand"),
    title: "Sawed-Off | Black Sand",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const DangerKnives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const DangerPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(DangerItems);
  const [shuffledKnives, setShuffledKnives] = useState(DangerKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...DangerItems]));
    setShuffledKnives(shuffleArray([...DangerKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="DangerZone"
      />
    </div>
  );
};

export default DangerPage;
