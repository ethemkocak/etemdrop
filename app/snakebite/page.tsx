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

// Snakebite kasasındaki item'ler
const snakebiteItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("pistols", "usp-s", "The_Traitor"),
    title: "USP-S | The Traitor",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("assault", "m4a4", "In_Living_Color"),
    title: "M4A4 | In Living Color",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("smg", "mp9", "Food_Chain"),
    title: "MP9 | Food Chain",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("assault", "galil-ar", "Chromatic_Aberration"),
    title: "Galil-AR | Chromatic Aberration",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("heavy", "xm1014", "XOXO"),
    title: "XM1014 | XOXO",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("assault", "ak47", "Slate"),
    title: "AK-47 | Slate",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "desert_eagle", "Trigger_Discipline"),
    title: "Desert Eagle | Trigger Discipline",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "negev", "dev_texture"),
    title: "Negev | dev_texture",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "p250", "Cyber_Shell"),
    title: "P250 | Cyber Shell",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mac-10", "Button_Masher"),
    title: "MAC-10 | Button Masher",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("pistols", "glock18", "Clear_Polymer"),
    title: "Glock-18 | Clear Polymer",
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
    src: getImagePath("smg", "ump-45", "Oscillator"),
    title: "UMP-45 | Oscillator",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "sg553", "Heavy_Metal"),
    title: "SG 553 | Heavy Metal",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "m249", "O.S.I.P.R."),
    title: "M249 | O.S.I.P.R.",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "cz75-auto", "Circaetus"),
    title: "CZ75-auto | Circaetus",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "r8_revolver", "Junk_Yard"),
    title: "R8 Revolver | Junk Yard",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const snakebiteKnives = [
  // Gold (Bıçaklar): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const SnakebitePage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(snakebiteItems);
  const [shuffledKnives, setShuffledKnives] = useState(snakebiteKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...snakebiteItems]));
    setShuffledKnives(shuffleArray([...snakebiteKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Snakebite"
      />
    </div>
  );
};

export default SnakebitePage;
