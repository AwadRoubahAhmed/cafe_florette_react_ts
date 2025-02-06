import img from "../../assets/img.png";
import { motion } from "motion/react";

const About = () => {
  return (
    <section className="min-h-[200px] bg-gray-100 rounded-lg py-4">
      <div className="container max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 bg-gray-200 p-4 mt-6 shadow-2xl rounded-md">
          <div className="max-w-lg">
            <motion.h2
              animate={{ x: [null, 50, 0] }}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              About Us
            </motion.h2>
            <motion.p
              animate={{ x: [null, 50, 0] }}
              className="mt-4 text-gray-600 text-lg"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et
              magna quis elit efficitur consequat. Mauris eleifend velit a
              pretium iaculis. Donec sagittis velit et magna euismod, vel
              aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum
              arcu volutpat vel.
            </motion.p>
            <motion.div animate={{ x: [null, 50, 0] }} className="mt-8">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </a>
            </motion.div>
          </div>
          <div className="mt-12 md:mt-0">
            <motion.img
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              src={img}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
