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

// shattered-web kasasındaki item'ler
const shatteredwebItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("sniper", "awp", "Containment_Breach"),
    title: "AWP | Containment Breach",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("smg", "mac-10", "Stalker"),
    title: "Mac-10 | Stalker",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("pistols", "tec-9", "Decimator"),
    title: "Tec-9 | Decimator",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("sniper", "ssg_08", "Bloodshot"),
    title: "SSG 08 | Bloodshot",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("assault", "sg553", "Colony_IV"),
    title: "SG 553 | Colony IV",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("assault", "ak47", "Rat_Rod"),
    title: "AK-47 | Rat Rod",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("assault", "aug", "Arctic_Wolf"),
    title: "AUG | Arctic Wolf",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "p2000", "Obsidian"),
    title: "P2000 | Obsidian",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mp7", "Neon_Ply"),
    title: "MP7 | Neon Ply",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "pp-bizon", "Embargo"),
    title: "PP-Bizon | Embargo",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("pistols", "dual_berettas", "Balance"),
    title: "Dual Berettas | Balance",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "g3sg1", "Black_Sand"),
    title: "G3SG1 | Black Sand",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mp5-sd", "Acid_Wash"),
    title: "MP5-SD | Acid Wash",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "scar-20", "Torn"),
    title: "SCAR-20 | Torn",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "nova", "Plume"),
    title: "Nova | Plume",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "r8_revolver", "Memento"),
    title: "R8 Revolver | Memento",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "m249", "Warbird"),
    title: "M249 | Warbird",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const shatteredwebKnives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const ShatteredwebPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(shatteredwebItems);
  const [shuffledKnives, setShuffledKnives] = useState(shatteredwebKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...shatteredwebItems]));
    setShuffledKnives(shuffleArray([...shatteredwebKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Shattered-web"
      />
    </div>
  );
};

export default ShatteredwebPage;
