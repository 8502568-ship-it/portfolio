export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        <div>
          <h3 className="sub-title">Technical Skills</h3>
          <ul className="skill-list">
            <li className="skill-item">
              <span>HTML / CSS</span>
              <div className="bar">
                <div className="bar-fill" style={{ width: "90%" }}></div>
              </div>
            </li>

            <li className="skill-item">
              <span>JavaScript</span>
              <div className="bar">
                <div className="bar-fill" style={{ width: "80%" }}></div>
              </div>
            </li>

            <li className="skill-item">
              <span>React</span>
              <div className="bar">
                <div className="bar-fill" style={{ width: "65%" }}></div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="sub-title">Soft Skills</h3>
          <ol className="soft-list">
            <li>Teamwork</li>
            <li>Self-organization</li>
            <li>Fast learning</li>
            <li>Attention to detail</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
