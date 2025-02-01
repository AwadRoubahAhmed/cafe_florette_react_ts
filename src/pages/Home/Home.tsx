import Hero from "../../components/Hero";
import RecipeDetails from "../../components/RecipeDetails";
import About from "../About/About";
import Contact from "../Contact/Contact";

import Menu from "../Menu/Menu";

const Home = () => {
  return (
    <div className="container flex-col">
      <Hero />
      <About />
      <Menu />
      <RecipeDetails />
      <Contact />
    </div>
  );
};

export default Home;
