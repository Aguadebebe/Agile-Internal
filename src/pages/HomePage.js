
 


function HomePage() {
  const styles2 ={
    backgroundImage:  `url(${"https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
      
  };
    return  (
        
      <div style={styles2}>  
        <div className="home-page-container">
          <header className="flex justify-center text-7xl text-gray-400 font-serif">
           <h1>Visual Stories</h1>
          </header>
           <h2 className="flex justify-center pb-48 text-4xl decoration-2 font-style: italic underline text-green-300">Emotion/Instinct/Visualization</h2>
          <div className="flex justify-center">  
          </div>
        </div>
      </div> 
     
       
    );
}

export default HomePage;


/** home page components.
 * about page
 * contact page.
 * json file for back end.
 * home page object data. each section will contain the data for that page.
 * In pages create Context for state.
 * 
*/