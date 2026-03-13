import { useState } from "react";
import "./styles.css";
import Portfolio from "./Portfolio";
import ChessBoard from "./components/ChessBoard";
import Schedule from "./components/Schedule";
import GoogleClone from "./components/GoogleClone";

export default function App() {
  const [page, setPage] = useState("portfolio");

  const pages = {
    portfolio: <Portfolio page={page} setPage={setPage} />,
    chess: <ChessBoard setPage={setPage} />,
    schedule: <Schedule />,
    google: <GoogleClone />,
  };

  return <div>{pages[page]}</div>;
}
