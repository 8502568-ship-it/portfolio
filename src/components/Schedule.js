export default function Schedule() {
  const times = [
    "8:30–10:05",
    "10:25–12:00",
    "12:20–13:55",
    "14:15–15:50",
    "16:10–17:45",
  ];

  return (
    <div className="schedule-root">
      <h1 className="schedule-title">Розклад занять</h1>
      <p className="schedule-subtitle">
        1 курс · Група ІП-__ · 2025/2026 навчальний рік
      </p>

      <div className="schedule-wrap">
        <table className="schedule-table">
          <thead>
            <tr>
              <th rowSpan="2" className="th-time">
                Час
              </th>
              <th colSpan="5" className="th-week week1">
                Тиждень 1
              </th>
              <th colSpan="5" className="th-week week2">
                Тиждень 2
              </th>
            </tr>
            <tr>
              <th className="th-day">Пн</th>
              <th className="th-day">Вт</th>
              <th className="th-day">Ср</th>
              <th className="th-day">Чт</th>
              <th className="th-day">Пт</th>
              <th className="th-day">Пн</th>
              <th className="th-day">Вт</th>
              <th className="th-day">Ср</th>
              <th className="th-day">Чт</th>
              <th className="th-day">Пт</th>
            </tr>
          </thead>
          <tbody>
            {/* Пара 1 */}
            <tr>
              <td className="td-time">
                {times[0]}
                <br />
                <span className="pair-num">1 пара</span>
              </td>
              <td className="td-subject lect">
                Математика
                <br />
                <span className="room">ауд. 202</span>
              </td>
              <td className="td-subject empty">—</td>
              <td className="td-subject lab">
                Програмування
                <br />
                <span className="room">лаб. 312</span>
              </td>
              <td className="td-subject empty">—</td>
              <td className="td-subject lect">
                Англійська
                <br />
                <span className="room">ауд. 105</span>
              </td>
              <td className="td-subject lect">
                Математика
                <br />
                <span className="room">ауд. 202</span>
              </td>
              <td className="td-subject empty">—</td>
              <td className="td-subject lab">
                Програмування
                <br />
                <span className="room">лаб. 312</span>
              </td>
              <td className="td-subject empty">—</td>
              <td className="td-subject lect">
                Англійська
                <br />
                <span className="room">ауд. 105</span>
              </td>
            </tr>

            {/* Пара 2 */}
            <tr>
              <td className="td-time">
                {times[1]}
                <br />
                <span className="pair-num">2 пара</span>
              </td>
              <td className="td-subject pract">
                Алгоритми
                <br />
                <span className="room">ауд. 301</span>
              </td>
              <td className="td-subject lect">
                Фізика
                <br />
                <span className="room">ауд. 407</span>
              </td>
              <td className="td-subject lect">
                Математика
                <br />
                <span className="room">ауд. 202</span>
              </td>
              <td className="td-subject lab">
                Бази даних
                <br />
                <span className="room">лаб. 215</span>
              </td>
              <td className="td-subject empty">—</td>
              <td className="td-subject pract">
                Алгоритми
                <br />
                <span className="room">ауд. 301</span>
              </td>
              <td className="td-subject lect">
                Фізика
                <br />
                <span className="room">ауд. 407</span>
              </td>
              <td className="td-subject lect">
                Математика
                <br />
                <span className="room">ауд. 202</span>
              </td>
              <td className="td-subject lab">
                Бази даних
                <br />
                <span className="room">лаб. 215</span>
              </td>
              <td className="td-subject pract">
                Алгоритми
                <br />
                <span className="room">ауд. 301</span>
              </td>
            </tr>

            {/* Пара 3 */}
            <tr>
              <td className="td-time">
                {times[2]}
                <br />
                <span className="pair-num">3 пара</span>
              </td>
              <td className="td-subject empty">—</td>
              <td className="td-subject pract">
                Програмування
                <br />
                <span className="room">ауд. 301</span>
              </td>
              <td className="td-subject empty">—</td>
              <td className="td-subject lect">
                Фізика
                <br />
                <span className="room">ауд. 407</span>
              </td>
              <td className="td-subject lab">
                Математика
                <br />
                <span className="room">лаб. 118</span>
              </td>
              <td className="td-subject empty">—</td>
              <td className="td-subject pract">
                Програмування
                <br />
                <span className="room">ауд. 301</span>
              </td>
              <td className="td-subject lect">
                Англійська
                <br />
                <span className="room">ауд. 105</span>
              </td>
              <td className="td-subject lect">
                Фізика
                <br />
                <span className="room">ауд. 407</span>
              </td>
              <td className="td-subject lab">
                Математика
                <br />
                <span className="room">лаб. 118</span>
              </td>
            </tr>

            {/* Пара 4 */}
            <tr>
              <td className="td-time">
                {times[3]}
                <br />
                <span className="pair-num">4 пара</span>
              </td>
              <td className="td-subject lect">
                Фізика
                <br />
                <span className="room">ауд. 407</span>
              </td>
              <td className="td-subject lab">
                Алгоритми
                <br />
                <span className="room">лаб. 312</span>
              </td>
              <td className="td-subject pract">
                Бази даних
                <br />
                <span className="room">ауд. 301</span>
              </td>
              <td className="td-subject empty">—</td>
              <td className="td-subject empty">—</td>
              <td className="td-subject lect">
                Фізика
                <br />
                <span className="room">ауд. 407</span>
              </td>
              <td className="td-subject lab">
                Алгоритми
                <br />
                <span className="room">лаб. 312</span>
              </td>
              <td className="td-subject pract">
                Бази даних
                <br />
                <span className="room">ауд. 301</span>
              </td>
              <td className="td-subject lect">
                Програмування
                <br />
                <span className="room">ауд. 202</span>
              </td>
              <td className="td-subject empty">—</td>
            </tr>

            {/* Пара 5 */}
            <tr>
              <td className="td-time">
                {times[4]}
                <br />
                <span className="pair-num">5 пара</span>
              </td>
              <td className="td-subject empty">—</td>
              <td className="td-subject empty">—</td>
              <td className="td-subject lect">
                Англійська
                <br />
                <span className="room">ауд. 105</span>
              </td>
              <td className="td-subject pract">
                Математика
                <br />
                <span className="room">ауд. 301</span>
              </td>
              <td className="td-subject empty">—</td>
              <td className="td-subject empty">—</td>
              <td className="td-subject lect">
                Бази даних
                <br />
                <span className="room">ауд. 407</span>
              </td>
              <td className="td-subject lect">
                Англійська
                <br />
                <span className="room">ауд. 105</span>
              </td>
              <td className="td-subject pract">
                Математика
                <br />
                <span className="room">ауд. 301</span>
              </td>
              <td className="td-subject empty">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Легенда */}
      <div className="schedule-legend">
        <span className="legend-item">
          <span className="legend-dot lect-dot"></span>Лекція
        </span>
        <span className="legend-item">
          <span className="legend-dot pract-dot"></span>Практика
        </span>
        <span className="legend-item">
          <span className="legend-dot lab-dot"></span>Лабораторна
        </span>
      </div>
    </div>
  );
}
