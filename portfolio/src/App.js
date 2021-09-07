import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'

function App(props) {

  const [page, setPage] = useState('About');

  function renderPage() {
    if (page === "About") {
      return <About />;
    } else if (page === "Project") {
      return <Project />;
    } else if (page === "Contact") {
      return <Contact />
    } else if (page === "Resume") {
      return <Resume />
    }
  }

  return (

    <main className="main">

        <Navigation setPage={setPage}></Navigation>
        
        {renderPage()}

        <Footer></Footer>
      
    </main>


  );

}

export default App;
