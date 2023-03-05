import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import { Link,BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <NavBar/>
      <AboutUs/>
      {/* <Testimonials/> */}
      <Router>
      <Routes>
      </Routes>
    </Router>
    <div className="App">
      <Card heading="First Card" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." link="https://github.com/" />
      <Card heading="Second Card" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." link="https://www.cricbuzz.com/"/>
      <Card heading="Third Card" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." />
      <Card heading="Fourth Card" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." />
      <Card heading="Fifth Card" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." />
      <Card heading="Sixth Card" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." />
    </div>
    <Contact/>
      <Footer/>
    </>
  );
}

export default App;
