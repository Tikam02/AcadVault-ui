import React from "react";
import { ThemeProvider, GlobalStyle } from "@react95/core";
import styled from "styled-components";
import AppBar from "./components/AppBar";
import TreeStructure from "./components/TreeStructure";

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

const App = () => {
  return (
    <div>
      {<GlobalStyle />}
      {
        <ThemeProvider>
          <Wrapper>
            <Heading>AcadVault</Heading>
            <TreeStructure />
            <AppBar />
          </Wrapper>
        </ThemeProvider>
      }
    </div>
  );
};

export default App;
