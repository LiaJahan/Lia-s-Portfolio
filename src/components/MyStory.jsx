const MyStory = () => {
  return (
    <section id="mystory" className="section-container">
      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[4px] text-sm text-[var(--text-muted)] mb-4">
          About Me
        </p>

        <h2 className="section-title">
          My Story
        </h2>

        <div className="max-w-4xl">

          <p className="text-lg leading-9 text-[var(--text-muted)]">
            I'm Jesmoon Jahan Lia, a Frontend Developer and
            Computer Science graduate with a passion for building
            clean, user-friendly, and meaningful digital experiences.
          </p>

          <p className="text-lg leading-9 text-[var(--text-muted)] mt-8">
            My journey has never followed a single path. Over the years,
            I have worked as a private tutor, content writer, event planner,
            customer service professional, and team leader. These experiences
            strengthened my communication skills, adaptability, leadership,
            and ability to work with people from diverse backgrounds.
          </p>

          <p className="text-lg leading-9 text-[var(--text-muted)] mt-8">
            Today, I focus on Frontend Development while continuously
            expanding my knowledge of AI and modern web technologies.
            I enjoy turning ideas into interactive experiences that are
            both functional and visually appealing.
          </p>

          <p className="text-lg leading-9 text-[var(--text-muted)] mt-8">
            Beyond technology, I enjoy reading, traveling, photography,
            countryside driving, listening to podcasts and music, cooking,
            spending time with cats, decorating spaces, and creating henna
            designs. I believe curiosity is one of life's greatest gifts,
            and I try to bring that curiosity into everything I do. <br /> <br />
          </p>

        </div>

        {/* INFO SECTION */}

        <div className="mt-20 pt-10 border-t border-[var(--border)]">

          <div className="grid md:grid-cols-3 gap-10">

            {/* Education */}

            <div>
              <h3 className="heading-font text-4xl mb-4">
                <br /> Education
              </h3>

              <p className="font-medium">
                B.Sc. in Computer Science & Engineering
              </p>

              <p className="text-[var(--text-muted)] mt-2">
                IUBAT - International University of Business Agriculture and Technology
              </p>

              <p className="text-[var(--text-muted)]">
                CGPA: 3.60 / 4.00
              </p>
            </div>

            {/* Languages */}

            <div>
              <h3 className="heading-font text-4xl mb-4">
                <br /> Languages
              </h3>

              <ul className="space-y-2 text-[var(--text-muted)]">
                <li>Bengali (Native)</li>
                <li>English (IELTS Speaking 7)</li>
                <li>Swedish (Conversational) </li>
                <li>Hindi (Conversational fluency) </li>
                <li>Spanish (Beginner)</li>
              </ul>
            </div>

            {/* Location */}

            <div>
              <h3 className="heading-font text-4xl mb-4">
                <br /> Location
              </h3>

              <p className="text-[var(--text-muted)]">
                Madrid , Spain
              </p>

              <p className="text-[var(--text-muted)] mt-2">
                Open to remote opportunities and
                international collaboration.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MyStory;