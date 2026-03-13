import ChessBoard from "./ChessBoard";

export default function ChessNav({ setPage }) {
  return (
    <nav className="nav">
      <span className="nav-logo">{"<ChessBoard />"}</span>
      <div className="nav-switcher">
        <button onClick={() => setPage("portfolio")} className="switcher-btn">
          ← Portfolio
        </button>
        <button className="switcher-btn active">♟ Chess</button>
      </div>
    </nav>
  );
}
