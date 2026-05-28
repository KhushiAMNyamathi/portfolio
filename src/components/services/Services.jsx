import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "🤖",
    title: "AI / ML Development",
    desc: "Building AI-powered applications and intelligent digital experiences using modern technologies.",
  },
  {
    icon: "💻",
    title: "Website Development",
    desc: "Building responsive and modern websites with interactive UI and smooth user experiences using React.",
  },
  {
    icon: "🎬",
    title: "Content Creation",
    desc: "Creating travel videos and relatable social media content for YouTube and Instagram.",
  },
  {
    icon: "🎨",
    title: "Freelance Design",
    desc: "Designing logos, posters, and full websites for brands and creators looking for a distinctive, modern identity.",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="services" id="services" ref={ref}>
      <div className="wrapper">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="label">What I Do</p>
          <h2>Services</h2>
          <p className="sub">
            Building AI applications, modern websites, and creative digital
            designs.
          </p>
        </motion.div>

        <div className="grid">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="card"
              custom={i}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
