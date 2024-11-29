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

// Fracture kasasındaki item'ler
const fractureItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("pistols", "desert_eagle", "Printstream"),
    title: "Desert Eagle | Printstream",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("assault", "ak47", "Legion_of_Anubis"),
    title: "AK-47 | Legion of Anubis",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("pistols", "glock18", "Vogue"),
    title: "Glock-18 | Vogue",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("assault", "m4a4", "Tooth_Fairy"),
    title: "M4A4 | Tooth_Fairy",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("heavy", "xm1014", "Entombed"),
    title: "XM1014 | Entombed",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("assault", "galil-ar", "Connexion"),
    title: "Galil-ar | Connexion",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mp5-sd", "Kitbash"),
    title: "MP5-sd | Kitbash",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "mag-7", "Monster_Call"),
    title: "MAG-7 | Monster Call",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mac-10", "Allure"),
    title: "Mac-10 | Allure",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "tec-9", "Brother"),
    title: "Tec-9 | Brother",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("pistols", "p250", "Cassette"),
    title: "P250 | Cassette",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "ssg_08", "Mainframe_001"),
    title: "SSG-08 | Mainframe 001",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "sg553", "Ol' Rusty"),
    title: "SSG 553 | Ol' Rusty",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "p2000", "Gnarled"),
    title: "P2000 | Gnarled",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "pp-bizon", "Runic"),
    title: "PP-Bizon | Runic",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "negev", "Ultralight"),
    title: "Negev | Ultralight",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "p90", "Freight"),
    title: "P90 | Freight",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const fractureKnives = [
  // Gold (Eldivenler): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const FracturePage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(fractureItems);
  const [shuffledKnives, setShuffledKnives] = useState(fractureKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...fractureItems]));
    setShuffledKnives(shuffleArray([...fractureKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Fracture"
      />
    </div>
  );
};

export default FracturePage;
