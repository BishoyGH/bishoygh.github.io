import { HERO_CONTENT } from "@/data";
import heroPic from "@/assets/1.webp";

const Hero: React.FC = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text pb-4 text-6xl font-medium tracking-tight text-transparent md:text-7xl lg:mt-16">
              Bishoy Gamal
            </h1>
            <span className="bg-gradient-to-br from-neutral-300 via-neutral-400 to-neutral-500 bg-clip-text text-2xl tracking-tight text-transparent lg:ms-1">
              Frontend Web Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
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
