export default function ChessNav() {
  return (
    <nav className="nav">
      <span className="nav-logo">{"<ChessBoard />"}</span>
      <div className="nav-switcher">
        <button className="switcher-btn active">♟ Chess</button>
      </div>
    </nav>
  );
}
