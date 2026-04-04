import { useState } from "react";
import "../styles/calendar.css";

export default function Calendar() {
  const [activeMessage, setActiveMessage] = useState("");

  const toggleMessage = (message) => {
    setActiveMessage((prev) => (prev === message ? "" : message));
  };

  return (
    <div>
      <table>
        <caption>July 2026</caption>
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
          <tr>
            <td></td>
            <td></td>
            <td onClick={() => toggleMessage("holiday")}>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>

          <tr>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>

          <tr>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
          </tr>

          <tr>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
          </tr>

          <tr>
            <td>27</td>
            <td onClick={() => toggleMessage("holiday")}>28</td>
            <td onClick={() => toggleMessage("birthday")}>29</td>
            <td>30</td>
            <td>31</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      {activeMessage === "birthday" ? <p>Це мій день народження</p> : null}
      {activeMessage === "holiday" ? <p>Це свято</p> : null}
    </div>
  );
}
