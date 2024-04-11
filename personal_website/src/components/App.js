import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from './AboutMe';
import Home from './Home';
// import Footer from './Footer';
import { Route, Routes} from "react-router-dom";
import NavBar from './NavBar';
import Gallery from './Gallery';

class App extends React.Component {
    render() {
        return (
          <>
          <NavBar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutMe" element={<AboutMe />} />
              <Route path="/gallery" element={<Gallery/>}/>
            </Routes>
          </>
        );
    }
}


export default App;