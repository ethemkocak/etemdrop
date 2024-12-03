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

// Shadow kasasındaki item'ler
const shadowItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("pistols", "usp-s", "Kill_Confirmed"),
    title: "USP-S | Kill Confirmed",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("assault", "m4a1s", "Golden_Coil"),
    title: "M4A1-S | Golden Coil",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("assault", "ak47", "Frontside_Misty"),
    title: "AK-47 | Frontside Misty",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("sniper", "ssg_08", "Big_Iron"),
    title: "SSG 08 | Big_Iron",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("sniper", "g3sg1", "Flux"),
    title: "G3SG1 | Flux",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.99
  {
    src: getImagePath("assault", "galil-ar", "Stone_Cold"),
    title: "Galil AR | Stone Cold",
    chance: "3.99%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "p250", "Wingshot"),
    title: "P250 | Wingshot",
    chance: "3.99%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "m249", "Nebula_Crusader"),
    title: "M249 | Special Delivery",
    chance: "3.99%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mp7", "Special_Delivery"),
    title: "MP7 | Nebula Crusader",
    chance: "3.99%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("pistols", "glock18", "Wraiths"),
    title: "Glock-18 | Wraiths",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "famas", "Survivor_Z"),
    title: "Famas | Survivor Z",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "dual_berettas", "Dualing_Dragons"),
    title: "Dual Berettas | Dualing Dragons",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mac-10", "Rangeen"),
    title: "Mac-10 | Rangeen",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "mag-7", "Cobalt_Core"),
    title: "Mag-7 | Cobalt Core",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "xm1014", "Scumbria"),
    title: "XM1014 | Scumbria",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "scar-20", "Green_Marine"),
    title: "SCAR-20 | Green Marine",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const shadowKnives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "",
    chance: "0.26%",
    rarity: "gold",
  },
];

const ShadowPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(shadowItems);
  const [shuffledKnives, setShuffledKnives] = useState(shadowKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...shadowItems]));
    setShuffledKnives(shuffleArray([...shadowKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Shadow"
      />
    </div>
  );
};

export default ShadowPage;
