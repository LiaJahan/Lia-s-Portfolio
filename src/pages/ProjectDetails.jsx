import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <>
        <section className="section-container min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-font text-5xl mb-6">
              Project Not Found
            </h1>

            <Link
              to="/"
              className="primary-btn"
            >
              Back to Portfolio
            </Link>
          </div>
        </section>
      </>
    );
  }

  const challenges = {
    "book-courier": [
      "Implementing secure authentication and protected routes.",
      "Managing database efficiently.",
      "Building a responsive user experience across devices.",
    ],

    "paw-mart": [
      "Organizing and displaying data efficiently.",
      "Creating an intuitive experience.",
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
      "Login system.",
      "Real-time customer support.",
      "User progress tracking.",
    ],
  };

  return (
    <>

      <section className="section-container pt-32">
        <div className="max-w-6xl mx-auto">

          {/* Back Button */}
<Link
  to="/"
  className="
  inline-flex
  items-center
  text-[var(--accent)]
  hover:-translate-x-1
  transition-all
  mb-10
  "
>
  ← Back to Portfolio
</Link>

          {/* Header */}

          <div className="max-w-4xl">
            <p className="!mt-4 uppercase tracking-[4px] text-sm text-[var(--text-muted)] ">
              Featured Project
            </p>

            <h1 className="heading-font text-5xl md:text-7xl leading-tight mb-8">
              {project.name}
            </h1>

            <p className="!mb-4 text-lg md:text-xl leading-relaxed text-[var(--text-muted)]">
              {project.description}
            </p>
          </div>

          {/* Image */}

          <div className=" overflow-hidden rounded-[32px]">
            <img
              src={project.image}
              alt={project.name}
              className="w-full object-cover"
            />
          </div>

          {/* Quick Info */}

          <section className=" border-y border-[var(--border)]">
            <div className="grid md:grid-cols-3 gap-10">

              <div>
                <p className="!mt-3  text-sm text-[var(--text-muted)] ">
                  Role
                </p>

                <p className="!mb-3 text-xl font-medium">
                  Frontend Developer
                </p>
              </div>

              <div>
                <p className="!mt-3 text-sm text-[var(--text-muted)] mb-2">
                  Status
                </p>

                <p className="!mb-3 text-xl font-medium">
                  Completed
                </p>
              </div>

              {/* <div>
                <p className="text-sm text-[var(--text-muted)] mb-2">
                  Project Type
                </p>

                <p className="text-xl font-medium">
                  Personal Project
                </p>
              </div> */}

            </div>
          </section>

          {/* Links */}

          <section className="py-10 flex flex-wrap">

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="!m-3 primary-btn p-4"
            >
              Live Project
            </a>

            {/* <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="outline-btn px-6 py-3"
            >
              GitHub Repository
            </a> */}

          </section>

          {/* Technologies */}

          <section className="py-20 border-t border-[var(--border)]">

            <h2 className="!mt-2 !mb-2 heading-font text-4xl">
              Technologies Used
            </h2>

            <div className="flex flex-wrap gap-4 !mb-4">

              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                  !px-4
                  !py-2
                  rounded-full
                  border
                  border-[var(--border)]
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

          </section>

          {/* Challenges */}

          <section className="py-20 border-t border-[var(--border)]">

            <h2 className="heading-font text-4xl !mt-4 !mb-4">
              Challenges Faced
            </h2>

            <div className="space-y-16">

              {challenges[id]?.map((item, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-[80px_1fr] gap-8"
                >
                  <span className="!mb-2 text-5xl font-bold text-[var(--text-muted)]/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className=" text-lg leading-relaxed max-w-3xl">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </section>

          {/* Improvements */}

          <section className="py-20 border-t border-[var(--border)]">

            <h2 className="heading-font text-4xl !mb-1 !mt-2">
              Future Improvements
            </h2>

            <div className="space-y-8 !mb-2">

              {improvements[id]?.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6"
                >
                  <span>→</span>

                  <p className="text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </section>

          {/* Outcome */}

          <section className="py-20 border-t border-[var(--border)]">

            <h2 className="heading-font text-4xl !mt-2 !mb-1">
              Project Outcome
            </h2>

            <div className="max-w-4xl">

              <p className="text-lg md:text-xl leading-relaxed text-[var(--text-muted)]">
                This project strengthened my skills in React,
                responsive design, component architecture,
                API integration, and modern frontend development.
                It provided valuable experience in building a complete
                user-focused application from planning and design
                to deployment.
              </p>

              {/* <div className="mt-16">
                <Link
                  to="/"
                  className="primary-btn"
                >
                  Back to Portfolio
                </Link>
              </div> */}

            </div>

          </section>

        </div>
      </section>
    </>
  );
};

export default ProjectDetails;