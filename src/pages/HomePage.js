
import Big_Sur_Waters_Edge from "../images/Big_Sur_Waters_Edge.png";


function HomePage() {
  const styles1 ={
    backgroundImage:  `url(${Big_Sur_Waters_Edge})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
      
  };
    return  (
        
      <div style={styles1} className="xs:scale-100 sm:scale-100 md:scale-100 lg:scale-100">  
        <div className="home-page-container">
          <header className="flex justify-center text-7xl text-black font-serif">
           <h1>Agile Internal</h1>
          </header>
           <h2 className="flex justify-center pb-48 text-4xl decoration-2 font-style: italic underline text-green-300">Meditation|Movement|coaching</h2>
          <div className="flex justify-center">  
          </div>
        </div>
      </div> 
     
       
    );
}

export default HomePage;


 