import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.15 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const sliderVariants = {
  initial: { x: "0%" },
  animate: {
    x: "-50%",
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "linear",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Khushi A M Nyamathi</motion.h2>
          <motion.h1 variants={textVariants}>
            AI Engineer & <span>Digital Creator</span>
          </motion.h1>
          <motion.p variants={textVariants} className="desc">
            Building immersive digital twin applications, intelligent
            interfaces, and real-time web experiences using React, Omniverse,
            and AI technologies.
          </motion.p>
          <motion.div variants={textVariants} className="buttons">
            <motion.a variants={textVariants} href="#projects">
              <button className="btn-primary">View My Work</button>
            </motion.a>
            <motion.a variants={textVariants} href="#contact">
              <button className="btn-outline">Contact Me</button>
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        AI Engineer · Digital Twins · Content Creator · Freelance Designer · AI
        Engineer · Digital Twins · Content Creator · Freelance Designer ·
      </motion.div>

      <div className="imageContainer">
        <img src="/myprofileportfolio.png" alt="Khushi" />
      </div>
    </div>
  );
};

export default Hero;
