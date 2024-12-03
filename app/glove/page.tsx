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
const gloveItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("assault", "m4a4", "Buzz_Kill"),
    title: "M4A4 | Buzz Kill",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("sniper", "ssg_08", "Dragonfire"),
    title: "SSG 08 | Dragonfire",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("assault", "famas", "Mecha_Industries"),
    title: "Famas | Mecha Industries",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("smg", "p90", "Shallow_Grave"),
    title: "P90 | Shallow Grave",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("heavy", "sawed-off", "Wasteland_Princess"),
    title: "Sawed-Off | Wasteland Princess",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("pistols", "usp-s", "Cyrex"),
    title: "USP-S | Cyrex",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("assault", "m4a1s", "Flashback"),
    title: "M4A1-S | Flashback",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "dual_berettas", "Royal_Consorts"),
    title: "Dual Berettas | Royal Consorts",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "nova", "Gila"),
    title: "Nova | Gila",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("sniper", "g3sg1", "Stinger"),
    title: "G3SG1 | Stinger",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("pistols", "glock18", "Ironwork"),
    title: "Glock-18 | Ironwork",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mp7", "Cirrus"),
    title: "MP7 | Cirrus",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "galil-ar", "Black_Sand"),
    title: "Galil AR | Black Sand",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "p2000", "Turf"),
    title: "P2000 | Turf",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "cz75-auto", "Polymer"),
    title: "CZ75-Auto | Polymer",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mp9", "Sand_Scale"),
    title: "MP9 | Sand Scale",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "mag-7", "Sonar"),
    title: "Mag-7 | Sonar",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const gloveKnives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("gloves", "random", "gold"),
    title: "Gloves",
    chance: "0.26%",
    rarity: "gold",
  },
];

const GlovePage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(gloveItems);
  const [shuffledKnives, setShuffledKnives] = useState(gloveKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...gloveItems]));
    setShuffledKnives(shuffleArray([...gloveKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Glove"
      />
    </div>
  );
};

export default GlovePage;
