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

// prisma2 kasasındaki item'ler
const prisma2Items = [
  {
    src: getImagePath("assault", "m4a1s", "Player_Two"),
    title: "M4A1-S | Player Two",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("pistols", "glock18", "Bullet_Queen"),
    title: "Glock-18 | Bullet Queen",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("assault", "ak47", "Phantom_Disruptor"),
    title: "AK-47 | Phantom Disruptor",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("smg", "mac-10", "Disco_Tech"),
    title: "Mac-10 | Disco Tech",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("heavy", "mag-7", "Justice"),
    title: "Mag-7 | Justice",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("sniper", "ssg_08", "Fever_Dream"),
    title: "SSG 08 | Fever Dream",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("assault", "sg553", "Darkwing"),
    title: "SG 553 | Darkwing",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "p2000", "Acid_Etched"),
    title: "P2000 | Acid Etched",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "sawed-off", "Apocalypto"),
    title: "Sawed-Off | Apocalypto",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("sniper", "scar-20", "Enforcer"),
    title: "Scar 20 | Enforcer",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("sniper", "awp", "Capillary"),
    title: "AWP | Capillary",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "desert_eagle", "Blue_Ply"),
    title: "Desert Eagle | Blue Ply",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "aug", "Tom_Cat"),
    title: "AUG | Tom Cat",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "negev", "Prototype"),
    title: "Negev | Prototype",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "r8_revolver", "Bone_Forged"),
    title: "R8 Revolver | Bone Forged",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mp5-sd", "Desert_Strike"),
    title: "MP5-SD | Desert Strike",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "cz75-auto", "Distressed"),
    title: "CZ75-Auto | Distressed",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const prisma2Knives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "",
    chance: "0.26%",
    rarity: "gold",
  },
];

const Prisma2Page: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(prisma2Items);
  const [shuffledKnives, setShuffledKnives] = useState(prisma2Knives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...prisma2Items]));
    setShuffledKnives(shuffleArray([...prisma2Knives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Prisma2"
      />
    </div>
  );
};

export default Prisma2Page;
