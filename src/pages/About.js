import Big_Sur_Horizon from "../images/Big_Sur_Horizon.png";

function About() {
    const styles3 ={
        backgroundImage: `url(${Big_Sur_Horizon})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };
    
    return (
    <div style={styles3} className="xs:scale-100 sm:scale-50 md:scale-100 lg:scale-100">
    <div className="about-container xs:scale-75 sm:scale-50 md:scale-100 lg:scale-100"> 
    <h1 className="text-3xl text-center text-white  font-style: italic">About Agile Internal</h1>
   <p className="text-lg text-center text-white pb-30 ">  Agile Internal combines movement, meditation, and coaching methodologies to deliver a powerful, transformational, and personalized wellness practice. 
    We operate from the belief that movement and meditation are medicine. 
    The coaching component of Agile Internal supplants the traditional role of the master-disciple relationship to provide clarity of, and alignment with, individual goals and purpose. 
    Training is designed to bring self-sufficiency in various levels of movement or meditation practice focused on each individual's personal path.

    The Agile Internal approach to training is a collaborative journey that embraces various movement modalities with Qigong as a core practice that informs meaningful, integrated movement. 
    This journey provides the tools for optimal health and personal development. 
    We are committed to helping individuals feel and be their best through combining time-tested practices with a modern, agile approach to training.
    </p>
    </div>
    </div>
    );
}

export default About;