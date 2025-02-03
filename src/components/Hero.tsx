import hero from "../assets/hero-bg.jpg";
import BtnGetStarted from "./BtnGetStarted";

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
          <h1 className="text-5xl  font-bold leading-tight mb-4">
            Welcome to Our Cafe Florette Website
          </h1>
          <p className="text-lg text-gray-300 mb-8 px-2">
            Discover amazing features and services that await you.
          </p>

          <BtnGetStarted />

          {/* <button
            onClick={() => navigate("Menu")}
            type="button"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
            aria-label="Learn more about us"
          >
            Get Started
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
