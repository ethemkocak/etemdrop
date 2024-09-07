"use client";

import React from "react";
import CaseAnimation from "../components/CaseAnimation";

const KilowattPage: React.FC = () => {
  const items = [
    {
      src: "ak_47_inheritance.png",
      title: "AK-47 | Inheritance",
      chance: "0.06%",
    },
    {
      src: "awp_chrome_cannon.png",
      title: "AWP | Chrome Cannon",
      chance: "0.11%",
    },
    {
      src: "m4a1s_black_lotus.png",
      title: "M4A1-S | Black Lotus",
      chance: "0.17%",
    },
    {
      src: "zeus_x27_olympus.png",
      title: "Zeus x27 | Olympus",
      chance: "0.29%",
    },
    {
      src: "usp_s_jawbreaker.png",
      title: "USP-S | Jawbreaker",
      chance: "0.31%",
    },
    {
      src: "glock_18_block_18.png",
      title: "Glock-18 | Block-18",
      chance: "0.47%",
    },
    {
      src: "sawed_off_analog_input.png",
      title: "Sawed-Off | Analog Input",
      chance: "0.54%",
    },
    { src: "m4a4_etch_lord.png", title: "M4A4 | Etch Lord", chance: "0.58%" },
    {
      src: "five_seven_hybrid.png",
      title: "Five-SeveN | Hybrid",
      chance: "0.58%",
    },
    { src: "mp7_just_smile.png", title: "MP7 | Just Smile", chance: "0.59%" },
    {
      src: "mac_10_light_box.png",
      title: "MAC-10 | Light Box",
      chance: "0.73%",
    },
    {
      src: "dual_berettas_hideout.png",
      title: "Dual Berettas | Hideout",
      chance: "0.84%",
    },
    { src: "ssg_08_dezastre.png", title: "SSG 08 | Dezastre", chance: "0.90%" },
    { src: "xm1014_irezumi.png", title: "XM1014 | Irezumi", chance: "0.95%" },
    { src: "nova_dark_sigil.png", title: "Nova | Dark Sigil", chance: "0.96%" },
    {
      src: "ump_45_motorized.png",
      title: "UMP-45 | Motorized",
      chance: "0.98%",
    },
    { src: "tec_9_slag.png", title: "Tec-9 | Slag", chance: "0.99%" },
  ];

  return (
    <div>
      <h1>Kilowatt Case</h1>
      <CaseAnimation items={items} />
    </div>
  );
};

export default KilowattPage;
