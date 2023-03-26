import React from "react";
import StyledBackground from "./styles/Background.styled";
import sky from "../images/sky.jpg";

function Background() {
  return (
    <StyledBackground className="smooth-image-wrapper">
      <img
        src={sky}
        alt="sky"
      />
      {/* {!imageLoaded && <div className="smooth-preloader">LOADING</div>} */}
    </StyledBackground>
  );
}

export default Background;
