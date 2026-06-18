import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="section-container min-h-[60vh] flex items-center justify-center">
        <h1 className="heading-font text-4xl">
          Project Not Found
        </h1>
      </section>
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
      "Real time customer support.",
      "User progress tracking.",
    ],
  };

  return (
    <section className="section-container py-24">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-4xl mb-20">
          <p className="uppercase tracking-[4px] text-sm text-[var(--text-muted)] mb-4">
            Featured Project
          </p>

          <h1 className="heading-font text-5xl md:text-7xl leading-tight mb-8">
            {project.name}
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-[var(--text-muted)]">
            {project.description} <br /><br />
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-24 overflow-hidden rounded-3xl">
          <img
            src={project.image}
            alt={project.name}
            className="w-full object-cover"
          /> <br /><br />
        </div>

        {/* Info */}
        <section className="py-12 border-y border-[var(--border)]">
          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <p className="text-sm text-[var(--text-muted)] mb-2">
                Role
              </p>

              <p className="text-xl font-medium">
                Frontend Developer
              </p> 
            </div>

            {/* <div>
              <br /><br />
              <p className="text-sm text-[var(--text-muted)] mb-2">
                Type
              </p>

              <p className="text-xl font-medium">
                Course Required Project
              </p>
            </div> */}

            <div>
              <p className="text-sm text-[var(--text-muted)] mb-2">
                Status
              </p>

              <p className="text-xl font-medium">
                Completed
              </p>
            </div>

          </div>
        </section>

        <br />

        {/* Links */}
        <section className="py-16 flex flex-wrap gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
          >
            View Live Site
          </a>

          
        </section>

        <br />

        {/* Technologies */}
        <section className="py-20 border-t border-[var(--border)]">
          <br /><h2 className="heading-font text-3xl md:text-4xl mb-10">
            Technologies Used
          </h2><br />

          <div className="flex flex-wrap gap-x-10 gap-y-4 text-lg">
            {project.tech.map((tech) => (
              <span key={tech}>
                {tech}
              </span>
            ))}
          </div>
          <br />
        </section>
<br />
        {/* Challenges */}
        <section className="py-20 border-t border-[var(--border)]">
         <br /> <h2 className="heading-font text-3xl md:text-4xl mb-14">
            Challenges Faced
          </h2>
<br />
          <div className="space-y-16">
            {challenges[id]?.map((item, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[100px_1fr] gap-8"
              >
                <span className="text-5xl md:text-6xl font-bold text-[var(--text-muted)]/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-lg leading-relaxed max-w-3xl">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <br />
        </section>
        {/* Future Improvements */}
        <section className="py-20 border-t border-[var(--border)]">
          <br /><h2 className="heading-font text-3xl md:text-4xl mb-14">
            Future Improvements
          </h2>

          <div className="space-y-10">
            {improvements[id]?.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6"
              >
                <span className="text-2xl">
                  →
                </span>

                <p className="text-lg leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div><br />
        </section>

        {/* Outcome */}
        <section className="py-20 border-t border-[var(--border)]">
         <br /> <h2 className="heading-font text-3xl md:text-4xl mb-10">
            Project Outcome
          </h2>

          <div className="max-w-4xl">
            <p className="text-lg md:text-xl leading-relaxed text-[var(--text-muted)]">
              This project strengthened my skills in React,
              responsive design, component architecture,
              API integration, and modern frontend development.
              It provided valuable experience in building a
              complete user-focused application from planning
              and design to deployment.
            </p>
          </div>
        </section>

      </div>
    </section>
  );
};

export default ProjectDetails;