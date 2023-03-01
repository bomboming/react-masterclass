import Router from "./Router";
// import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  // const [isDark, setIsDark] = useState<boolean>(false);
  // const changeTheme = () => setIsDark((current) => !current);
  // const text = isDark === true ? "🌝" : "🌚";
  // const goToHome = () => window.location.replace("/");

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {/* <Header>
          <Toggle onClick={changeTheme}>{text}</Toggle>
          <Home onClick={goToHome}>🏠</Home>
        </Header> */}
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;
// const Header = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   padding: 0 20px 0 20px;
//   background-color: ${(props) => props.theme.bgColor};
//   border: none;
// `;

// const Toggle = styled.button`
//   background-color: ${(props) => props.theme.themeBg};
//   color: #ffffff;
//   border: none;
//   border-radius: 50%;
//   width: 60px;
//   height: 60px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 40px;
//   margin: 10px;
// `;

// const Home = styled.button`
//   background-color: tomato;
//   color: #ffffff;
//   border: none;
//   border-radius: 50%;
//   width: 60px;
//   height: 60px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 40px;
//   margin: 10px;
// `;

export default App;
