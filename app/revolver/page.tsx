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

// Revolver kasasındaki item'ler
const revolverItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("pistols", "r8_revolver", "Fade"),
    title: "R8 Revolver | Fade",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("assault", "m4a4", "Royal_Paladin"),
    title: "M4A4 | Royal Paladin",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("assault", "ak47", "Point_Disarray"),
    title: "AK-47 | Point Disarray",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("smg", "p90", "Shapewood"),
    title: "P90 | Shapewood",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("sniper", "g3sg1", "The_Executioner"),
    title: "G3SG1 | The Executioner",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %2.66
  {
    src: getImagePath("pistols", "tec-9", "Avalanche"),
    title: "Tec-9 | Avalanche",
    chance: "2.66%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "negev", "Power_Loader"),
    title: "Negev | Power Loader",
    chance: "2.66%",
    rarity: "restricted",
  },
  {
    src: getImagePath("assault", "sg553", "Tiger_Moth"),
    title: "SG 553 | Tiger Moth",
    chance: "2.66%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "five-seven", "Retrobution"),
    title: "Five-SeveN | Retrobution",
    chance: "2.66%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "xm1014", "Teclu_Burner"),
    title: "XM1014 | Teclu Burner",
    chance: "2.66%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "pp-bizon", "Fuel_Rod"),
    title: "PP-Bizon | Fuel Rod",
    chance: "2.66%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %13.32
  {
    src: getImagePath("pistols", "desert_eagle", "Corinthian"),
    title: "Desert Eagle | Corinthian",
    chance: "13.32%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "p2000", "Imperial"),
    title: "P2000 | Imperial",
    chance: "13.32%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "r8_revolver", "Crimson_Web"),
    title: "R8 Revolver | Crimson Web",
    chance: "13.32%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "aug", "Ricochet"),
    title: "AUG | Ricochet",
    chance: "13.32%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "scar-20", "Outbreak"),
    title: "SCAR-20 | Outbreak",
    chance: "13.32%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "sawed-off", "Yorick"),
    title: "Sawed-Off | Yorick",
    chance: "13.32%",
    rarity: "mil-spec",
  },
];

const revolverKnives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const RevolverPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(revolverItems);
  const [shuffledKnives, setShuffledKnives] = useState(revolverKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...revolverItems]));
    setShuffledKnives(shuffleArray([...revolverKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Revolver"
      />
    </div>
  );
};

export default RevolverPage;
