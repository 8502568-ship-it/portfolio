import { useState } from "react";
import "../styles/figma-layout.css";

// ─── Placeholder image URLs (replace with real assets) ───────────────────────
const HERO_IMG =
  "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1600&q=80";
const CABIN_1 =
  "https://images.unsplash.com/photo-1599423300746-b62533397364?w=600&q=80";
const CABIN_2 =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80";
const CABIN_3 =
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80";
const CABIN_4 =
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80";
const COUPLE_IMG =
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80";

const NAV_LINKS = [
  "Головна",
  "Про нас",
  "Оселі",
  "Галерея",
  "Відгуки",
  "Контакти",
];

const CABINS = [
  {
    id: 1,
    title: "Карпатська садиба «Затишок»",
    location: "Яремче, Карпати",
    price: "2 400",
    guests: 6,
    rooms: 3,
    img: CABIN_1,
    rating: 4.9,
    reviews: 128,
  },
  {
    id: 2,
    title: "Котедж «Смерека»",
    location: "Буковель, Карпати",
    price: "3 100",
    guests: 8,
    rooms: 4,
    img: CABIN_2,
    rating: 4.8,
    reviews: 94,
  },
  {
    id: 3,
    title: "Садиба «Лісова казка»",
    location: "Славське, Карпати",
    price: "1 800",
    guests: 4,
    rooms: 2,
    img: CABIN_3,
    rating: 5.0,
    reviews: 61,
  },
  {
    id: 4,
    title: "Вілла «Гірська тиша»",
    location: "Косів, Гуцульщина",
    price: "4 200",
    guests: 10,
    rooms: 5,
    img: CABIN_4,
    rating: 4.7,
    reviews: 43,
  },
];

const TESTIMONIALS = [
  {
    name: "Олена Коваль",
    city: "Київ",
    text: "Неймовірне місце! Природа, тиша, чисте повітря. Повернемось обов'язково.",
    stars: 5,
  },
  {
    name: "Роман Петренко",
    city: "Львів",
    text: "Чудовий відпочинок з сім'єю. Котедж відповідає опису на 100%. Дякуємо!",
    stars: 5,
  },
  {
    name: "Аліна Мороз",
    city: "Харків",
    text: "Все на вищому рівні. Господарі дуже привітні, все що потрібно є в наявності.",
    stars: 5,
  },
];

function StarRating({ value }) {
  return (
    <span className="stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className={s <= Math.round(value) ? "star filled" : "star"}
        >
          ★
        </span>
      ))}
    </span>
  );
}

function CabinCard({ cabin }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="cabin-card">
      <div className="cabin-img-wrap">
        <img src={cabin.img} alt={cabin.title} className="cabin-img" />
        <button
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}
          aria-label="Додати до обраних"
        >
          ♥
        </button>
        <span className="cabin-badge">Популярне</span>
      </div>
      <div className="cabin-body">
        <div className="cabin-meta">
          <StarRating value={cabin.rating} />
          <span className="cabin-reviews">{cabin.reviews} відгуків</span>
        </div>
        <h3 className="cabin-title">{cabin.title}</h3>
        <p className="cabin-location">
          <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path
              d="M6 0C3.24 0 1 2.24 1 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5A1.5 1.5 0 1 1 6 3.5a1.5 1.5 0 0 1 0 3z"
              fill="currentColor"
            />
          </svg>
          {cabin.location}
        </p>
        <div className="cabin-specs">
          <span>👥 {cabin.guests} гостей</span>
          <span>🛏 {cabin.rooms} кімнати</span>
        </div>
        <div className="cabin-footer">
          <div className="cabin-price">
            <span className="price-amount">{cabin.price} грн</span>
            <span className="price-per"> / ніч</span>
          </div>
          <button className="btn-book">Забронювати</button>
        </div>
      </div>
    </div>
  );
}

