import Hero from "../../components/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";

import Menu from "../Menu/Menu";

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <About />
      <Menu />
      <Contact />
    </div>
  );
};

export default Home;
