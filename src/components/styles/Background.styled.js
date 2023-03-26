import styled from "styled-components";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.jpg";

const StyledBackground = styled.div`
  background-image: url(${img1});
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-size: cover;

  @media (min-height: ${({ theme }) => theme.height.small}) {
    background-image: url(${img2});
  }

  @media (min-height: ${({ theme }) => theme.height.medium}) {
    background-image: url(${img3});
  }

  @media (min-height: ${({ theme }) => theme.large}) {
    background-image: url(${img4});
  }
`;

export default StyledBackground;
