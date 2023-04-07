import { useEffect } from "react";
import Aos from "aos";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";

import "./App.css";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <>
  <Header/>
  <main>
     <Hero/>
     <Services/>
     <Portfolio/>
     <Contact/>
  </main>
  <Footer/>
  </>
}

export default App;
