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

// Chroma2 kasasındaki item'ler
const chroma2Items = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("assault", "m4a1s", "Hyper_Beast"),
    title: "M4A1-S | Hyper Beast",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("smg", "mac-10", "Neon_Rider"),
    title: "Mac-10 | Neon Rider",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("assault", "galil-ar", "Eco"),
    title: "Galil AR | Eco",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("pistols", "five-seven", "Monkey_Business"),
    title: "Five-SeveN | Monkey Business",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("assault", "famas", "Djinn"),
    title: "Famas | Djinn",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.99
  {
    src: getImagePath("sniper", "awp", "Worm_God"),
    title: "AWP | Worm God",
    chance: "3.99%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "mag-7", "Heat"),
    title: "Mag-7 | Heat",
    chance: "3.99%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "cz75-auto", "Pole_Position"),
    title: "CZ75-Auto | Pole Position",
    chance: "3.99%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "ump-45", "Grand_Prix"),
    title: "UMP-45 | Grand Prix",
    chance: "3.99%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %13.32
  {
    src: getImagePath("assault", "ak47", "Elite_Build"),
    title: "AK-47 | Elite Build",
    chance: "13.32%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "desert_eagle", "Bronze_Deco"),
    title: "Desert Eagle | Bronze Deco",
    chance: "13.32%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "p250", "Valence"),
    title: "P250 | Valence",
    chance: "13.32%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mp7", "Armor_Core"),
    title: "MP7 | Armor Core",
    chance: "13.32%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "sawed-off", "Origami"),
    title: "Sawed-Off | Origami",
    chance: "13.32%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "negev", "Man-o'-war"),
    title: "Negev | Man-o'-war",
    chance: "13.32%",
    rarity: "mil-spec",
  },
];

const chroma2Knives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const Chroma2Page: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(chroma2Items);
  const [shuffledKnives, setShuffledKnives] = useState(chroma2Knives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...chroma2Items]));
    setShuffledKnives(shuffleArray([...chroma2Knives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Chroma2"
      />
    </div>
  );
};

export default Chroma2Page;
