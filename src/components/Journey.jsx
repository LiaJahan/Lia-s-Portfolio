const journey = [
  {
    year: "2015",
    title: "Private Tutor",
    description:
      "Started teaching school students and later Mathematics to higher secondary and college-level learners.",
  },
  {
    year: "2017",
    title: "Planner & Designer",
    description:
      "Worked with event planning, client communication, and creative design.",
  },
  {
    year: "2019",
    title: "B.Sc. in CSE",
    description:
      "Graduated from IUBAT with a CGPA of 3.60 and a strong interest in technology.",
  },
  {
    year: "2020",
    title: "Content Writer",
    description:
      "Created Bengali digital content while developing communication and storytelling skills.",
  },
  {
    year: "2021",
    title: "New Country, New Experiences",
    description:
      "Moved to Sweden and embraced new cultures, challenges, and opportunities.",
  },
  {
    year: "2022",
    title: "Team Leader",
    description:
      "Began a leadership journey at Nordrest and learned how to guide and support teams.",
  },
  {
    year: "Today",
    title: "Frontend Developer",
    description:
      "Building modern web applications while expanding my technical expertise.",
  },
  {
    year: "Future",
    title: "AI & Web Development",
    description:
      "Continuing to explore technology, creativity, and innovation.",
  },
];

const Journey = () => {
  return (
    <section id="journey" className="section-container">
      <div className="max-w-5xl mx-auto">

        <p className="uppercase tracking-[4px] text-sm text-[var(--text-muted)] mb-4">
          Timeline
        </p>

        <h2 className="section-title">
          Journey So Far
        </h2>

        <div className="mt-20 space-y-16">

          {journey.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[120px_1fr] gap-8"
            >
              <div>
                <p className="text-[var(--accent)] font-medium">
                  {item.year}
                </p>
              </div>

              <div className="border-l border-[var(--border)] pl-8">
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-[var(--text-muted)] leading-8">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="mt-20 text-center">
          <p className="italic text-xl text-[var(--accent)]">
            A small explorer in this beautiful world.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Journey;