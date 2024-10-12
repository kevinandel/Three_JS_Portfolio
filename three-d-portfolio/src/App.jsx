import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Test from "./components/Test";
import Who from "./components/Who";
import Works from "./components/Works";
import styled, { createGlobalStyle } from "styled-components";

// Global CSS Reset to remove default margin and padding
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  color: white;
  height: 100vh;
  background: url("./images/bg.jpeg");
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Hero />
        <Who />
        <Works />
        <Contact />
        <Test />
      </Container>
    </>
  );
}

export default App;
