import Hero from "../../components/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";

import Menu from "../Menu/Menu";
import { motion } from "motion/react";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="container"
    >
      <Hero />
      <About />
      <Menu />
      <Contact />
    </motion.div>
  );
};

export default Home;
