
 import '../component.css/HomePage.css';

 function HomePage() {
     return (
         <div className="homepage-background">
             <div className="home-page-container">
                 <header className="homepage-header">
                     <h1 className="homepage-title">Visual Stories</h1>
                 </header>
                 <h2 className="homepage-subtitle">
                     Emotion Instinct Visualization
                 </h2>
                 <div className="flex justify-center"></div>
             </div>
         </div>
     );
 }
 
 export default HomePage;
 



/*This is the component with inline styles applyed to the elements*/
/*function HomePage() {
  const styles2 ={
    backgroundImage:  `url(${"https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
      
  };
    return  (
        
      <div style={styles2}>  
        <div className="home-page-container">
          <header className="flex justify-center text-7xl text-gray-300 font-serif">
            <h1 style={{ 
                  textShadow: "4px 4px 6px rgba(1, 1, 1, 1.7)"
                }}
            >
              Visual Stories
            </h1>
          </header>
            <h2 style={{ 
              background: "linear-gradient(to right, #66CDAA, #00FFFF, #00FF7F,  #7FFF00, #00FFFF, #66CDAA)", // Define the gradient
              WebkitBackgroundClip: "text", // Ensure compatibility with Webkit browsers
              color: "transparent", // Makes the text color transparent
              textShadow: "8px 8px 11px rgba(0, 0, 0, 0.7)",
             }} className="flex justify-center pb-48 text-4xl decoration-2 font-style: font-serif"
            >
            Emotion  Instinct  Visualization
            </h2>
            <div className="flex justify-center">  
            </div>
        </div>
      </div> 
     
       
    );
}

export default HomePage;*/


 