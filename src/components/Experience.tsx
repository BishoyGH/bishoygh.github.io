import { EXPERIENCES } from "@/data";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <ul>
        {EXPERIENCES.map((exp, idx) => (
          <li key={idx} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 + idx * 0.1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{exp.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 + idx * 0.1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">
                {exp.role} -{" "}
                <span className="text-sm text-purple-100">{exp.company}</span>
              </h3>
              <ul className="m-4 text-neutral-400">
                {exp.description.map((d, idx) => (
                  <li key={idx} className="list-disc text-sm tracking-tight">
                    {d}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-1">
                {exp.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="rounded bg-purple-950 bg-opacity-50 px-2 py-1 text-sm tracking-tighter text-neutral-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
