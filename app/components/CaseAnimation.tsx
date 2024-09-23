import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react";

interface CaseItem {
  src: string;
  title: string;
  chance: string;
  rarity?: string;
}

interface CaseAnimationProps {
  items: CaseItem[];
  knives: CaseItem[]; // Optional additional items like knives
  caseName: string;
}

// Function to map rarity to background colors
const getRarityColor = (rarity?: string) => {
  switch (rarity) {
    case "covert":
      return "bg-red-600"; // Kırmızı için Covert
    case "classified":
      return "bg-pink-600"; // Pembe için Classified
    case "restricted":
      return "bg-purple-600"; // Mor için Restricted
    case "mil-spec":
      return "bg-blue-600"; // Mavi için Mil-Spec
    case "gold":
      return "bg-yellow-400"; // Altın için Gold
    default:
      return "bg-gray-600"; // Varsayılan renk
  }
};

const CaseAnimation: React.FC<CaseAnimationProps> = ({ items, knives }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CaseItem | null>(null);
  const [showModal, setShowModal] = useState(false); // New state to control modal visibility
  const [key, setKey] = useState(0); // Key to force re-render
  const sliderRef = useRef<Slider>(null); // Reference for the Slider

  // Combine items and knives
  const allItems = [...items, ...knives];

  // Function to repeat the items multiple times
  const repeatedItems = [...Array(5)].flatMap(() => allItems); // Repeat 5 times

  // Number of visible slides
  const slidesToShow = 7;

  // Random item selection logic based on weighted chance
  const selectRandomItem = () => {
    const weightedItems = allItems.flatMap((item) => {
      const chance = parseFloat(item.chance.replace("%", ""));
      const entries = Math.round(chance * 1000); // Adjust multiplier for randomness
      return Array(entries).fill(item);
    });

    const randomIndex = Math.floor(Math.random() * weightedItems.length);
    return weightedItems[randomIndex];
  };

  // Handle start of animation
  const handleStartAnimation = () => {
    setIsSpinning(true);
    setShowModal(false); // Ensure modal is hidden at the start
    const randomItem = selectRandomItem();
    setSelectedItem(randomItem);

    // Find the index of the randomly selected item
    const randomItemIndex = allItems.indexOf(randomItem);

    // Calculate the index to stop the item in the center
    const targetIndex = randomItemIndex - Math.floor(slidesToShow / 2);

    // Set a timeout for the length of the animation
    setTimeout(() => {
      // Navigate the carousel to the targetIndex for center alignment
      sliderRef.current?.slickGoTo(targetIndex + allItems.length * 2); // Spins 3+ full rounds before stopping in the center
      setIsSpinning(false); // Mark animation as done
    }, 300); // Spin after 0.3 seconds
  };

  // Handle reset after unboxing the item
  const handleReset = () => {
    setKey(key + 1); // Change key to force re-render
    setIsSpinning(false);
    setSelectedItem(null); // Reset the selected item
    setShowModal(false); // Hide the modal
  };

  // React Slick settings
  const settings = {
    infinite: true, // Infinite scroll effect
    speed: 3500, // Speed of the animation in ms
    slidesToShow, // Number of visible items at a time
    slidesToScroll: 1, // Scroll one item at a time
    autoplay: false, // Don't autoplay until we click "Open Case"
    cssEase: "ease-in-out",
    arrows: false, // No navigation arrows needed
    draggable: false, // Disable dragging
    afterChange: () => setShowModal(true),
  };

  return (
    <div key={key} className="relative">
      <div className={`relative ${selectedItem ? "pointer-events-none" : ""}`}>
        {/* Slider component with custom settings */}
        <Slider {...settings} ref={sliderRef}>
          {repeatedItems.map((item, index) => (
            <div
              key={index}
              className={`p-2 ${getRarityColor(item.rarity)} rounded-lg`}
            >
              <img src={`${item.src}`} alt={item.title} />
              <p className="text-center text-white font-bold">{item.title}</p>
              <div className="text-center text-white">
                {item.rarity?.toUpperCase()}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Button to trigger the animation */}
      <button
        onClick={handleStartAnimation}
        className="text-white z-50"
        disabled={isSpinning}
      >
        {isSpinning ? "Spinning..." : "Open Case"}
      </button>
      <div className="w-full flex justify-center">
        <Icon icon={"ion:arrow-up-outline"} className="w-10 h-10 text-white" />
      </div>

      {/* Display the selected item after spinning */}
      {!isSpinning && showModal && selectedItem && (
        <>
          {/* Black overlay with opacity */}
          <div className="fixed inset-0 bg-black opacity-80 z-40"></div>

          {/* White modal content with no opacity */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="p-10 bg-white rounded-lg text-center">
              <h2 className="text-2xl font-bold">You won:</h2>
              <img
                src={`${selectedItem.src}`}
                alt={selectedItem.title}
                className="my-4"
              />
              <p className="text-lg">{selectedItem.title}</p>
              <p className="text-lg">{selectedItem.chance}</p>
              <button
                onClick={handleReset}
                className="bg-blue-500 text-white px-4 py-2 mt-4"
              >
                Try Again
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CaseAnimation;
