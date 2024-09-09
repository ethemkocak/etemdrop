"use client";

import React from "react";
import CaseAnimation from "../components/CaseAnimation";

const KilowattPage: React.FC = () => {
  const kilowattItems = [
    {
      src: "inheritance.webp",
      title: "AK-47 | Inheritance",
      chance: "0.06%",
      rarity: "covert",
    },
    {
      src: "chrome_cannon.webp",
      title: "AWP | Chrome Cannon",
      chance: "0.11%",
      rarity: "covert",
    },
    {
      src: "black_lotus.webp",
      title: "M4A1-S | Black Lotus",
      chance: "0.17%",
      rarity: "classified",
    },
    {
      src: "olympus.webp",
      title: "Zeus x27 | Olympus",
      chance: "0.29%",
      rarity: "classified",
    },
    {
      src: "jawbreaker.webp",
      title: "USP-S | Jawbreaker",
      chance: "0.31%",
      rarity: "restricted",
    },
    {
      src: "block_18.webp",
      title: "Glock-18 | Block-18",
      chance: "0.47%",
      rarity: "restricted",
    },
    {
      src: "analog_input.webp",
      title: "Sawed-Off | Analog Input",
      chance: "0.54%",
      rarity: "restricted",
    },
    {
      src: "etch_lord.webp",
      title: "M4A4 | Etch Lord",
      chance: "0.58%",
      rarity: "restricted",
    },
    {
      src: "hybrid.webp",
      title: "Five-SeveN | Hybrid",
      chance: "0.58%",
      rarity: "mil-spec",
    },
    {
      src: "just_smile.webp",
      title: "MP7 | Just Smile",
      chance: "0.59%",
      rarity: "mil-spec",
    },
    {
      src: "light_box.webp",
      title: "MAC-10 | Light Box",
      chance: "0.73%",
      rarity: "mil-spec",
    },
    {
      src: "hideout.webp",
      title: "Dual Berettas | Hideout",
      chance: "0.84%",
      rarity: "mil-spec",
    },
    {
      src: "dezastre.webp",
      title: "SSG 08 | Dezastre",
      chance: "0.90%",
      rarity: "mil-spec",
    },
    {
      src: "irezumi.webp",
      title: "XM1014 | Irezumi",
      chance: "0.95%",
      rarity: "mil-spec",
    },
    {
      src: "dark_sigil.webp",
      title: "Nova | Dark Sigil",
      chance: "0.96%",
      rarity: "mil-spec",
    },
    {
      src: "motorized.webp",
      title: "UMP-45 | Motorized",
      chance: "0.98%",
      rarity: "mil-spec",
    },
    {
      src: "slag.webp",
      title: "Tec-9 | Slag",
      chance: "0.99%",
      rarity: "mil-spec",
    },
  ];

  const kilowattknife = [
    {
      src: "gold.webp",
      title: "Random Knife",
      chance: "0.26%",
      rarity: "gold",
    },
  ];

  return (
    <div>
      <CaseAnimation
        items={kilowattItems}
        knives={kilowattknife}
        caseName="kilowatt"
      />
    </div>
  );
};

export default KilowattPage;
