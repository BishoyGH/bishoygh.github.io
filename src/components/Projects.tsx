import { PROJECTS } from "@/data";

const Projects: React.FC = () => {
  return (
    <section className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <ul>
        {PROJECTS.map((project, idx) => (
          <li key={idx} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="mx-auto w-full lg:w-1/4">
              <img
                className="mb-6 aspect-video w-full rounded-lg object-cover"
                src={project.image.src}
                alt={project.title}
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
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
              <p className="mb-6 text-neutral-400">{project.description}</p>
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
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
