export default function PageShell({ title, description, setPage, children }) {
  return (
    <div className="page-shell">
      <header className="page-shell__header">
        <div>
          <p className="page-shell__eyebrow">Лабораторний проєкт</p>
          <h1 className="page-shell__title">{title}</h1>
          <p className="page-shell__description">{description}</p>
        </div>

        <button
          type="button"
          className="page-shell__back"
          onClick={() => setPage("portfolio")}
        >
          ← На головну
        </button>
      </header>

      <main className="page-shell__content">
        <div className="page-shell__surface">{children}</div>
      </main>
    </div>
  );
}
