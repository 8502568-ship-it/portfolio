import { useState } from "react";
import "./styles.css";
import Portfolio from "./Portfolio";
import ChessBoard from "./components/ChessBoard";
import Schedule from "./components/Schedule";
import GoogleClone from "./components/GoogleClone";
import Booking from "./components/Booking";
import Survey from "./components/Survey";

export default function App() {
  const [page, setPage] = useState("portfolio");

  const pages = {
    portfolio: <Portfolio page={page} setPage={setPage} />,
    chess: <ChessBoard setPage={setPage} />,
    schedule: <Schedule />,
    google: <GoogleClone />,
    booking: <Booking setPage={setPage} />,
    survey: <Survey />,
  };

  return <div>{pages[page]}</div>;
}
