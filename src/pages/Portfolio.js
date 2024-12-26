import React, { useRef, useEffect } from 'react';
import Codepens from "../codepens/Codepens"
import Carousel from "../codepens/Carousel"
import Catalina_Sunset from "../images/Catalina_Sunset.png";
import '../component.css/Portfolio.css';  // Import the CSS file

function Portfolio() {
  const h1Ref = useRef(null);

  // Handle any additional effects (e.g., if you need to add more dynamic styles)
  useEffect(() => { 
    if (h1Ref.current) {
      // You can still apply dynamic styles here if needed, but it's now optional
      h1Ref.current.style.color = 'grey';  // Optional as it is defined in CSS
    }
  }, []);

  return (
    <div className="portfolio-background" style={{ backgroundImage: `url(${Catalina_Sunset})` }}>
      <div className="portfolio-container">
        <h1 className="portfolio-header" ref={h1Ref}>Portfolio</h1>
        <Codepens />
        <div className="carousel-container">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;



/* Portfolio component using inline styles*/
/*import React, { useRef, useEffect } from 'react';
import Codepens from "../codepens/Codepens"
import Carousel from "../codepens/Carousel"
import Catalina_Sunset from "../images/Catalina_Sunset.png";

function Portfolio() {

    const styles = {
        backgroundImage:  `url(${Catalina_Sunset})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      };

    const h1Ref = useRef(null);

    useEffect(() => { 
      if (h1Ref.current) {
       h1Ref.current.style.color = 'grey';
       h1Ref.current.style.fontSize = '130px';
       h1Ref.current.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.7)';
       // Optionally, add a stronger outline effect (using CSS outline)
       h1Ref.current.style.textShadow = '2px 2px 4px rgba(0,0,0,0.6), 0 0 25px rgba(255,255,255,0.8)';
    }
  }, []);

    
    
    
  return (
    <div> 
        <div style={styles}> 
          <div className="portfolio-container">
            <h1 style={{ marginTop: "800px" }} ref={h1Ref}>Portfolio</h1>
            <Codepens />
            <div style={{ 
                 marginTop: '30px' 
          }}>
             <Carousel />
           </div>

          </div>
        </div>
    </div>
  );
}

export default Portfolio;*/
