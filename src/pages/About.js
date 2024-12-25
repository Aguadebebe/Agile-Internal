/*import Big_Sur_Horizon from "../images/Big_Sur_Horizon.png";*/

function About() {
    const styles3 ={
        backgroundImage: `url(${"https://images.pexels.com/photos/2530911/pexels-photo-2530911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };
    
    return (
    <div style={styles3}>
    <div className="about-container"> 
    <h1  
    style={{ 
        background: "linear-gradient(to left, #00FF00, #EEE8AA, #A0522D, #00FF00)", // Define the gradient
        WebkitBackgroundClip: "text", // Ensure compatibility with Webkit browsers
        color: "transparent", // Makes the text color transparent
        /*textShadow: "3px 3px 7px rgba(0, 0, 0, 0.7)",*/

    }} 
    className="text-7xl text-center font-style: italic"
    >
    About Visual Stories</h1>
   <p style={{ 
        color: "#D2B48C",
        textShadow: "5px 5px 7px rgba(0, 0, 0, 0.7)"
    }} 
    className="text-3xl text-center text-white pb-30"
   >     
   Welcome! Development and WebDesign services to create solutions!.
    </p>
    </div>
    </div>
    );
}

export default About;