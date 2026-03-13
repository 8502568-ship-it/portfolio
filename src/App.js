import { useState } from "react";
import "./styles.css";
import Portfolio from "./Portfolio";
import ChessBoard from "./components/ChessBoard";

export default function App() {
  const [page, setPage] = useState("portfolio");

  return (
    <div>
      {page === "portfolio" ? (
        <Portfolio page={page} setPage={setPage} />
      ) : (
        <ChessBoard page={page} setPage={setPage} />
      )}
    </div>
  );
}
