const experiences = [
{
year: "2022 — 2026",
title: "Team Leader",
company: "Nordrest, Sweden",
description:
"Promoted from Summer Employee to Team Leader due to strong performance and leadership. Coordinated daily operations, supported onboarding, managed customer interactions, and maintained service quality.",
},
{
year: "2021",
title: "Summer Worker",
company: "Taste of India, Sweden",
description:
"Handled customer orders, coordinated with kitchen staff, and contributed to a positive dining experience for guests.",
},
{
year: "2020",
title: "Bengali Content Writer",
company: "mMarketing, Bangladesh",
description:
"Created, edited, and optimized Bengali digital content for online platforms.",
},
{
year: "2017 — 2019",
title: "Planner & Designer",
company: "Surprise Event Planner, Bangladesh",
description:
"Planned events, coordinated client communications, and contributed to creative event execution.",
},
{
year: "2015 — 2020",
title: "Private Tutor",
company: "Bangladesh",
description:
"Provided academic tutoring to school students and taught Mathematics to higher secondary and college-level learners.",
},
];

const Experience = () => {
return ( <section id="experience" className="section-container"> <div className="max-w-5xl mx-auto">

    <p className="uppercase tracking-[4px] text-sm text-[var(--text-muted)] mb-4">
      Professional Journey
    </p>

    <h2 className="section-title">
      Experience
    </h2>

    <div className="mt-20 relative">

      {/* Timeline Line */}

      <div
        className="
        absolute
        left-[88px]
        top-0
        bottom-0
        w-px
        bg-[var(--border)]
        hidden md:block
        "
      />

      <div className="space-y-20">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="
            grid
            md:grid-cols-[160px_1fr]
            gap-10
            relative
            "
          >

            {/* Year */}

            <div>
              <p
                className="
                text-sm
                tracking-wider
                uppercase
                text-[var(--accent)]
                font-medium
                "
              >
                {exp.year}
              </p>
            </div>

            {/* Content */}

            <div className="relative">

              <div
                className="
                hidden
                md:block
                absolute
                -left-[76px]
                top-2
                w-4
                h-4
                rounded-full
                bg-[var(--accent)]
                "
              />

              <h3 className="text-2xl font-semibold">
                {exp.title}
              </h3>

              <p className="mt-2 text-[var(--accent)]">
                {exp.company}
              </p>

              <p
                className="
                mt-6
                text-[var(--text-muted)]
                leading-8
                max-w-3xl
                "
              >
                {exp.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>

  </div>
</section>


);
};

export default Experience;
