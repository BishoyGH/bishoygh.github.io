import { PROJECTS } from "@/data";
import { CiGlobe } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <ul>
        {PROJECTS.map((project, idx) => (
          <li key={idx} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 1 + idx * 0.1 }}
              className="mx-auto w-full lg:w-1/4"
            >
              <img
                className="mb-6 aspect-video w-full rounded-lg object-fill"
                src={project.image.src}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 1 + idx * 0.1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">
                {project.title}
                {project?.comingSoon && (
                  <>
                    &nbsp;
                    <span className="text-nowrap rounded-full bg-purple-300 px-2 py-1 text-xs text-purple-950">
                      Coming Soon
                    </span>
                  </>
                )}
              </h3>
              <p
                className={cn(
                  "text-neutral-400",
                  project.url ? "mb-2" : "mb-6",
                )}
              >
                {project.description}
              </p>
              {project?.url && (
                <a
                  href={project.url}
                  target="_blank"
                  className="mb-6 inline-flex items-center gap-1 rounded-md border border-neutral-800 px-3 py-1 text-sm text-neutral-400"
                >
                  <CiGlobe />
                  Live Preview ↗
                </a>
              )}
              <ul className="flex flex-wrap gap-1">
                {project.technologies.map((tech, idx) => (
                  <li
                    key={idx}
                    className="rounded bg-purple-950 bg-opacity-50 px-2 py-1 text-sm tracking-tighter text-neutral-400"
                  >
                    {tech}
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

export default Projects;
