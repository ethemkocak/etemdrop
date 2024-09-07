"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Item {
  src: string;
  title: string;
  chance: string;
}

interface CaseAnimationProps {
  items: Item[];
}

const CaseAnimation: React.FC<CaseAnimationProps> = ({ items }) => {
  const [isRolling, setIsRolling] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const startRoll = () => {
    setIsRolling(true);
    setSelectedItem(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * items.length);
      setSelectedItem(randomIndex);
      setIsRolling(false);
    }, 5000); // Animasyon süresi
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={startRoll}
        disabled={isRolling}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        {isRolling ? "Rolling..." : "Open Case"}
      </button>
      <div className="overflow-hidden relative">
        <motion.div
          className="flex"
          initial={{ x: "100%" }}
          animate={{ x: isRolling ? "-100%" : "0%" }}
          transition={{ duration: 5, ease: "linear" }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-48 h-48 flex-none p-2">
              <img
                src={`/cases/${item.src}`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <h2 className="text-center">{item.title}</h2>
              <p className="text-center text-gray-500">Chance: {item.chance}</p>
            </div>
          ))}
        </motion.div>
        {selectedItem !== null && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg text-center">
              <img
                src={`/cases/${items[selectedItem].src}`}
                alt={items[selectedItem].title}
                className="w-48 h-48 object-cover mx-auto"
              />
              <h2 className="text-lg font-bold">{items[selectedItem].title}</h2>
              <p className="text-gray-500">
                Chance: {items[selectedItem].chance}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseAnimation;
