import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import original from "react95/dist/themes/original";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import AppBar from "./components/AppBar";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

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
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Wrapper>
        <AppBar />
        <Heading>AcadVault</Heading>
      </Wrapper>
    </ThemeProvider>
  </>
);

export default App;
