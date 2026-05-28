import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/about";
import Services from "./components/services/Services";
import Projects from "./components/project/project";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>Built with ♥ by <span>Khushi A M Nyamathi</span> · 2025</p>
      </footer>
    </div>
  );
};

export default App;
