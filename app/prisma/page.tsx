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

// Prisma kasasındaki item'ler
const prismaItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("assault", "m4a4", "The_Emperor"),
    title: "M4A4 | The Emperor",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("pistols", "five-seven", "Angry_Mob"),
    title: "Five-SeveN | Angry Mob",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("assault", "aug", "Momentum"),
    title: "AUG | Momentum",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("heavy", "xm1014", "Incinegator"),
    title: "XM1014 | Incinegator",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("pistols", "r8_revolver", "Skull_Crusher"),
    title: "R8 Revolver | Skull Crusher",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("sniper", "awp", "Atheris"),
    title: "AWP | Atheris",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "desert_eagle", "Light_Rail"),
    title: "Desert Eagle | Light Rail",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "tec-9", "Bamboozle"),
    title: "Tec-9 | Bamboozle",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "ump-45", "Moonrise"),
    title: "UMP-45 | Moonrise",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mp5-sd", "Gauss"),
    title: "MP-sd | Gauss",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("assault", "ak47", "Uncharted"),
    title: "AK-47 | Uncharted",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "p250", "Verdigris"),
    title: "P250 | Verdigris",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "galil-ar", "Akoben"),
    title: "Galil-AR | Akoben",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mac-10", "Whitefish"),
    title: "Mac-10 | Whitefish",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "famas", "Crypsis"),
    title: "Famas | Crypsis",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "p90", "Off_World"),
    title: "P90 | Off World",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mp7", "Mischief"),
    title: "MP7 | Mischief",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const prismaKnives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const PrismaPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(prismaItems);
  const [shuffledKnives, setShuffledKnives] = useState(prismaKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...prismaItems]));
    setShuffledKnives(shuffleArray([...prismaKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Prisma"
      />
    </div>
  );
};

export default PrismaPage;
