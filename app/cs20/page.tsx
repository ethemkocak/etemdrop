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
const cs20Items = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("sniper", "awp", "Wildfire"),
    title: "AWP | Wildfire",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("assault", "famas", "Commemoration"),
    title: "Famas | Commemoration",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("smg", "mp9", "Hydra"),
    title: "MP9 | Hydra",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("assault", "aug", "Death_by_Puppy"),
    title: "AUG | Death by Puppy",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("smg", "p90", "Nostalgia"),
    title: "P90 | Nostalgia",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("smg", "mp5-sd", "Agent"),
    title: "MP5-sd | Agent",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "p250", "Inferno"),
    title: "P250 | Inferno",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "five-seven", "Buddy"),
    title: "Five-SeveN | Buddy",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "ump-45", "Plastique"),
    title: "UMP-45 | Plastique",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "m249", "Aztec"),
    title: "M249 | Aztec",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("pistols", "glock18", "Sacrifice"),
    title: "Glock-18 | Sacrifice",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "famas", "Decommissioned"),
    title: "Famas | Decommissioned",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "dual_berettas", "Elite_1.6"),
    title: "Dual Berettas | Elite 1.6",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "tec-9", "Flash_Out"),
    title: "Tec-9 | Flash Out",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "scar-20", "Assault"),
    title: "SCAR-20 | Assault",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "mag-7", "Popdog"),
    title: "Mag-7 | Popdog",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mac-10", "Classic_Crate"),
    title: "Mac-10 | Classic Crate",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const cs20Knives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Classic Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const Cs20Page: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(cs20Items);
  const [shuffledKnives, setShuffledKnives] = useState(cs20Knives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...cs20Items]));
    setShuffledKnives(shuffleArray([...cs20Knives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Cs20"
      />
    </div>
  );
};

export default Cs20Page;
