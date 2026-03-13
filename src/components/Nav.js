import { useState, useEffect } from "react";

export default function Nav({ page, setPage }) {
  const [active, setActive] = useState("about");

  useEffect(() => {
    if (page !== "portfolio") return;
    const sections = ["about", "skills", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [page]);

  return (
    <nav className="nav">
      <span className="nav-logo">{"<Portfolio />"}</span>

      <ul className="nav-links">
        <li>
          <a href="#about" className={active === "about" ? "nav-active" : ""}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" className={active === "skills" ? "nav-active" : ""}>
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={active === "projects" ? "nav-active" : ""}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={active === "contact" ? "nav-active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-switcher">
        <button
          onClick={() => setPage("portfolio")}
          className={
            page === "portfolio" ? "switcher-btn active" : "switcher-btn"
          }
        >
          Portfolio
        </button>
        <button
          onClick={() => setPage("chess")}
          className={page === "chess" ? "switcher-btn active" : "switcher-btn"}
        >
          ♟ Chess
        </button>
        <button
          onClick={() => setPage("schedule")}
          className={
            page === "schedule" ? "switcher-btn active" : "switcher-btn"
          }
        >
          📅 Розклад
        </button>
        <button
          onClick={() => setPage("google")}
          className={page === "google" ? "switcher-btn active" : "switcher-btn"}
        >
          🔍 Google
        </button>
      </div>
    </nav>
  );
}
