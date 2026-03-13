import { useState } from "react";
import ChessNav from "./ChessNav";

const PIECES = {
  K: "♔",
  Q: "♕",
  R: "♖",
  B: "♗",
  N: "♘",
  P: "♙",
  k: "♚",
  q: "♛",
  r: "♜",
  b: "♝",
  n: "♞",
  p: "♟",
};

const INITIAL_BOARD = [
  ["r", "n", "b", "q", "k", ".", ".", "r"],
  ["p", "p", ".", ".", ".", "p", "b", "p"],
  [".", ".", "p", ".", "p", "n", "p", "."],
  [".", ".", ".", "p", ".", ".", ".", "."],
  [".", ".", ".", ".", "P", "P", ".", "."],
  ["N", ".", "N", "B", ".", ".", "P", "."],
  ["P", "P", "P", ".", ".", ".", ".", "P"],
  ["R", ".", "B", "Q", "K", ".", ".", "R"],
];

function isWhite(piece) {
  return piece !== "." && piece === piece.toUpperCase();
}
function isBlack(piece) {
  return piece !== "." && piece === piece.toLowerCase();
}

export default function ChessBoard({ setPage }) {
  const [board, setBoard] = useState(INITIAL_BOARD.map((r) => [...r]));
  const [selected, setSelected] = useState(null);
  const [turn, setTurn] = useState("white");
  const [lastMove, setLastMove] = useState(null);
  const [capturedWhite, setCapturedWhite] = useState([]);
  const [capturedBlack, setCapturedBlack] = useState([]);

  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = ["8", "7", "6", "5", "4", "3", "2", "1"];

  function handleCellClick(row, col) {
    const piece = board[row][col];

    if (selected) {
      const { row: sr, col: sc } = selected;
      const selPiece = board[sr][sc];

      if (sr === row && sc === col) {
        setSelected(null);
        return;
      }

      const ownPiece = turn === "white" ? isWhite(piece) : isBlack(piece);
      if (ownPiece) {
        setSelected({ row, col });
        return;
      }

      const newBoard = board.map((r) => [...r]);
      const captured = newBoard[row][col];

      if (captured !== ".") {
        if (isWhite(captured)) setCapturedWhite((p) => [...p, captured]);
        else setCapturedBlack((p) => [...p, captured]);
      }

      newBoard[row][col] = selPiece;
      newBoard[sr][sc] = ".";

      setBoard(newBoard);
      setSelected(null);
      setLastMove({ from: { row: sr, col: sc }, to: { row, col } });
      setTurn(turn === "white" ? "black" : "white");
    } else {
      const myPiece = turn === "white" ? isWhite(piece) : isBlack(piece);
      if (myPiece) setSelected({ row, col });
    }
  }

  function resetGame() {
    setBoard(INITIAL_BOARD.map((r) => [...r]));
    setSelected(null);
    setLastMove(null);
    setTurn("white");
    setCapturedWhite([]);
    setCapturedBlack([]);
  }

  return (
    <div className="chess-root">
      <h1 className="chess-title">♟ Chess Board</h1>
      <ChessNav setPage={setPage} />

      <div className="chess-status">
        <div className={`turn-dot ${turn}`} />
        <span>{turn === "white" ? "White's turn" : "Black's turn"} </span>
        <button onClick={resetGame} className="reset-btn">
          ↺ Reset
        </button>
      </div>

      <div className="captured-wrap">
        <div className="captured-row">
          <span className="captured-label">Captured by black:</span>
          <span className="captured-pieces">
            {capturedBlack.map((p) => PIECES[p]).join(" ") || "—"}
          </span>
        </div>

        <div className="captured-row">
          <span className="captured-label">Captured by white:</span>
          <span className="captured-pieces">
            {capturedWhite.map((p) => PIECES[p]).join(" ") || "—"}
          </span>
        </div>
      </div>

      <div className="board-wrap">
        <div className="board-labels-top">
          <div className="corner" />
          {files.map((f) => (
            <div key={f} className="file-label">
              {f}
            </div>
          ))}
          <div className="corner" />
        </div>

        {board.map((row, ri) => (
          <div key={ri} className="board-row">
            <div className="rank-label">{ranks[ri]}</div>
            {row.map((piece, ci) => {
              const isLight = (ri + ci) % 2 === 0;
              const isSelected = selected?.row === ri && selected?.col === ci;
              const isLastTo =
                lastMove?.to.row === ri && lastMove?.to.col === ci;
              const isLastFrom =
                lastMove?.from.row === ri && lastMove?.from.col === ci;

              let cellClass = "cell " + (isLight ? "cell-light" : "cell-dark");
              if (isSelected) cellClass += " cell-selected";
              else if (isLastTo || isLastFrom) cellClass += " cell-highlight";

              return (
                <div
                  key={ci}
                  className={cellClass}
                  onClick={() => handleCellClick(ri, ci)}
                >
                  {selected && piece === "." && <div className="move-dot" />}
                  {piece !== "." && (
                    <span
                      className={`piece ${isWhite(piece) ? "piece-white" : "piece-black"}`}
                    >
                      {PIECES[piece]}
                    </span>
                  )}
                </div>
              );
            })}
            <div className="rank-label">{ranks[ri]}</div>
          </div>
        ))}

        <div className="board-labels-top">
          <div className="corner" />
          {files.map((f) => (
            <div key={f} className="file-label">
              {f}
            </div>
          ))}
          <div className="corner" />
        </div>
      </div>

      <div className="chess-legend">
        <h3 className="legend-title">Pieces</h3>
        <div className="legend-grid">
          {[
            ["K", "King"],
            ["Q", "Queen"],
            ["R", "Rook"],
            ["B", "Bishop"],
            ["N", "Knight"],
            ["P", "Pawn"],
          ].map(([k, n]) => (
            <div key={k} className="legend-item">
              <span className="piece piece-white">{PIECES[k]}</span>
              <span className="piece piece-black">
                {PIECES[k.toLowerCase()]}
              </span>
              <span className="legend-name">{n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
