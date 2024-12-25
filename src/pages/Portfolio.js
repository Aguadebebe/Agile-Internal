import React, { useRef, useEffect } from 'react';
import Codepens from "../codepens/codepen"
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
            <h1 ref={h1Ref}>Portfolio</h1>
            <Codepens />
          </div>
        </div>
    </div>
  );
}

export default Portfolio;
