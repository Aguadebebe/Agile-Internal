import React, { useState } from "react";

const Carousel = () => {
  
  const images = ["https://images.pexels.com/photos/908644/pexels-photo-908644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  "https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/1032654/pexels-photo-1032654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                 ];
  
  const [currentIndex, setCurrentIndex] = useState (0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
    prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };


  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
    prevIndex === images.length -1 ? 0 : prevIndex + 1
    );
 };

return (
 <div style={{ 
       position: "relative", 
       width: "100%", 
       textAlign: "center" 
    }}>
    <button onClick={handleNext}
              style={{ 
                position: "relative",
                color: "#D8BFD8", 
                fontWeight: "bold", 
                fontFamily: "serif",
                fontSize: "20px",
                left: -50,
                borderRadius: "10px", // Adjust the value for roundness
                border: "2px solid black", // Optional: Add a visible border 
                textShadow: "2px 2px 4px rgba(1, 1, 1, 1.7)"
    }}>        
    Flip Left
    </button>
    <button 
       onClick={handlePrev} 
       style={{ 
         position: "relative",
         color: "#D8BFD8", 
         fontWeight: "bold", 
         fontFamily: "serif",
         fontSize: "20px",
         left: 0,
         borderRadius: "10px", // Adjust the value for roundness
         border: "2px solid black", // Optional: Add a visible border 
         textShadow: "2px 2px 4px rgba(1, 1, 1, 1.7)"
 }}>
     Flip Right
    </button>
    <img 
      src={images[currentIndex]}
      alt={`slide ${currentIndex + 1}`}
      style={{
        maxWidth: "75%",
        height: "auto",
        display: "block",
        margin: "0 auto",
        borderRadius: "50px"

 }}/>
       
      
 </div>   
);
    
};

export default Carousel; 