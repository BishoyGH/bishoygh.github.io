import { HERO_CONTENT } from "@/data";
import heroPic from "@/assets/1.webp";
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay } },
});

const Hero: React.FC = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text pb-4 text-4xl font-black tracking-tight text-transparent sm:text-6xl sm:font-medium md:text-7xl lg:mt-16"
            >
              Bishoy Gamal
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-500 bg-clip-text text-2xl tracking-tight text-transparent max-[450px]:text-center max-[450px]:text-xl lg:ms-1"
            >
              Frontend Web Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={heroPic.src}
              alt="programmer shaping the future of the web"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
