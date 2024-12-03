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
const dreamItems = [
  // Covert (Kırmızı): %0.32
  {
    src: getImagePath("assault", "ak47", "Nightwish"),
    title: "AK47 | Nightwish",
    chance: "0.32%",
    rarity: "covert",
  },
  {
    src: getImagePath("smg", "mp9", "Starlight_Protector"),
    title: "Mp9 | Starlight Protector",
    chance: "0.32%",
    rarity: "covert",
  },

  // Classified (Pembe): %1.07
  {
    src: getImagePath("assault", "famas", "Rapid_Eye_Movement"),
    title: "Famas | Rapid Eye Movement",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("pistols", "dual_berettas", "Melondrama"),
    title: "Dual Berettas | Melondrama",
    chance: "1.06%",
    rarity: "classified",
  },
  {
    src: getImagePath("smg", "mp7", "Abyssal_Apparition"),
    title: "MP7 | Abyssal Apparition",
    chance: "1.06%",
    rarity: "classified",
  },

  // Restricted (Mor): %3.19
  {
    src: getImagePath("assault", "m4a1s", "Night_Terror"),
    title: "M4A1-S | Night Terror",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("pistols", "usp-s", "Ticket_to_Hell"),
    title: "USP-S | Ticket to Hell",
    chance: "11.41%",
    rarity: "restricted",
  },
  {
    src: getImagePath("smg", "pp-bizon", "Space_Cat"),
    title: "PP-Bizon | Space Cat",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("heavy", "xm1014", "Zombie_Offensive"),
    title: "XM1014 | Zombie Offensive",
    chance: "3.19%",
    rarity: "restricted",
  },
  {
    src: getImagePath("sniper", "g3sg1", "Dream_Glade"),
    title: "G3SG1 | Dream Glade",
    chance: "3.19%",
    rarity: "restricted",
  },

  // Mil-Spec (Mavi): %11.41
  {
    src: getImagePath("pistols", "five-seven", "Scrawl"),
    title: "Five-Seven | Scrawl ",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("sniper", "scar-20", "Poultrygeist"),
    title: "SCAR-20 | Poultrygeist",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mac-10", "Ensnared"),
    title: "Mac-10 | Ensnared",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("smg", "mp5-sd", "Necro_Jr."),
    title: "Mp5-sd | Necro Jr.",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("heavy", "mag-7", "Foresight"),
    title: "Mag-7 | Foresight",
    chance: "11.41%",
    rarity: "mil-spec",
  },

  {
    src: getImagePath("heavy", "sawed-off", "Spirit_Board"),
    title: "Sawed Off | Spirit Board",
    chance: "11.41%",
    rarity: "mil-spec",
  },
  {
    src: getImagePath("pistols", "p2000", "Lifted_Spirits"),
    title: "p2000 | Lifted Spirits",
    chance: "11.41%",
    rarity: "mil-spec",
  },
];

const dreamKnives = [
  // Gold (Eldivenler): %0.26
  {
    src: getImagePath("knives", "random", "gold"),
    title: "Knives",
    chance: "0.26%",
    rarity: "gold",
  },
];

const DreamPage: React.FC = () => {
  const [shuffledItems, setShuffledItems] = useState(dreamItems);
  const [shuffledKnives, setShuffledKnives] = useState(dreamKnives);

  // Shuffle both arrays using Fisher-Yates algorithm
  useEffect(() => {
    setShuffledItems(shuffleArray([...dreamItems]));
    setShuffledKnives(shuffleArray([...dreamKnives]));
  }, []);

  return (
    <div>
      <CaseAnimation
        items={shuffledItems}
        knives={shuffledKnives}
        caseName="Dreams & Nightmares"
      />
    </div>
  );
};

export default DreamPage;
