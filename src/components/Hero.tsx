import hero from "../assets/hero-bg.jpg";
import BtnGetStarted from "./BtnGetStarted";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className=" w-full min-h-[200px]">
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 min-h-[500px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Hero"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <div className="relative  my-32 mx-5 md:mx-0 z-10 flex flex-col justify-center items-center h-full text-center text-gray-300">
          <motion.h1
            animate={{ x: [null, 50, 0] }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 "
          >
            Welcome to Our Cafe Florette Website
          </motion.h1>
          <motion.p
            animate={{ x: [null, 50, 0] }}
            className="text-lg mb-8 px-2"
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
