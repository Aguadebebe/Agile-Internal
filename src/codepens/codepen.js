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
    ];
  
    return (
      <div>
        <h1 style={{ textAlign: "center", fontSize: "3em", color: "green", textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)" }}>CodePen Projects</h1>
        <div>
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
  
  export default Codepens;
  