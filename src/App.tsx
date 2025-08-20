import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Menu from "./pages/Menu/Menu";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <div className="mx-auto px-4 bg-gray-200">
      <Navbar />
      <div className="container w-full flex justify-center items-center text-2xl font-bold">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="Menu/:recipeId" element={<RecipeDetails />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
