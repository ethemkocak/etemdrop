import React, { useState } from "react";
import styles from "../styles/CaseAnimation.module.css";

interface CaseItem {
  src: string;
  title: string;
  chance: string;
  rarity?: string; // Added rarity
}

interface CaseAnimationProps {
  items: CaseItem[];
  knives: CaseItem[]; // Added knives for random knife
  caseName: string;
}

const CaseAnimation: React.FC<CaseAnimationProps> = ({
  items,
  knives,
  caseName,
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CaseItem | null>(null);
  const [animationClass, setAnimationClass] = useState("");

  // Helper function to determine background color based on rarity
  const getBackgroundColor = (rarity: string) => {
    switch (rarity) {
      case "mil-spec":
        return "#4b69ff"; // Blue
      case "restricted":
        return "#8847ff"; // Purple
      case "classified":
        return "#d32ce6"; // Pink
      case "covert":
        return "#eb4b4b"; // Red
      default:
        return "#ccc"; // Default gray
    }
  };

  // Combine items and knives
  const allItems = [...items, ...knives];

  // Realistic random selection based on chance
  const selectRandomItem = () => {
    const weightedItems = allItems.flatMap((item) => {
      const chance = parseFloat(item.chance.replace("%", ""));
      const entries = Math.round(chance * 1000); // Adjust multiplier for better randomness
      return Array(entries).fill(item);
    });

    const randomIndex = Math.floor(Math.random() * weightedItems.length);
    return weightedItems[randomIndex];
  };

  const handleStartAnimation = () => {
    setIsSpinning(true);
    setAnimationClass(styles.slide); // Start the sliding animation

    setTimeout(() => {
      const randomItem = selectRandomItem();
      setSelectedItem(randomItem);
      setAnimationClass(""); // Stop animation
      setIsSpinning(false);
    }, 3000); // Duration of the animation (3 seconds in this case)
  };

  return (
    <div className={styles.container}>
      <div className={styles.caseContainer}>
        {/* Add sliding items */}
        <div className={`${styles.items} ${animationClass}`}>
          {allItems.map((item, index) => (
            <div
              key={index}
              className={styles.item}
              style={{ backgroundColor: getBackgroundColor(item.rarity || "") }}
            >
              <img
                src={`/${caseName}/${item.src}`}
                alt={item.title}
                className={styles.itemImage}
              />
              <p>{item.title}</p>
              <div className={styles.rarityBanner}>
                {item.rarity?.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Central pointer/indicator */}
      <div className={styles.pointer}></div>

      {/* Button to trigger the animation */}
      <button
        onClick={handleStartAnimation}
        className={styles.spinButton}
        disabled={isSpinning}
      >
        {isSpinning ? "Spinning..." : "Open Case"}
      </button>

      {/* Display the selected item after spinning */}
      {selectedItem && (
        <div className={styles.selectedItem}>
          <h2>You won:</h2>
          <img
            src={`/${caseName}/${selectedItem.src}`}
            alt={selectedItem.title}
            className={styles.selectedImage}
          />
          <p>{selectedItem.title}</p>
          <p>{selectedItem.chance}</p>
        </div>
      )}
    </div>
  );
};

export default CaseAnimation;
