import { useEffect, useMemo, useState } from "react";
import "../styles/calendar.css";

const EVENTS = {
  "2026-07-01": "Це свято",
  "2026-07-28": "Це свято",
  "2026-07-29": "Це мій день народження",
};

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function Calendar() {
  const [activeMessage, setActiveMessage] = useState("");
  const [currentDate, setCurrentDate] = useState(() => new Date(2026, 6, 1));

  useEffect(() => {
    setActiveMessage("");
  }, [currentDate]);

  const monthLabel = useMemo(
    () =>
      new Intl.DateTimeFormat("uk-UA", {
        month: "long",
        year: "numeric",
      }).format(currentDate),
    [currentDate],
  );

  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const firstWeekday = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const cells = [];

    for (let index = firstWeekday - 1; index >= 0; index -= 1) {
      const day = daysInPrevMonth - index;
      const date = new Date(year, month - 1, day);
      cells.push({ date, inMonth: false, day });
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(year, month, day);
      cells.push({ date, inMonth: true, day });
    }

    while (cells.length % 7 !== 0) {
      const day = cells.length - daysInMonth - firstWeekday + 1;
      const date = new Date(year, month + 1, day);
      cells.push({ date, inMonth: false, day });
    }

    return cells;
  }, [currentDate]);

  const moveMonth = (step) => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + step, 1),
    );
  };

  const handleDayClick = (date) => {
    const key = formatDateKey(date);
    setActiveMessage(EVENTS[key] || "");
  };

  return (
    <div className="calendar-wrap">
      <div className="calendar-controls">
        <button
          type="button"
          className="calendar-nav-btn"
          onClick={() => moveMonth(-1)}
        >
          ← Попередній місяць
        </button>
        <span className="calendar-controls__label">{monthLabel}</span>
        <button
          type="button"
          className="calendar-nav-btn"
          onClick={() => moveMonth(1)}
        >
          Наступний місяць →
        </button>
      </div>

      <table className="calendar-table">
        <caption>{monthLabel}</caption>
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: calendarDays.length / 7 }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {calendarDays
                .slice(rowIndex * 7, rowIndex * 7 + 7)
                .map((cell) => {
                  const key = formatDateKey(cell.date);
                  const hasEvent = EVENTS[key];

                  return (
                    <td
                      key={key}
                      onClick={() => cell.inMonth && handleDayClick(cell.date)}
                      className={`${cell.inMonth ? "calendar-day" : "calendar-day calendar-day--muted"} ${hasEvent ? "calendar-day--event" : ""}`}
                    >
                      {cell.day}
                    </td>
                  );
                })}
            </tr>
          ))}
        </tbody>
      </table>
      {activeMessage ? <p>{activeMessage}</p> : null}
    </div>
  );
}
