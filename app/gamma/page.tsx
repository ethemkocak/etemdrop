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

// gamma kasasındaki item'ler
const gammaItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("assault", "m4a1s", "Mecha_Industries"),
    title: "M4A1-S | Mecha Industries",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("pistols", "glock18", "Wasteland_Rebel"),
    title: "Glock-18 | Wasteland Rebel",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("assault", "m4a4", "Desolate_Space"),
    title: "M4A4 | Desolate Space",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("pistols", "p2000", "Imperial_Dragon"),
    title: "P2000 | Imperial Dragon",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("sniper", "scar-20", "Bloodsport"),
    title: "SCAR-20 | Bloodsport",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("sniper", "awp", "Phobos"),
    title: "AWP | Phobos",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "p90", "Chopper"),
    title: "P90 | Chopper",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("assault", "aug", "Aristocrat"),
    title: "AUG | Aristocrat",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "r8_revolver", "Reboot"),
    title: "R8 Revolver | Reboot",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "sawed-off", "Limelight"),
    title: "Sawed-Off | Limelight",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("pistols", "five-seven", "Violent_Daimyo"),
    title: "Five-SeveN | Violent Daimyo",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "tec-9", "Ice_Cap"),
    title: "Tec-9 | Ice Cap",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "sg553", "Aerial"),
    title: "SG 553 | Aerial",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mac-10", "Carnivore"),
    title: "Mac-10 | Carnivore",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "p250", "Iron_Clad"),
    title: "p250 | Iron Clad",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "nova", "Exo"),
    title: "Nova | Exo",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "pp-bizon", "Harvester"),
    title: "PP-Bizon | Harvester",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const gammaKnives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const GammaPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(gammaItems);
  const [shuffledKnives, setShuffledKnives] = useState(gammaKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...gammaItems]));
    setShuffledKnives(shuffleArray([...gammaKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Gamma"
      />
    </div>
  );
};

export default GammaPage;
