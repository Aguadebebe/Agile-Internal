import React, { useRef, useEffect } from 'react';
 
import Catalina_Sunset from "../images/Catalina_Sunset.png";

function Schedule() {

    const styles ={
        backgroundImage:  `url(${Catalina_Sunset})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      };

    const h1Ref = useRef(null);

    useEffect(() => { 
      if (h1Ref.current) {
       h1Ref.current.style.color = 'grey';
      }
    }, []);
    
    
  return (

      <div> 
          
          <div style={styles}> 
            <div className="schedule-container">
             <h1 ref={h1Ref}>Portfolio</h1>
            </div>
          </div>
     </div>
  );
}

export default Schedule;
