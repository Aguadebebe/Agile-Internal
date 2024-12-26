import React, { useState } from "react";

const Carousel = () => {
  const images = [
    "https://images.pexels.com/photos/908644/pexels-photo-908644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1032654/pexels-photo-1032654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [leftHover, setLeftHover] = useState(0); // Independent hover state for left button
  const [rightHover, setRightHover] = useState(0); // Independent hover state for right button

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const styles = {
    container: {
      position: "relative",
      width: "100%",
      textAlign: "center",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px", // Space between buttons
    },
    button: {
      position: "relative",
      color: "#D8BFD8",
      fontWeight: "bold",
      fontFamily: "serif",
      fontSize: "20px",
      borderRadius: "10px",
      border: "2px solid black",
      textShadow: "2px 2px 4px rgba(1, 1, 1, 1.7)",
      padding: "10px 20px",
      cursor: "pointer",
      transition: "background-color 0.6s ease",
    },
    image: {
      maxWidth: "50%",
      height: "auto",
      display: "block",
      margin: "20px auto",
      borderRadius: "50px",
    },
  };

  return (
    <div style={styles.container}>
      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <button
          onMouseEnter={() => setLeftHover(100)} // Individual hover effect for left button
          onMouseLeave={() => setLeftHover(0)}
          onClick={handlePrev}
          style={{
            ...styles.button,
            background: `linear-gradient(90deg, #D8BFD8 ${leftHover}%, transparent 0)`,
          }}
        >
          Flip Left
        </button>
        <button
          onMouseEnter={() => setRightHover(100)} // Individual hover effect for right button
          onMouseLeave={() => setRightHover(0)}
          onClick={handleNext}
          style={{
            ...styles.button,
            background: `linear-gradient(90deg, #D8BFD8 ${rightHover}%, transparent 0)`,
          }}
        >
          Flip Right
        </button>
      </div>

      {/* Carousel Image */}
      <img
        src={images[currentIndex]}
        alt={`slide ${currentIndex + 1}`}
        style={styles.image}
      />
    </div>
  );
};

export default Carousel;
