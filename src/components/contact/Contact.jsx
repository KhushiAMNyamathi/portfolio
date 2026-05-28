import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="contact" id="contact" ref={ref}>
      <div className="wrapper">
        <motion.div
          className="content"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="label">Get In Touch</p>
          <h2>Let&apos;s Work Together</h2>
          <p className="sub">
           Whether it’s a website, AI application, creative design, or digital experience — I’d love to connect and collaborate.
          </p>

          <div className="links">
            <a
              href="https://www.linkedin.com/in/khushi-a-m-nyamathi-148a811b2/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <img src="/linkedin.png" alt="LinkedIn" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/_simplybubbly__"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <img src="/instagram.png" alt="Instagram" />
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@simplybubbly21"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <img src="/youtube.png" alt="YouTube" />
              YouTube
            </a>
          </div>

          <a href="mailto:your@email.com" className="email">
            ✉ khushiamnyamathi@gmail.com
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
