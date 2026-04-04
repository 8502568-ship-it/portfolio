import "../styles/lists.css";

export default function Lists() {
  return (
    <section id="lists" className="lists">
      <h1 className="lists-title">My Favorite Lists</h1>

      <h2 className="lists-label">Favorite games:</h2>
      <ul className="lists-list lists-games">
        <li className="lists-item">Liftoff</li>
        <li className="lists-item">Minecraft</li>
        <li className="lists-item">Ukrainian Fight Drone Simulator</li>
        <li className="lists-item">Age of History 2</li>
        <li className="lists-item">Brawl Stars</li>
        <li className="lists-item">Stardew Valley</li>
      </ul>

      <h2 className="lists-label">Favorite movies/series/anime:</h2>
      <ol className="lists-list lists-watch">
        <li className="lists-item">The Dark Knight</li>
        <li className="lists-item">Fight Club</li>
        <li className="lists-item">Brokeback Mountain</li>
        <li className="lists-item">Joker</li>
        <li className="lists-item">The Matrix</li>
        <li className="lists-item">Breaking Bad</li>
        <li className="lists-item">Better Call Saul</li>
        <li className="lists-item">The Witcher</li>
        <li className="lists-item">Attack on Titan</li>
        <li className="lists-item">Arcane</li>
      </ol>

      <h2 className="lists-label">Favorite subjects and short description:</h2>
      <dl className="lists-list lists-subjects">
        <div className="lists-row">
          <dt className="lists-term">Mathematics:</dt>
          <dd className="lists-description">
            Develops logical thinking and helps solve complex problems.
          </dd>
        </div>
        <div className="lists-row">
          <dt className="lists-term">Computer Science:</dt>
          <dd className="lists-description">
            Covers algorithms, coding, and practical software creation.
          </dd>
        </div>
        <div className="lists-row">
          <dt className="lists-term">Physics:</dt>
          <dd className="lists-description">
            Explains how nature works through experiments and models.
          </dd>
        </div>
      </dl>
    </section>
  );
}
