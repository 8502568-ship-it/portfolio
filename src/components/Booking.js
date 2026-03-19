const MONTH_OPTIONS = [
  ["1", "January"],
  ["2", "February"],
  ["3", "March"],
  ["4", "April"],
  ["5", "May"],
  ["6", "June"],
  ["7", "July"],
  ["8", "August"],
  ["9", "September"],
  ["10", "October"],
  ["11", "November"],
  ["12", "December"],
];

const DAY_OPTIONS = Array.from({ length: 31 }, (_, index) => String(index + 1));

const YEAR_OPTIONS = ["2026", "2027", "2028"];

export default function Booking() {
  return (
    <section>
      <div>
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800"
          alt="Hotel room"
          width="200"
        />
        <img
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800"
          alt="Hotel room 2"
          width="200"
        />
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800"
          alt="Resort pool"
          width="200"
        />
      </div>

      <h1>Hotel Booking</h1>
      <p>Special discounts for "Програмування для Інтернет" students</p>

      <hr />

      <form>
        <label htmlFor="first_name">Name *</label>
        <br />
        <input
          id="first_name"
          type="text"
          placeholder="First Name"
          name="first_name"
          required
        />
        <input type="text" placeholder="Last Name" name="last_name" required />
        <br />
        <br />
        <label htmlFor="email">E-mail *</label>
        <br />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="ex: myname@example.com"
          required
        />
        <br />
        <small>example@example.com</small>
        <br />
        <br />
        <label htmlFor="room_type">Room Type</label>
        <br />
        <select id="room_type" name="room_type" defaultValue="">
          <option value="">Please Select</option>
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
          <option value="deluxe">Deluxe</option>
        </select>
        <br />
        <br />
        <label htmlFor="guests">Number of Guests *</label>
        <br />
        <input
          id="guests"
          type="number"
          name="guests"
          placeholder="e.g., 4"
          min="1"
          max="10"
          required
        />
        <br />
        <small>(min 1, max 10)</small>
        <br />
        <br />
        <label htmlFor="arrival_date">Arrival Date &amp; Time *</label>
        <br />
        <input
          id="arrival_date"
          type="date"
          name="arrival_date"
          defaultValue="2026-03-21"
          required
        />
        <input
          type="number"
          name="arrival_hour"
          placeholder="Hour"
          min="1"
          max="12"
          defaultValue="12"
        />
        <input
          type="number"
          name="arrival_minutes"
          placeholder="Minutes"
          min="0"
          max="59"
          defaultValue="40"
        />
        <select name="arrival_ampm" defaultValue="PM">
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
        <br />
        <small>Hour &nbsp;&nbsp;&nbsp; Minutes</small>
        <br />
        <br />
        <label htmlFor="departure_month">Departure Date *</label>
        <br />
        <select id="departure_month" name="departure_month" defaultValue="">
          <option value="">Please select a month</option>
          {MONTH_OPTIONS.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <select name="departure_day" defaultValue="">
          <option value="">Please select a day</option>
          {DAY_OPTIONS.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select name="departure_year" defaultValue="">
          <option value="">Please select a year</option>
          {YEAR_OPTIONS.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <br />
        <small>Month &nbsp;&nbsp;&nbsp; Day &nbsp;&nbsp;&nbsp; Year</small>
        <br />
        <br />
        <span>Free Pickup? *</span>
        <br />
        <input type="radio" name="pickup" id="pickup_yes" value="yes" />
        <label htmlFor="pickup_yes">Yes Please! - Pick me up on arrival</label>
        &nbsp;&nbsp;
        <input type="radio" name="pickup" id="pickup_no" value="no" />
        <label htmlFor="pickup_no">
          No Thanks - I&apos;ll make my own way there
        </label>
        <br />
        <br />
        <label htmlFor="flight_number">Flight Number</label>
        <br />
        <input
          type="text"
          id="flight_number"
          name="flight_number"
          placeholder="Flight Number"
        />
        <br />
        <br />
        <fieldset>
          <legend>Meals *</legend>
          <input
            type="checkbox"
            id="breakfast"
            name="meals"
            value="breakfast"
          />
          <label htmlFor="breakfast">breakfast</label>
          <br />
          <input type="checkbox" id="lunch" name="meals" value="lunch" />
          <label htmlFor="lunch">lunch</label>
          <br />
          <input
            type="checkbox"
            id="afternoon_tea"
            name="meals"
            value="afternoon_tea"
          />
          <label htmlFor="afternoon_tea">afternoon tea</label>
          <br />
          <input type="checkbox" id="dinner" name="meals" value="dinner" />
          <label htmlFor="dinner">dinner</label>
        </fieldset>
        <br />
        <label htmlFor="special_requests">Special Requests</label>
        <br />
        <textarea
          id="special_requests"
          name="special_requests"
          rows="6"
          cols="60"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
