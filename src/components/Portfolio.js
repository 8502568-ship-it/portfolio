import Nav from "./Nav";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const LAB_PAGES = [
  {
    key: "chess",
    title: "Шахи",
    description: "Інтерактивна шахівниця з ходами та скиданням гри.",
  },
  {
    key: "schedule",
    title: "Розклад",
    description: "Таблиця навчального розкладу в єдиному стилі.",
  },
  {
    key: "google",
    title: "Google clone",
    description: "Імітація домашньої сторінки пошуку Google.",
  },
  {
    key: "booking",
    title: "Booking form",
    description: "Форма бронювання з різними елементами введення.",
  },
  {
    key: "survey",
    title: "Survey",
    description: "Анкета студента з перевіркою полів.",
  },
  {
    key: "lists",
    title: "4.1 Lists",
    description: "Списки з можливістю змінювати колір виділення.",
  },
  {
    key: "calendar",
    title: "Calendar",
    description: "Календар із переходом між місяцями.",
  },
  {
    key: "youtube",
    title: "YouTube clone",
    description: "Відеострічка з модальним переглядачем.",
  },
  {
    key: "figma",
    title: "Figma layout",
    description: "Великий лендінг за макетом з Figma.",
  },
];

export default function Portfolio({ page, setPage }) {
  return (
    <div className="portfolio">
      <Nav page={page} setPage={setPage} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />

      <section className="labs-section" id="labs">
        <div className="labs-section__heading">
          <p className="sub-title">Shared project</p>
          <h2 className="section-title">Лабораторні роботи команди</h2>
          <p className="labs-section__text">
            Оберіть потрібну роботу, щоб відкрити її окрему сторінку.
          </p>
        </div>

        <div className="labs-grid">
          {LAB_PAGES.map((lab) => (
            <button
              key={lab.key}
              type="button"
              className="labs-card"
              onClick={() => setPage(lab.key)}
            >
              <span className="labs-card__tag">Лабораторна</span>
              <strong className="labs-card__title">{lab.title}</strong>
              <span className="labs-card__description">{lab.description}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
