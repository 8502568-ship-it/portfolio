import { useState } from "react";
import "./styles/styles.css";
import Portfolio from "./components/Portfolio";
import ChessBoard from "./components/ChessBoard";
import Schedule from "./components/Schedule";
import GoogleClone from "./components/GoogleClone";
import Booking from "./components/Booking";
import Survey from "./components/Survey";
import Lists from "./components/Lists";
import Calendar from "./components/Calendar";

export default function App() {
  const [page, setPage] = useState("portfolio");

  const pages = {
    portfolio: <Portfolio page={page} setPage={setPage} />,
    chess: <ChessBoard setPage={setPage} />,
    schedule: <Schedule />,
    google: <GoogleClone />,
    booking: <Booking setPage={setPage} />,
    survey: <Survey />,
    lists: <Lists />,
    calendar: <Calendar />,
  };

  return <div>{pages[page]}</div>;
}
