import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

const Technologies: React.FC = () => {
  return (
    <section className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoJavascript className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoTypescript className="text-7xl" />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
