import { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Container } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Create MUI theme with dark/light mode
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  // Function to toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures global styles match theme */}
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <Container>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </Container>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}
