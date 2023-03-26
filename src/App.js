import "./normalize.css";
import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import Header from "./components/Header";
import Form from "./components/form/Form";
import Summary from "./components/results/Summary";
import Graphs from "./components/results/Graphs";
import Container from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/GlobalStyles.styled";
import { FlexMain, FlexChild } from "./components/styles/Flex.styled";
import StyledBackground from "./components/styles/Background.styled";

function App() {
  const resultData = useSelector((state) => state.resultData);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledBackground />
      <Container>
        <Header />
        <FlexMain>
          <FlexChild>
            <Form />
          </FlexChild>
          {resultData?.dataToSimulate && (
            <FlexChild>
              {resultData?.dataToSimulate && <Summary />}
              <Graphs />
            </FlexChild>
          )}
        </FlexMain>
      </Container>
    </ThemeProvider>
  );
}

export default App;
