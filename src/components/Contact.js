export default function Contact() {
  return (
    <div>
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <p className="contact-text">
          Have an interesting project or want to chat? Write to me!
        </p>

        <div className="contact-grid">
          <a
            href="https://github.com/Goplap"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">⌨</span>
            <span>GitHub</span>
          </a>

          <a
            href="mailto:8502568@stud.kai.edu.ua"
            className="contact-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">✉</span>
            <span>Email</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Olexii · Made with ❤ and React</p>
      </footer>
    </div>
  );
}
