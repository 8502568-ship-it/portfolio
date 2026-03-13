const projects = [
  {
    title: "Chess Board",
    desc: "Interactive chess board built with React with drag and drop pieces.",
    tags: ["React", "JS", "CSS"],
    link: "#",
  },
  {
    title: "Personal Blog",
    desc: "Blog platform with markdown editor and tags.",
    tags: ["HTML", "CSS", "JS"],
    link: "#",
  },
  {
    title: "Todo App",
    desc: "Task manager with filtering and local storage.",
    tags: ["React", "LocalStorage"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="card">
            <h3 className="card-title">{p.title}</h3>
            <p className="card-desc">{p.desc}</p>
            <ul className="tags">
              {p.tags.map((t) => (
                <li key={t} className="tag">
                  {t}
                </li>
              ))}
            </ul>
            <a href={p.link} className="card-link">
              View project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
