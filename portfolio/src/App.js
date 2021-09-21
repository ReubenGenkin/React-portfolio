import React, { useState, useEffect, createContext } from 'react';
import Home from './components/Home'
import Navigation from './components/Navigation';
import Project from './components/Project';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'

function App(props) {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollPast, setScrollPast] = useState(false)

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      let topPosition = 200
      if (currentPosition > scrollTop) {
        // downscroll code
        setScrolling(false);
      
      } else {
        // upscroll code
        setScrolling(true);
      
      }
      if (window.pageYOffset > topPosition){
        setScrollPast(true)
      }  else {
        setScrollPast(false)
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
      
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop, scrollPast]);

  const [page, setPage] = useState('About');

  function renderPage() {
    //   if (page === "About") {
    //     return <About />;
    //   } else if (page === "Project") {
    //     return <Project />;
    //   } else if (page === "Contact") {
    //     return <Contact />
    //   } else if (page === "Resume") {
    //     return <Resume />
    //   }  }
    return (
      <div>
        <Home/>
        <About />
        <Project />
        <Resume />
        <Contact />
      </div>
    );
  }


  return (

    <main className="main">

      <Navigation setPage={setPage} scrolling={scrolling} setScrolling={setScrolling} setScrollTop={setScrollTop} scrollPast={scrollPast}></Navigation>

      {renderPage()}

      <Footer></Footer>

    </main>


  );

}

export default App;
