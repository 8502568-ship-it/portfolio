import Nav from "./Nav";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Portfolio({ page, setPage }) {
  return (
    <div className="portfolio">
      <Nav page={page} setPage={setPage} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
