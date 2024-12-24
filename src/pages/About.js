import Big_Sur_Horizon from "../images/Big_Sur_Horizon.png";

function About() {
    const styles3 ={
        backgroundImage: `url(${Big_Sur_Horizon})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };
    
    return (
    <div style={styles3}>
    <div className="about-container"> 
    <h1 className="text-3xl text-center text-white  font-style: italic">About Visual Stories</h1>
   <p className="text-lg text-center text-white pb-30">     Welcome! Here are a list of services that will serve your software/Webdesign needs well.
    </p>
    </div>
    </div>
    );
}

export default About;