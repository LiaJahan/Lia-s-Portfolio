import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[4px] text-sm text-[var(--text-muted)] mb-4">
          Featured Work
        </p>

        <h2 className="section-title">
          Things I've Built
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project) => (
            <div
              key={project.id}
              className="card overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-semibold">
                  {project.name}
                </h3>

                <p className="mt-4 text-[var(--text-muted)]">
                  {project.description}
                </p>

                <Link
                  to={`/project/${project.id}`}
                  className="
                  inline-block
                  mt-6
                  primary-btn
                  "
                >
                  View Details
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;