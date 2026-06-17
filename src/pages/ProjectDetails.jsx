import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="section-title">
            Project Not Found
          </h1>
        </div>
      </section>
    );
  }

  const challenges = {
    "book-courier": [
      "Implementing secure authentication and protected routes.",
      "Managing book delivery workflows efficiently.",
      "Building a responsive user experience across devices.",
    ],

    "paw-mart": [
      "Organizing and displaying product data efficiently.",
      "Creating an intuitive shopping experience.",
      "Maintaining consistent UI and performance.",
    ],

    "say-it-right": [
      "Structuring vocabulary content effectively.",
      "Presenting Bengali pronunciation clearly.",
      "Keeping the learning experience simple and engaging.",
    ],
  };

  const improvements = {
    "book-courier": [
      "Payment gateway integration.",
      "Real-time courier tracking.",
      "Admin analytics dashboard.",
    ],

    "paw-mart": [
      "Shopping cart and checkout functionality.",
      "Product reviews and ratings.",
      "Wishlist system.",
    ],

    "say-it-right": [
      "Audio pronunciation support.",
      "Vocabulary quizzes.",
      "User progress tracking.",
    ],
  };

  return (
    <section className="section-container">
      <div className="max-w-5xl mx-auto">

        {/* Banner Image */}

        <img
          src={project.image}
          alt={project.name}
          className="
            w-full
            rounded-[24px]
            shadow-lg
            mb-16
          "
        />

        {/* Title */}

        <p className="uppercase tracking-[4px] text-sm text-[var(--text-muted)] mb-4">
          Project Details
        </p>

        <h1 className="section-title">
          {project.name}
        </h1>

        <p className="text-lg text-[var(--text-muted)] leading-8 max-w-3xl">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="mt-20">
          <h2 className="heading-font text-4xl mb-8">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="
                  px-5
                  py-2
                  rounded-full
                  border
                  border-[var(--border)]
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}

        <div className="mt-20">
          <h2 className="heading-font text-4xl mb-8">
            Project Links
          </h2>

          <div className="flex flex-wrap gap-4">

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Live Project
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="outline-btn px-6 py-3"
            >
              GitHub Repository
            </a>

          </div>
        </div>

        {/* Challenges */}

        <div className="mt-20">
          <h2 className="heading-font text-4xl mb-8">
            Challenges Faced
          </h2>

          <ul className="space-y-4">
            {challenges[id]?.map((item, index) => (
              <li
                key={index}
                className="
                  text-[var(--text-muted)]
                  leading-8
                "
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Improvements */}

        <div className="mt-20">
          <h2 className="heading-font text-4xl mb-8">
            Future Improvements
          </h2>

          <ul className="space-y-4">
            {improvements[id]?.map((item, index) => (
              <li
                key={index}
                className="
                  text-[var(--text-muted)]
                  leading-8
                "
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;