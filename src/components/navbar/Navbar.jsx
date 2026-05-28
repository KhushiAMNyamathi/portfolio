import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">

        <motion.span
          className="logo"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
         
        </motion.span>

        <motion.div
          className="navLinks"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </motion.div>

        <motion.div
          className="social"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="https://www.instagram.com/_simplybubbly__" target="_blank" rel="noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.youtube.com/@simplybubbly21" target="_blank" rel="noreferrer">
            <img src="/youtube.png" alt="YouTube" />
          </a>
          <a href="https://www.linkedin.com/in/khushi-a-m-nyamathi-148a811b2/" target="_blank" rel="noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Navbar;