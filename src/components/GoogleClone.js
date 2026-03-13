import { useState } from "react";

export default function GoogleClone() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) setSearched(true);
  }

  function handleReset() {
    setQuery("");
    setSearched(false);
  }

  if (searched) {
    return (
      <div className="g-results-page">
        <div className="g-results-header">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            className="g-logo-small"
            onClick={handleReset}
            style={{ cursor: "pointer" }}
          />
          <form className="g-results-form" onSubmit={handleSearch}>
            <input
              type="text"
              className="g-search-input-small"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="g-search-btn-small">
              🔍
            </button>
          </form>
        </div>
        <div className="g-results-body">
          <p className="g-results-count">
            Результатів: приблизно 1 230 000 000 (
            {(Math.random() * 0.5 + 0.3).toFixed(2)} сек.)
          </p>
          {[
            {
              title: `${query} — Вікіпедія`,
              url: "https://uk.wikipedia.org",
              desc: `${query} — це поняття яке широко використовується в різних галузях науки та техніки.`,
            },
            {
              title: `Що таке ${query}? Повний гід`,
              url: "https://example.com/guide",
              desc: `Дізнайтесь все про ${query}. Детальна стаття з прикладами, поясненнями та практичними порадами.`,
            },
            {
              title: `${query} - офіційний сайт`,
              url: `https://www.${query.toLowerCase().replace(/ /g, "")}.com`,
              desc: `Офіційна сторінка ${query}. Актуальна інформація, новини та оновлення.`,
            },
          ].map((r, i) => (
            <div key={i} className="g-result-item">
              <div className="g-result-url">{r.url}</div>
              <a href="#" className="g-result-title">
                {r.title}
              </a>
              <p className="g-result-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="g-root">
      {/* Header */}
      <table className="g-header-table">
        <tbody>
          <tr>
            <td className="g-header-left">
              <a href="#" className="g-header-link">
                Gmail
              </a>
              <a href="#" className="g-header-link">
                Зображення
              </a>
            </td>
            <td className="g-header-right">
              <button className="g-apps-btn">⊞</button>
              <button className="g-signin-btn">Увійти</button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Main */}
      <div className="g-main">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google"
          className="g-logo"
        />

        <form className="g-form" onSubmit={handleSearch}>
          <table className="g-search-table">
            <tbody>
              <tr>
                <td>
                  <div className="g-search-box">
                    <span className="g-search-icon">🔍</span>
                    <input
                      type="text"
                      className="g-input"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder=""
                    />
                    {query && (
                      <button
                        type="button"
                        className="g-clear-btn"
                        onClick={() => setQuery("")}
                      >
                        ✕
                      </button>
                    )}
                    <span className="g-mic-icon">🎤</span>
                    <span className="g-cam-icon">📷</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="g-buttons-row">
                  <button type="submit" className="g-btn">
                    Пошук Google
                  </button>
                  <button type="button" className="g-btn">
                    Мені пощастить
                  </button>
                </td>
              </tr>
              <tr>
                <td className="g-lang-row">
                  <span className="g-lang-text">Пропонується: </span>
                  <a href="#" className="g-lang-link">
                    English
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      {/* Footer */}
      <table className="g-footer-table">
        <tbody>
          <tr>
            <td className="g-footer-left">
              <span>Україна</span>
            </td>
            <td className="g-footer-right">
              <a href="#" className="g-footer-link">
                Реклама
              </a>
              <a href="#" className="g-footer-link">
                Бізнес
              </a>
              <a href="#" className="g-footer-link">
                Як працює пошук
              </a>
              <a href="#" className="g-footer-link">
                Конфіденційність
              </a>
              <a href="#" className="g-footer-link">
                Умови
              </a>
              <a href="#" className="g-footer-link">
                Налаштування
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
