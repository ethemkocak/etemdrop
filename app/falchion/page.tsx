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

// Falchion kasasındaki item'ler
const falchionItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("sniper", "awp", "Hyper_Beast"),
    title: "AWP | Hyper Beast",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("assault", "ak47", "Aquamarine_Revenge"),
    title: "AK-47 | Aquamarine Revenge",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.06
  {
    src: getImagePath("smg", "mp7", "Nemesis"),
    title: "MP7 | Nemesis",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("assault", "sg553", "Cyrex"),
    title: "SG 553 | Cyrex",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("pistols", "cz75-auto", "Yellow_Jacket"),
    title: "CZ75-Auto | Yellow Jacket",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("assault", "m4a4", "Evil_Daimyo"),
    title: "M4A4 | Evil Daimyo",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "mp9", "Ruby_Poison_Dart"),
    title: "MP9 | Ruby Poison Dart",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("assault", "famas", "Neural_Net"),
    title: "Famas | Neural Net",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "p2000", "Handgun"),
    title: "P2000 | Handgun",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "negev", "Loudmouth"),
    title: "Negev | Loudmouth",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("pistols", "usp-s", "Torque"),
    title: "USP-S | Torque",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("assault", "galil-ar", "Rocket_Pop"),
    title: "Galil AR | Rocket Pop",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "glock18", "Bunsen_Burner"),
    title: "Glock-18 | Bunsen Burner",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "p90", "Elite_Build"),
    title: "P90 | Elite Build",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "ump-45", "Riot"),
    title: "UMP-45 | Riot",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "nova", "Ranger"),
    title: "Nova | Ranger",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const falchionKnives = [
  // Gold (Knives, Gloves): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const FalchionPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(falchionItems);
  const [shuffledKnives, setShuffledKnives] = useState(falchionKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...falchionItems]));
    setShuffledKnives(shuffleArray([...falchionKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Falchion"
      />
    </div>
  );
};

export default FalchionPage;
