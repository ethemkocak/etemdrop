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

// huntsman kasasındaki item'ler
const huntsmanItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("assault", "ak47", "Vulcan"),
    title: "AK-47 | Vulcan",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("assault", "m4a4", "Desert-Strike"),
    title: "M4A4 | Desert-Strike",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("assault", "m4a1s", "Atomic_Alloy"),
    title: "M4A1-S | Atomic Alloy",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("pistols", "usp-s", "Caiman"),
    title: "Caiman",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("sniper", "scar-20", "Cyrex"),
    title: "Cyrex",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.99
  {
    src: getImagePath("assault", "aug", "Torque"),
    title: "AUG | Torque",
    chance: "3.99%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "xm1014", "Heaven_Guard"),
    title: "XM1014 | Heaven Guard",
    chance: "3.99%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "pp-bizon", "Antique"),
    title: "PP-Bizon | Antique",
    chance: "3.99%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mac-10", "Tatter"),
    title: "Mac-10 | Tatter",
    chance: "3.99%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("smg", "p90", "Module"),
    title: "P90 | Module",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "tec-9", "Isaac"),
    title: "Tec-9 | Isaac",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "galil-ar", "Kami"),
    title: "Galil AR | Kami",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "ssg_08", "Slashed"),
    title: "SSG 08 | Slashed",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "p2000", "Pulse"),
    title: "p2000 | Pulse",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "cz75-auto", "Twist"),
    title: "CZ75-Auto | Twist",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const huntsmanKnives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "",
    chance: "0.26%",
    rarity: "gold",
  },
];

const HuntsmanPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(huntsmanItems);
  const [shuffledKnives, setShuffledKnives] = useState(huntsmanKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...huntsmanItems]));
    setShuffledKnives(shuffleArray([...huntsmanKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Huntsman"
      />
    </div>
  );
};

export default HuntsmanPage;
