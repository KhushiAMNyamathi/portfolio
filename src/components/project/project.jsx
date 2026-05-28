import "./project.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "AI-Powered Interface",
    desc: "Built an intelligent React application with AI-powered features for interactive user experiences and smart responses.",
    stack: ["React", "Python", "TensorFlow"],
    link: "#",
    icon: "🤖",
    gradient: "linear-gradient(135deg, #1a1a4e, #3b1f6e, #6366f120)",
    floatingIcons: ["⚡", "🧠", "💡"],
  },
  {
    title: "Digital Twin Exploration",
    desc: "Currently learning and exploring digital twin concepts, realtime simulation, and immersive 3D environments using NVIDIA Omniverse.",
    stack: ["Omniverse", "Python", "Open USD", "React"],
    link: "#",
    icon: "🌐",
    gradient: "linear-gradient(135deg, #0d2b45, #1a4a6e, #a855f720)",
    floatingIcons: ["🔷", "📡", "🔬"],
  },
  {
    title: "Creative Design Projects",
    desc: "Designed posters, logos, and YouTube thumbnails for social media creators and personal freelance projects.",
    stack: ["Canva", "Adobe Photoshop", "Design Tools"],
    link: "#",
    icon: "🎨",
    gradient: "linear-gradient(135deg, #2d1a4e, #4e1a3b, #f472b620)",
    floatingIcons: ["✏️", "🖼️", "✨"],
  },
];

const floatVariants = {
  animate: (i) => ({
    y: [0, -10, 0],
    opacity: [0.4, 0.8, 0.4],
    transition: {
      duration: 2.5 + i * 0.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.4,
    },
  }),
};

const Projects = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="projects" id="projects" ref={ref}>
      <div className="wrapper">
        <motion.div
          className="header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="label">My Work</p>
          <h2>Projects</h2>
          <p className="sub">
            A selection of things I&apos;ve built — from AI tools to immersive
            3D environments.
          </p>
        </motion.div>

        <div className="grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="card"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="thumb" style={{ background: p.gradient }}>
                {/* Floating background icons */}
                {p.floatingIcons.map((icon, j) => (
                  <motion.span
                    key={j}
                    className="floatingIcon"
                    custom={j}
                    variants={floatVariants}
                    animate="animate"
                    style={{ left: `${20 + j * 28}%`, top: `${15 + j * 15}%` }}
                  >
                    {icon}
                  </motion.span>
                ))}

                {/* Main center icon */}
                <motion.div
                  className="mainIcon"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {p.icon}
                </motion.div>

                {/* Hover overlay */}
                <div className="overlay">
                  <a href={p.link} target="_blank" rel="noreferrer">
                    View Project →
                  </a>
                </div>
              </div>

              <div className="info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="stack">
                  {p.stack.map((s) => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;