export default function HolidayTimePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [activeTab, setActiveTab] = useState("all");

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <header className="header">
        <div className="container header-inner">
          <a href="/" className="logo">
            <span className="logo-icon">🏔</span>
            <span className="logo-text">
              Holiday<strong>Time</strong>
            </span>
          </a>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="nav-link">
                {link}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="tel:+380981234567" className="header-phone">
              +38 (098) 123-45-67
            </a>
            <button className="btn-primary btn-sm">Зв'язатись</button>
            <button
              className="burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="hero"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        >
          <div className="hero-overlay" />
          <div className="container hero-content">
            <p className="hero-eyebrow">Відкрийте для себе природу</p>
            <h1 className="hero-title">
              Відпочинок у серці
              <br />
              <em>Карпатських гір</em>
            </h1>
            <p className="hero-sub">
              Затишні котеджи та садиби для незабутнього відпочинку з родиною та
              друзями
            </p>
            <div className="hero-btns">
              <button className="btn-primary btn-lg">Переглянути оселі</button>
              <button className="btn-outline btn-lg">Дізнатись більше</button>
            </div>
          </div>

          {/* Search bar */}
          <div className="container">
            <div className="search-bar">
              <div className="search-field">
                <label>Заїзд</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div className="search-divider" />
              <div className="search-field">
                <label>Виїзд</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <div className="search-divider" />
              <div className="search-field">
                <label>Гості</label>
                <div className="guests-control">
                  <button onClick={() => setGuests(Math.max(1, guests - 1))}>
                    −
                  </button>
                  <span>{guests}</span>
                  <button onClick={() => setGuests(guests + 1)}>+</button>
                </div>
              </div>
              <button className="search-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle
                    cx="7.5"
                    cy="7.5"
                    r="5.5"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 12l3.5 3.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                Знайти
              </button>
            </div>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────────────────────── */}
        <section className="stats-section">
          <div className="container stats-grid">
            {[
              { num: "150+", label: "Оселей по Україні" },
              { num: "12 000+", label: "Щасливих гостей" },
              { num: "8 років", label: "На ринку відпочинку" },
              { num: "4.9 ★", label: "Середній рейтинг" },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CABINS ───────────────────────────────────────────────────────── */}
        <section className="section cabins-section">
          <div className="container">
            <div className="section-header">
              <p className="section-eyebrow">Наші пропозиції</p>
              <h2 className="section-title">Популярні оселі</h2>
              <p className="section-sub">
                Обирайте з понад 150 перевірених місць відпочинку по всій
                Україні
              </p>
            </div>

            <div className="tabs">
              {["all", "carpathians", "seaside", "forest"].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "all" && "Всі"}
                  {tab === "carpathians" && "Карпати"}
                  {tab === "seaside" && "Морське узбережжя"}
                  {tab === "forest" && "Ліс"}
                </button>
              ))}
            </div>

            <div className="cabins-grid">
              {CABINS.map((cabin) => (
                <CabinCard key={cabin.id} cabin={cabin} />
              ))}
            </div>

            <div className="cabins-cta">
              <button className="btn-outline btn-lg">
                Переглянути всі оселі →
              </button>
            </div>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────────────────────── */}
        <section className="section about-section">
          <div className="container about-grid">
            <div className="about-images">
              <img src={HERO_IMG} alt="Карпати" className="about-img-main" />
              <img
                src={COUPLE_IMG}
                alt="Відпочинок"
                className="about-img-secondary"
              />
              <div className="about-badge-float">
                <span className="about-badge-num">12 000+</span>
                <span className="about-badge-text">задоволених гостей</span>
              </div>
            </div>
            <div className="about-content">
              <p className="section-eyebrow">Про нас</p>
              <h2 className="section-title">
                Ми допомагаємо знайти ідеальне місце для відпочинку
              </h2>
              <p className="about-text">
                HolidayTime — це платформа, де ви знайдете найкращі оселі для
                відпочинку в Карпатах, Поліссі, Причорномор'ї та по всій
                Україні. Ми ретельно перевіряємо кожен об'єкт, щоб ваш
                відпочинок був справді незабутнім.
              </p>
              <ul className="about-features">
                {[
                  "Перевірені та сертифіковані оселі",
                  "Підтримка 24/7",
                  "Безпечне онлайн-бронювання",
                  "Гнучка політика скасування",
                ].map((f) => (
                  <li key={f}>
                    <span className="feature-check">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className="btn-primary btn-lg">Дізнатись більше</button>
            </div>
          </div>
        </section>

        {/* ── BOOKING FORM ─────────────────────────────────────────────────── */}
        <section className="section booking-section">
          <div className="container">
            <div className="booking-card">
              <div className="booking-info">
                <p className="section-eyebrow" style={{ color: "var(--gold)" }}>
                  Онлайн-бронювання
                </p>
                <h2 className="section-title" style={{ color: "#fff" }}>
                  Заброньюйте вашу ідеальну осель
                </h2>
                <p style={{ color: "rgba(255,255,255,.7)", lineHeight: 1.7 }}>
                  Залиште заявку і наш менеджер зв'яжеться з вами протягом 15
                  хвилин для підтвердження та уточнення деталей.
                </p>
                <div className="booking-contacts">
                  <a href="tel:+380981234567" className="booking-contact-link">
                    📞 +38 (098) 123-45-67
                  </a>
                  <a
                    href="mailto:info@holidaytime.ua"
                    className="booking-contact-link"
                  >
                    ✉️ info@holidaytime.ua
                  </a>
                </div>
              </div>
              <form
                className="booking-form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-row">
                  <div className="form-group">
                    <label>Ваше ім'я</label>
                    <input type="text" placeholder="Іван Іваненко" />
                  </div>
                  <div className="form-group">
                    <label>Телефон</label>
                    <input type="tel" placeholder="+38 (0__) ___-__-__" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Дата заїзду</label>
                    <input type="date" />
                  </div>
                  <div className="form-group">
                    <label>Дата виїзду</label>
                    <input type="date" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Тип оселі</label>
                  <select>
                    <option>Будь-який тип</option>
                    <option>Котедж</option>
                    <option>Садиба</option>
                    <option>Вілла</option>
                    <option>Будинок у лісі</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Побажання</label>
                  <textarea
                    placeholder="Ваші побажання щодо відпочинку..."
                    rows={3}
                  />
                </div>
                <button type="submit" className="btn-gold btn-lg form-submit">
                  Надіслати заявку →
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
        <section className="section testimonials-section">
          <div className="container">
            <div className="section-header">
              <p className="section-eyebrow">Відгуки</p>
              <h2 className="section-title">Що кажуть наші гості</h2>
            </div>
            <div className="testimonials-grid">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="testimonial-card">
                  <div className="testimonial-stars">
                    {"★★★★★".slice(0, t.stars)}
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.city}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAP ──────────────────────────────────────────────────────────── */}
        <section className="map-section">
          <div className="container">
            <div className="section-header">
              <p className="section-eyebrow">Де нас знайти</p>
              <h2 className="section-title">Наші регіони</h2>
            </div>
          </div>
          <div className="map-placeholder">
            <div className="map-overlay-text">
              <span>🗺</span>
              <p>Карта з розташуванням оселей</p>
              <small>Підключіть Google Maps API для відображення</small>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <span className="logo-text" style={{ fontSize: "1.4rem" }}>
              🏔 Holiday<strong>Time</strong>
            </span>
            <p className="footer-desc">
              Знаходимо найкращі місця для відпочинку по всій Україні вже 8
              років.
            </p>
            <div className="social-links">
              {["Facebook", "Instagram", "Telegram"].map((s) => (
                <a key={s} href="#" className="social-link">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4>Навігація</h4>
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" className="footer-link">
                {l}
              </a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Регіони</h4>
            {["Карпати", "Полісся", "Буковина", "Причорномор'я", "Поділля"].map(
              (r) => (
                <a key={r} href="#" className="footer-link">
                  {r}
                </a>
              ),
            )}
          </div>
          <div className="footer-col">
            <h4>Контакти</h4>
            <p className="footer-contact">📞 +38 (098) 123-45-67</p>
            <p className="footer-contact">✉️ info@holidaytime.ua</p>
            <p className="footer-contact">🕐 Пн–Нд: 9:00–21:00</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <span>© 2024 HolidayTime. Всі права захищені.</span>
            <div className="footer-legal">
              <a href="#">Політика конфіденційності</a>
              <a href="#">Умови використання</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
