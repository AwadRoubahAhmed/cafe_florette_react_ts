import hero from "../assets/hero-bg.jpg";
import BtnGetStarted from "./BtnGetStarted";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="w-full min-h-[200px]">
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Hero"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <motion.h1
            animate={{ x: [null, 50, 0] }}
            className="text-5xl  font-bold leading-tight mb-4"
          >
            Welcome to Our Cafe Florette Website
          </motion.h1>
          <motion.p
            animate={{ x: [null, 50, 0] }}
            className="text-lg text-gray-300 mb-8 px-2"
          >
            Discover amazing features and services that await you.
          </motion.p>

          <BtnGetStarted />
        </div>
      </div>
    </section>
  );
};

export default Hero;
