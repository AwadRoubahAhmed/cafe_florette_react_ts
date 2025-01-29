import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container w-full flex justify-center items-center text-2xl font-bold">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <footer className="w-full bg-slate-900 text-white p-4">
        <p className="text-lg text-center">
          &copy; {new Date().getFullYear()} Florette Cafe. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
