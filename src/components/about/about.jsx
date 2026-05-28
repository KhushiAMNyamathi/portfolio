import "./about.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, staggerChildren: 0.15 },
  },
};

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="about" id="about" ref={ref}>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.p variants={variants} className="label">
            Who I Am
          </motion.p>
          <motion.h2 variants={variants}>About Me</motion.h2>
          <motion.p variants={variants} className="desc">
            I&apos;m Khushi A M Nyamathi — I work on React applications,
            AI-powered systems, and interactive web experiences while also
            exploring digital twin technologies and Omniverse workflows.
          </motion.p>
          <motion.p variants={variants} className="desc">
            Alongside development, I also work as a creative freelancer
            designing websites, logos, posters, and YouTube thumbnails for
           content creators.
          </motion.p>
          <motion.p variants={variants} className="desc">
            When I&apos;m not engineering, I&apos;m a content creator sharing my
            journey and inspiring others through YouTube and Instagram.
          </motion.p>
          <motion.div variants={variants} className="tagsWrapper">
            <motion.div
              className="tags"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[
                ...[
                  "React",
                  "AI / ML",
                  "Omniverse",
                  "Digital Twins",
                  "Python",
                  "Freelance Design",
                ],
                ...[
                  "React",
                  "AI / ML",
                  "Omniverse",
                  "Digital Twins",
                  "Python",
                  "Freelance Design",
                ],
              ].map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="imageContainer"
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <img src="/about.png" alt="About Khushi" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
