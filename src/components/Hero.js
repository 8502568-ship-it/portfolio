export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="hero-left">
        <p className="greeting">Hi I am </p>
        <h1 className="hero-name">Olexii</h1>
        <h2 className="hero-role">Frontend Developer</h2>
        <p className="hero-bio">
          Student developer passionate about web technologies and clean code. I
          build modern interfaces that combine functionality and aesthetics.
        </p>

        <dl className="info-list">
          <div className="info-row">
            <dt>City</dt>
            <dd>Kyiv, Ukraine</dd>
          </div>
          <div className="info-row">
            <dt>Education</dt>
            <dd>KAI, 3rd course</dd>
          </div>
          <div className="info-row">
            <dt>Languages</dt>
            <dd>Ukrainian, English(B2)</dd>
          </div>
        </dl>
      </div>

      <div className="hero-right">
        <img src="./resources/avatar.jpg" alt="Avatar" className="avatar"></img>

        <div className="socials">
          <a
            href="https://github.com/Goplap"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="mailto:8502568@stud.kai.edu.ua"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
