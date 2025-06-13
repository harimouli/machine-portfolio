import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";



type rolesTypes = string[];
const roles: rolesTypes = [
  "FullStackDeveloper",
  "Problem Solver",
  "SoftwareEngineer",
];

export const HeroIntro = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-slate-200 text-lg md:text-2xl lg:text-2xl leading-relaxed font-bold p-2 font-mono">
      Hello, I'm <span className="font-bold text-white">Mouli</span>. I'm a {" "}
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          className="text-blue-900 font-extra-bold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8 }}
          style={{ display: "inline-block", minWidth: "220px" }} 
        >
          {roles[index]}
        </motion.span> 
      </AnimatePresence>
      {" "} building web apps with <span className="text-white">React</span>{" "}
      <span className="text-white">Next.js</span> and <span className="text-white">Node.js</span> and consistently solving{" "}
      <span className="text-white">DSA problems</span>.
    </p>
  );
};
