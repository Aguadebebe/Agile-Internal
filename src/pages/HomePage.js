import { BsYinYang } from "react-icons/bs";
import  IMG_0989 from "../images/IMG_0989.png";

function HomePage() {
    return  (
        <div>
          <header className="flex justify-center text-4xl text-green-400 font-serif">
           <h1>Agile Internal</h1>
          </header>
           <h2 className="flex justify-center text-sky-600">Meditation|Movement|coaching</h2>
          <div className="flex justify-center"> 
           <BsYinYang className="text-center bg-gradient-to-r from-cyan-500 to-blue-500 border-radius rounded-full text-9xl" />
          </div>
          <div className="flex justify-center transform scale-150 mt-60"> 
            <img src={IMG_0989} alt="Waterfall" />
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