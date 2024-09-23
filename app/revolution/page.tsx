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

// Revolution kasasındaki item'ler
const revolutionItems = [
  {
    src: getImagePath("assault", "m4a4", "Temukau"),
    title: "M4A4 | Temukau",
    chance: "0.07%",
    rarity: "covert",
  },
  {
    src: getImagePath("assault", "ak47", "Head_Shot"),
    title: "AK-47 | Head Shot",
    chance: "0.08%",
    rarity: "covert",
  },
  {
    src: getImagePath("sniper", "awp", "Duality"),
    title: "AWP | Duality",
    chance: "0.09%",
    rarity: "classified",
  },
  {
    src: getImagePath("pistols", "p2000", "Wicked_Sick"),
    title: "P2000 | Wicked Sick",
    chance: "0.10%",
    rarity: "classified",
  },
  {
    src: getImagePath("smg", "ump-45", "Wild_Child"),
    title: "UMP-45 | Wild Child",
    chance: "0.12%",
    rarity: "classified",
  },
  {
    src: getImagePath("assault", "m4a1s", "Emphorosaur-S"),
    title: "M4A1-S | Emphorosaur-S",
    chance: "0.13%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mac-10", "Sakkaku"),
    title: "MAC-10 | Sakkaku",
    chance: "0.14%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "glock18", "Umbral_Rabbit"),
    title: "Glock-18 | Umbral Rabbit",
    chance: "0.15%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "p90", "Neoqueen"),
    title: "P90 | Neoqueen",
    chance: "0.16%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "r8_revolver", "Banana_Cannon"),
    title: "R8 Revolver | Banana Cannon",
    chance: "0.17%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "scar-20", "Fragments"),
    title: "SCAR-20 | Fragments",
    chance: "0.18%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "sg553", "Cyberforce"),
    title: "SG 553 | Cyberforce",
    chance: "0.19%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mp9", "Featherweight"),
    title: "MP9 | Featherweight",
    chance: "0.20%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "mag-7", "Insomnia"),
    title: "MAG 7 | Insomnia",
    chance: "0.21%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "p250", "Re.built"),
    title: "P250 | Re.built",
    chance: "0.22%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mp5-sd", "Liquidation"),
    title: "MP5-SD | Liquidation",
    chance: "0.23%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "tec-9", "Rebel"),
    title: "Tec-9 | Rebel",
    chance: "0.24%",
    rarity: "mil-spec",
  },
];

const revolutionKnives = [
  {
    src: getImagePath("gloves", "random", "gold"),
    title: "Gloves",
    chance: "0.25%",
    rarity: "gold",
  },
];

const RevolutionPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(revolutionItems);
  const [shuffledKnives, setShuffledKnives] = useState(revolutionKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...revolutionItems]));
    setShuffledKnives(shuffleArray([...revolutionKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Revolution"
      />
    </div>
  );
};

export default RevolutionPage;
