"use client";

import React, { useEffect, useState } from "react";
import CaseAnimation from "../components/CaseAnimation";

// Fisher-Yates (Knuth) Shuffle Algorithm
function shuffleArray(
  array: { src: string; title: string; chance: string; rarity: string }[]
) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Get random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// Function to dynamically generate image paths based on category, weapon, and skin
const getImagePath = (category: string, weapon: string, skin: string) => {
  return `/${category}/${weapon}/${skin}.webp`; // Public klasöründen erişim
};

// Recoil kasasındaki item'ler
const recoilItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("pistols", "usp-s", "Printstream"),
    title: "USP-S | Printstream",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("sniper", "awp", "Chromatic_Aberration"),
    title: "AWP | Chromatic Aberration",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.07
  {
    src: getImagePath("assault", "ak47", "Ice_Coaled"),
    title: "AK-47 | Ice Coaled",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("pistols", "p250", "Visions"),
    title: "P250 | Visions",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("heavy", "sawed-off", "Kiss♥Love"),
    title: "Sawed-Off | Kiss♥Love",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("assault", "sg553", "Dragon_Tech"),
    title: "SG 553 | Dragon Tech",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "r8_revolver", "Crazy_8"),
    title: "R8 Revolver | Crazy 8",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "p90", "Vent_Rush"),
    title: "P90 | Vent Rush",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "dual_berettas", "Floral_Carnivora"),
    title: "Dual Berettas | Floral Carnivora",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "m249", "Downtown"),
    title: "M249 | Downtown",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("assault", "m4a4", "Poly_mag"),
    title: "M4A4 | Poly Mag",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "galil-ar", "Destroyer"),
    title: "Galil AR | Destroyer",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "famas", "Meow_36"),
    title: "Galil AR | Destroyer",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "ump-45", "Roadblock"),
    title: "UMP-45 | Roadblock",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "negev", "Drop_Me"),
    title: "UMP-45 | Roadblock",
    chance: "11.41%",
    rarity: "mil-spec",
  },

  {
    src: getImagePath("heavy", "nova", "Windblown"),
    title: "Nova | Windblown",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "glock18", "Winterized"),
    title: "Glock-18 | Winterized",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mac-10", "Monkeyflage"),
    title: "MAC-10 | Monkeyflage",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const recoilKnives = [
  // Gold (Eldivenler): %0.26
  {
    src: getImagePath("gloves", "random", "gold"),
    title: "Gloves",
    chance: "0.26%",
    rarity: "gold",
  },
];

const RecoilPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(recoilItems);
  const [shuffledKnives, setShuffledKnives] = useState(recoilKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...recoilItems]));
    setShuffledKnives(shuffleArray([...recoilKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Recoil"
      />
    </div>
  );
};

export default RecoilPage;
