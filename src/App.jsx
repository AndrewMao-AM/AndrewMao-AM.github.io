import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="main-content-col">
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
