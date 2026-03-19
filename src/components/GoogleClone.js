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

  const results = [
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
  ];

  if (searched) {
    return (
      <table className="g-results-page" role="presentation">
        <tbody>
          <tr>
            <td className="g-results-header-cell">
              <table className="g-results-header" role="presentation">
                <tbody>
                  <tr>
                    <td className="g-results-header-logo">
                      <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                        alt="Google"
                        className="g-logo-small"
                        onClick={handleReset}
                      />
                    </td>
                    <td className="g-results-header-search">
                      <form onSubmit={handleSearch}>
                        <table className="g-results-form" role="presentation">
                          <tbody>
                            <tr>
                              <td className="g-results-input-cell">
                                <input
                                  type="text"
                                  className="g-search-input-small"
                                  value={query}
                                  onChange={(e) => setQuery(e.target.value)}
                                />
                              </td>
                              <td className="g-results-button-cell">
                                <button
                                  type="submit"
                                  className="g-search-btn-small"
                                >
                                  Пошук
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td className="g-results-body-cell">
              <table className="g-results-body" role="presentation">
                <tbody>
                  <tr>
                    <td className="g-results-gutter" />
                    <td className="g-results-content">
                      <table className="g-results-list" role="presentation">
                        <tbody>
                          <tr>
                            <td className="g-results-count">
                              Результатів: приблизно 1 230 000 000 (
                              {(Math.random() * 0.5 + 0.3).toFixed(2)} сек.)
                            </td>
                          </tr>
                          {results.map((r, i) => (
                            <tr key={i}>
                              <td className="g-result-item">
                                <span className="g-result-url">{r.url}</span>
                                <a
                                  href={r.url}
                                  className="g-result-title"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {r.title}
                                </a>
                                <span className="g-result-desc">{r.desc}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                    <td className="g-results-right-gap" />
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <table className="g-root" role="presentation">
      <tbody>
        <tr>
          <td className="g-home-header-cell">
            <table className="g-header-table" role="presentation">
              <tbody>
                <tr>
                  <td className="g-header-left">
                    <a href="https://mail.google.com" className="g-header-link">
                      Gmail
                    </a>
                    <a
                      href="https://images.google.com"
                      className="g-header-link"
                    >
                      Зображення
                    </a>
                  </td>
                  <td className="g-header-right">
                    <button className="g-apps-btn" type="button">
                      Apps
                    </button>
                    <button className="g-signin-btn" type="button">
                      Увійти
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td className="g-home-main-cell">
            <table className="g-main" role="presentation">
              <tbody>
                <tr>
                  <td className="g-main-spacer-left" />
                  <td className="g-main-content">
                    <table className="g-center-table" role="presentation">
                      <tbody>
                        <tr>
                          <td className="g-logo-cell">
                            <img
                              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                              alt="Google"
                              className="g-logo"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <form className="g-form" onSubmit={handleSearch}>
                              <table
                                className="g-search-table"
                                role="presentation"
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <table
                                        className="g-search-box"
                                        role="presentation"
                                      >
                                        <tbody>
                                          <tr>
                                            <td className="g-search-icon-cell">
                                              Q
                                            </td>
                                            <td className="g-input-cell">
                                              <input
                                                type="text"
                                                className="g-input"
                                                value={query}
                                                onChange={(e) =>
                                                  setQuery(e.target.value)
                                                }
                                              />
                                            </td>
                                            <td className="g-clear-cell">
                                              {query && (
                                                <button
                                                  type="button"
                                                  className="g-clear-btn"
                                                  onClick={() => setQuery("")}
                                                >
                                                  X
                                                </button>
                                              )}
                                            </td>
                                            <td className="g-mic-cell">Mic</td>
                                            <td className="g-cam-cell">Lens</td>
                                          </tr>
                                        </tbody>
                                      </table>
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
                                      <span className="g-lang-text">
                                        Пропонується:{" "}
                                      </span>
                                      <a
                                        href="https://www.google.com/?hl=en"
                                        className="g-lang-link"
                                      >
                                        English
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </form>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="g-main-spacer-right" />
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td className="g-home-footer-cell">
            <table className="g-footer-table" role="presentation">
              <tbody>
                <tr>
                  <td className="g-footer-left">
                    <span>Україна</span>
                  </td>
                  <td className="g-footer-right">
                    <a href="https://ads.google.com" className="g-footer-link">
                      Реклама
                    </a>
                    <a
                      href="https://www.google.com/services"
                      className="g-footer-link"
                    >
                      Бізнес
                    </a>
                    <a
                      href="https://www.google.com/search/howsearchworks"
                      className="g-footer-link"
                    >
                      Як працює пошук
                    </a>
                    <a
                      href="https://policies.google.com/privacy"
                      className="g-footer-link"
                    >
                      Конфіденційність
                    </a>
                    <a
                      href="https://policies.google.com/terms"
                      className="g-footer-link"
                    >
                      Умови
                    </a>
                    <a
                      href="https://www.google.com/preferences"
                      className="g-footer-link"
                    >
                      Налаштування
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
