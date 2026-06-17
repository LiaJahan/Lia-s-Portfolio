const leaderships = [
{
title: "Jr. Vice President",
organization: "Debating Forum of IUBAT (DFI)",
description:
"Contributed to organizational activities, leadership initiatives, and community engagement projects.",
},
{
title: "Assistant Academic Manager",
organization: "IUBAT IT Society",
description:
"Supported academic activities, student engagement, and technology-focused programs within the university community.",
},
{
title: "Programming Contest Volunteer",
organization: "IUBAT IT Society",
description:
"Assisted in organizing programming competitions and supporting participants during events.",
},
{
title: "Executive Volunteer",
organization: "Idol Focus",
description:
"Participated in event management, coordination, communication, and volunteer activities.",
},
];

const Leadership = () => {
return ( <section id="leadership" className="section-container"> <div className="max-w-6xl mx-auto">

    <p className="uppercase tracking-[4px] text-sm text-[var(--text-muted)] mb-4">
      Leadership & Activities
    </p>

    <h2 className="section-title mb-20">
      Beyond Professional Work
    </h2>

    <div className="space-y-14">

      {leaderships.map((item, index) => (
        <div
          key={index}
          className="
            grid
            md:grid-cols-[280px_1fr]
            gap-6
            md:gap-12
            pb-12
            border-b
            border-[var(--border)]
          "
        >
          <div>
            <p className="text-sm uppercase tracking-[2px] text-[var(--accent)]">
              {item.organization}
            </p>
          </div>

          <div>
            <h3 className="heading-font text-2xl md:text-3xl mb-4">
              {item.title}
            </h3>

            <p className="text-[var(--text-muted)] leading-8 max-w-3xl">
              {item.description}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>

);
};

export default Leadership;
