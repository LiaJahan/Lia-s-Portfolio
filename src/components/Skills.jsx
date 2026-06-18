const skillGroups = [
{
title: "Frontend",
skills: ["HTML5", "CSS3", "JavaScript", "React"],
},
{
title: "Database & Authentication",
skills: ["MongoDB", "MySQL", "Firebase"],
},
{
title: "Tools & Deployment",
skills: [
"Git",
"GitHub",
"Vercel",
"Netlify",
"Render",
"Figma",
],
},
{
title: "Additional",
skills: ["Python", "Microsoft Office"],
},
];

const Skills = () => {
return ( <section id="skills" className="section-container"> <div className="max-w-6xl mx-auto">
    <p className="uppercase tracking-[4px] text-sm text-[var(--text-muted)] !mb-4">
      Technical Skills
    </p>

    <h2 className="section-title">
      What I Work With
    </h2>

    <div className="space-y-10">

      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="
            !mt-4 grid
            md:grid-cols-[260px_1fr]
            gap-6
            md:gap-12
            pb-10
            border-b
            border-[var(--border)]
          "
        >
          <h3 className="heading-font text-2xl md:text-3xl">
            {group.title}
          </h3>

          <div className="flex flex-wrap gap-x-7 !mb-3 ">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="
                  text-lg
                  text-[var(--text-muted)]
                  transition-colors
                  duration-300
                  hover:text-[var(--text-primary)]
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

    </div>

  </div>
</section>

);
};

export default Skills;
