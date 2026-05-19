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
import YouTubeClone from "./components/YouTubeClone";
import FigmaLayout from "./components/FigmaLayout";
import PageShell from "./components/PageShell";

export default function App() {
  const [page, setPage] = useState("portfolio");

  const pages = {
    portfolio: <Portfolio page={page} setPage={setPage} />,
    chess: (
      <PageShell
        title="Лабораторна робота: шахи"
        description="Інтерактивна шахівниця з ходами, скиданням гри та позначенням взятих фігур."
        setPage={setPage}
      >
        <ChessBoard />
      </PageShell>
    ),
    schedule: (
      <PageShell
        title="Лабораторна робота: розклад"
        description="Таблиця з розкладом занять у спільному стилі проєкту."
        setPage={setPage}
      >
        <Schedule />
      </PageShell>
    ),
    google: (
      <PageShell
        title="Лабораторна робота: Google clone"
        description="Макет сторінки пошуку, стилізований під Google."
        setPage={setPage}
      >
        <GoogleClone />
      </PageShell>
    ),
    booking: (
      <PageShell
        title="Лабораторна робота: booking form"
        description="Форма бронювання з елементами керування та перевіркою введення."
        setPage={setPage}
      >
        <Booking />
      </PageShell>
    ),
    survey: (
      <PageShell
        title="Лабораторна робота: survey"
        description="Анкета студента з валідацією полів та повідомленням про успішну відправку."
        setPage={setPage}
      >
        <Survey />
      </PageShell>
    ),
    lists: (
      <PageShell
        title="Лабораторна робота 4.1: списки"
        description="Списки з налаштовуваним кольором виділення для підсвічених елементів."
        setPage={setPage}
      >
        <Lists />
      </PageShell>
    ),
    calendar: (
      <PageShell
        title="Лабораторна робота: календар"
        description="Календар з переходом між місяцями та відмітками для окремих дат."
        setPage={setPage}
      >
        <Calendar />
      </PageShell>
    ),
    youtube: (
      <PageShell
        title="Лабораторна робота: YouTube clone"
        description="Відеострічка з бічною панеллю та модальним програвачем."
        setPage={setPage}
      >
        <YouTubeClone />
      </PageShell>
    ),
    figma: (
      <PageShell
        title="Лабораторна робота: Figma layout"
        description="Великий лендінг із секціями та адаптивною структурою."
        setPage={setPage}
      >
        <FigmaLayout />
      </PageShell>
    ),
  };

  return <div>{pages[page]}</div>;
}
