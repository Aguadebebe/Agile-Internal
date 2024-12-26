
import React from 'react';
import '../component.css/Codepens.css'; // Import the CSS file

const Codepens = () => {
  const pens = [
    {
      title: "JPEG Import with Manipulation",
      url: "https://codepen.io/agua-1/pen/KwPNzRZ",
      image: "https://codepen.io/agua-1/pen/KwPNzRZ/image/large",
    },
    {
      title: "Figma Design",
      url: "https://codepen.io/agua-1/pen/JoPEwZN",
      image: "https://codepen.io/agua-1/pen/JoPEwZN/image/large",
    },
    {
      title: "Gradient Text",
      url: "https://codepen.io/agua-1/pen/mdjeeev",
      image: "https://codepen.io/agua-1/pen/mdjeeev/image/large",
    },
    {
      title: "Stars or Bubbles",
      url: "https://codepen.io/agua-1/pen/JjBKoJZ",
      image: "https://codepen.io/agua-1/pen/JjBKoJZ/image/large",
    },
  ];

  return (
    <div>
    <h1 
    style={{ 
        textAlign: "center", 
        fontSize: "3em", 
        color: "#778899", 
        textShadow: "3px 3px 5px rgba(1, 1, 1, 1.7)" }}
        >
    CodePen Projects
  </h1>
      {/*<h1 className="codepen-title">CodePen Projects</h1>*/}
      <div className="codepen-container">
        {pens.map((pen, index) => (
          <a
            key={index}
            href={pen.url}
            target="_blank"
            rel="noopener noreferrer"
            className="codepen-link"
          >
            <img
              src={pen.image}
              alt={pen.title}
              className="codepen-image"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Codepens;



/*const Codepens = () => {
    const pens = [
        {
            title: "JPEG Import with Manipulation",
            url: "https://codepen.io/agua-1/pen/KwPNzRZ",
            image: "https://codepen.io/agua-1/pen/KwPNzRZ/image/large",
          },
          {
            title: "Figma Design",
            url: "https://codepen.io/agua-1/pen/JoPEwZN",
            image: "https://codepen.io/agua-1/pen/JoPEwZN/image/large",
          },
          {
            title: "Gradient Text",
            url: "https://codepen.io/agua-1/pen/mdjeeev",
            image: "https://codepen.io/agua-1/pen/mdjeeev/image/large",
          },
          {
            title: "Stars or Bubbles",
            url: "https://codepen.io/agua-1/pen/JjBKoJZ",
            image: "https://codepen.io/agua-1/pen/JjBKoJZ/image/large",
          },
    ];
  
    return (
      <div>
        <h1 
          style={{ 
              textAlign: "center", 
              fontSize: "3em", 
              color: "#778899", 
              textShadow: "3px 3px 5px rgba(1, 1, 1, 1.7)" }}
              >
          CodePen Projects
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px"
          }}
        >
          {pens.map((pen, index) => (
            <a
              key={index}
              href={pen.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={pen.image}
                alt={pen.title}
                style={{ width: "300px", margin: "10px" }}
              />
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Codepens;*/
  