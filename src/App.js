import React from "react";
import { styled} from "styled-components";
import { ThemeProvider, GlobalStyle} from "@react95/core";
import AppBar from "./components/AppBar";

const Wrapper = styled.div`
  background: rgba(0, 128, 128);
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const Heading = styled.h1`
  font-size: 48px;
`;

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider>
      <Wrapper>
       <Heading>AcadVault</Heading>
        <AppBar /> 
      </Wrapper>
    </ThemeProvider>
  </>
);

export default App;
