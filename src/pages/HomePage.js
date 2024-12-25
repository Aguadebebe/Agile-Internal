
 


function HomePage() {
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
              background: "linear-gradient(to left, #7FFF00, #00ff7f)", // Define the gradient
              WebkitBackgroundClip: "text", // Ensure compatibility with Webkit browsers
              color: "transparent", // Makes the text color transparent
              textShadow: "3px 3px 5px rgba(0, 0, 0, 0.7)",
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

export default HomePage;


 