import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
