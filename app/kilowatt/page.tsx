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

// Original arrays with categories, weapons, and skins
const kilowattItems = [
  {
    src: getImagePath("assault", "ak47", "inheritance"),
    title: "AK-47 | Inheritance",
    chance: "0.32%", // 0.64% / 2
    rarity: "covert",
  },
  {
    src: getImagePath("sniper", "awp", "chrome_cannon"),
    title: "AWP | Chrome Cannon",
    chance: "0.32%", // 0.64% / 2
    rarity: "covert",
  },
  {
    src: getImagePath("assault", "m4a1s", "black_lotus"),
    title: "M4A1-S | Black Lotus",
    chance: "1.06%", // 3.2% / 3
    rarity: "classified",
  },
  {
    src: getImagePath("heavy", "zeus", "olympus"),
    title: "Zeus x27 | Olympus",
    chance: "1.06%", // 3.2% / 3
    rarity: "classified",
  },
  {
    src: getImagePath("pistols", "usp-s", "jawbreaker"),
    title: "USP-S | Jawbreaker",
    chance: "1.06%", // 3.2% / 3
    rarity: "classified",
  },
  {
    src: getImagePath("pistols", "glock18", "block_18"),
    title: "Glock-18 | Block-18",
    chance: "3.19%", // 15.98% / 5
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "sawed-off", "analog_input"),
    title: "Sawed-Off | Analog Input",
    chance: "3.19%", // 15.98% / 5
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mp7", "just_smile"),
    title: "MP7 | Just Smile",
    chance: "3.19%", // 15.98% / 5
    rarity: "restricted",
  },
  {
    src: getImagePath("assault", "m4a4", "etch_lord"),
    title: "M4A4 | Etch Lord",
    chance: "3.19%", // 15.98% / 5
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "five-seven", "hybrid"),
    title: "Five-SeveN | Hybrid",
    chance: "3.19%", // 15.98% / 5
    rarity: "restricted",
  },

  {
    src: getImagePath("smg", "mac-10", "light_box"),
    title: "MAC-10 | Light Box",
    chance: "11.41%", // 79.92% / 7
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "dual_berettas", "hideout"),
    title: "Dual Berettas | Hideout",
    chance: "11.41%", // 79.92% / 7
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "ssg_08", "dezastre"),
    title: "SSG 08 | Dezastre",
    chance: "11.41%", // 79.92% / 7
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "xm1014", "irezumi"),
    title: "XM1014 | Irezumi",
    chance: "11.41%", // 79.92% / 7
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "nova", "dark_sigil"),
    title: "Nova | Dark Sigil",
    chance: "11.41%", // 79.92% / 7
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "ump-45", "motorized"),
    title: "UMP-45 | Motorized",
    chance: "11.41%", // 79.92% / 7
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "tec-9", "slag"),
    title: "Tec-9 | Slag",
    chance: "11.41%", // 79.92% / 7
    rarity: "mil-spec",
  },
];

const kilowattKnives = [
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Random Knife",
    chance: "0.26%", // Exceedingly Rare Special
    rarity: "gold",
  },
];

const KilowattPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(kilowattItems);
  const [shuffledKnives, setShuffledKnives] = useState(kilowattKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    // Shuffle the array only on the client side
    setShuffledItems(shuffleArray([...kilowattItems]));
    setShuffledKnives(shuffleArray([...kilowattKnives]));
  }, []); // Empty dependency array ensures this runs only after the component mounts

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="kilowatt"
      />
    </div>
  );
};

export default KilowattPage;
