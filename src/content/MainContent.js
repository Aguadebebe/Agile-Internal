import React from "react";
import Carousel from "../codepens/Carousel";
import Codepens from "../codepens/Codepens";

const MainContent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div>
         
        <Codepens />
      </div>
      <div style={{ marginTop: "50px" }}>
        <Carousel />
      </div>
    </div>
  );
};

export default MainContent;