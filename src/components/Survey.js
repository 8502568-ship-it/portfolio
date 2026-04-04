import { useState } from "react";
import "../styles/styles.css";

//Validation rules
function validate(form) {
  const errors = {};

  if (!form.name.trim()) errors.name = "Name is required";
  else if (form.name.trim().length < 2) errors.name = "At least 2 characters";

  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(form.email))
    errors.email = "Invalid email format";

  if (!form.age) errors.age = "Age is required";
  else if (form.age < 16 || form.age > 60)
    errors.age = "Must be between 16 and 60";

  if (!form.faculty) errors.faculty = "Please choose a faculty";
  if (!form.studyForm) errors.studyForm = "Please choose a study form";

  if (!form.feedback.trim()) errors.feedback = "Please write something";

  return errors;
}

// Small reusable error message
function ErrorMsg({ msg }) {
  if (!msg) return null;
  return <span className="survey-error">← {msg}</span>;
}

// Main component
export default function Survey() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({}); // track which fields the user visited

  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    faculty: "",
    feedback: "",
    studyForm: "",
    likes: [],
    satisfaction: 5,
    birthdate: "",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const toggleCheckbox = (e) => {
    const { value, checked } = e.target;
    setForm({
      ...form,
      likes: checked
        ? [...form.likes, value]
        : form.likes.filter((v) => v !== value),
    });
  };

  // mark field as touched when user leaves it → show its error
  const handleBlur = (e) => {
    const next = { ...touched, [e.target.name]: true };
    setTouched(next);
    setErrors(validate(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // mark everything as touched so all errors appear at once
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true]),
    );
    setTouched(allTouched);

    const errs = validate(form);
    setErrors(errs);

    if (Object.keys(errs).length > 0) return; // stop if invalid

    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      age: "",
      phone: "",
      faculty: "",
      feedback: "",
      studyForm: "",
      likes: [],
      satisfaction: 5,
      birthdate: "",
    });
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  // helper: red border on invalid touched field
  const fieldStyle = (name) => ({
    outline: touched[name] && errors[name] ? "2px solid red" : "",
  });

  if (submitted) {
    return (
      <div className="survey-success">
        <h2>✓ Thank you!</h2>
        <p>Your answers have been received.</p>
        <pre>{JSON.stringify(form, null, 2)}</pre>
        <button className="survey-button" type="button" onClick={handleReset}>
          Fill again
        </button>
      </div>
    );
  }

  return (
    <div className="survey">
      <h1>Student Survey</h1>

      <form className="survey-form" onSubmit={handleSubmit} noValidate>
        {/* TEXT */}
        <div className="survey-field">
          <label className="survey-label" htmlFor="name">
            Your name *
          </label>
          <input
            className="survey-input"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={update}
            onBlur={handleBlur}
            placeholder="Ivan Petrenko"
            style={fieldStyle("name")}
          />
          <ErrorMsg msg={touched.name && errors.name} />
        </div>

        {/* EMAIL */}
        <div className="survey-field">
          <label className="survey-label" htmlFor="email">
            Email *
          </label>
          <input
            className="survey-input"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={update}
            onBlur={handleBlur}
            placeholder="student@university.ua"
            style={fieldStyle("email")}
          />
          <ErrorMsg msg={touched.email && errors.email} />
        </div>

        {/* NUMBER */}
        <div className="survey-field">
          <label className="survey-label" htmlFor="age">
            Age *
          </label>
          <input
            className="survey-input"
            type="number"
            id="age"
            name="age"
            value={form.age}
            onChange={update}
            onBlur={handleBlur}
            placeholder="20"
            min={16}
            max={60}
            step={1}
            style={fieldStyle("age")}
          />
          <ErrorMsg msg={touched.age && errors.age} />
        </div>

        {/* TEL — optional, no validation */}
        <div className="survey-field">
          <label className="survey-label" htmlFor="phone">
            Phone
          </label>
          <input
            className="survey-input"
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={update}
            placeholder="+380 67 123 45 67"
            pattern="[\+]?[0-9\s\-]{10,15}"
          />
        </div>

        {/* SELECT */}
        <div className="survey-field">
          <label className="survey-label" htmlFor="faculty">
            Faculty *
          </label>
          <select
            className="survey-select"
            id="faculty"
            name="faculty"
            value={form.faculty}
            onChange={update}
            onBlur={handleBlur}
            style={fieldStyle("faculty")}
          >
            <option value="" disabled>
              — Choose faculty —
            </option>
            <optgroup label="Technical">
              <option value="it">Information Technologies</option>
              <option value="cs">Computer Science</option>
              <option value="se">Software Engineering</option>
            </optgroup>
            <optgroup label="Humanities">
              <option value="law">Law</option>
              <option value="econ">Economics</option>
            </optgroup>
          </select>
          <ErrorMsg msg={touched.faculty && errors.faculty} />
        </div>

        {/* TEXTAREA */}
        <div className="survey-field">
          <label className="survey-label" htmlFor="feedback">
            What would you improve? *
          </label>
          <textarea
            className="survey-textarea"
            id="feedback"
            name="feedback"
            value={form.feedback}
            onChange={update}
            onBlur={handleBlur}
            placeholder="Your suggestions..."
            rows={5}
            maxLength={500}
            style={fieldStyle("feedback")}
          />
          <span className="survey-char-count">
            {500 - form.feedback.length} characters left
          </span>
          <ErrorMsg msg={touched.feedback && errors.feedback} />
        </div>

        {/* RADIO */}
        <fieldset className="survey-fieldset" style={{}}>
          <legend className="survey-legend">Study form *</legend>
          <div className="survey-radio-group">
            {[
              { value: "fulltime", label: "Full-time" },
              { value: "parttime", label: "Part-time" },
              { value: "distance", label: "Distance" },
            ].map(({ value, label }) => (
              <div className="survey-item" key={value}>
                <input
                  type="radio"
                  id={value}
                  name="studyForm"
                  value={value}
                  checked={form.studyForm === value}
                  onChange={(e) => {
                    update(e);
                    setTouched({ ...touched, studyForm: true });
                  }}
                />
                <label htmlFor={value}>{label}</label>
              </div>
            ))}
          </div>
          <ErrorMsg msg={touched.studyForm && errors.studyForm} />
        </fieldset>

        {/* CHECKBOX — optional */}
        <fieldset className="survey-fieldset">
          <legend className="survey-legend">What do you enjoy most?</legend>
          <div className="survey-checkbox-group">
            {[
              { value: "practice", label: "Practical tasks" },
              { value: "teachers", label: "Great teachers" },
              { value: "schedule", label: "Flexible schedule" },
              { value: "peers", label: "Classmates & atmosphere" },
            ].map(({ value, label }) => (
              <div className="survey-item" key={value}>
                <input
                  type="checkbox"
                  id={value}
                  name="likes"
                  value={value}
                  checked={form.likes.includes(value)}
                  onChange={toggleCheckbox}
                />
                <label htmlFor={value}>{label}</label>
              </div>
            ))}
          </div>
        </fieldset>

        {/* DATE */}
        <div className="survey-field">
          <label className="survey-label" htmlFor="birthdate">
            Date of birth
          </label>
          <input
            className="survey-input"
            type="date"
            id="birthdate"
            name="birthdate"
            value={form.birthdate}
            onChange={update}
            min="1990-01-01"
            max="2010-12-31"
          />
        </div>

        {/* RANGE */}
        <div className="survey-field survey-range-wrapper">
          <label className="survey-range-label" htmlFor="satisfaction">
            Overall satisfaction:{" "}
            <span className="survey-range-value">{form.satisfaction}</span> / 10
          </label>
          <input
            className="survey-input"
            type="range"
            id="satisfaction"
            name="satisfaction"
            value={form.satisfaction}
            onChange={update}
            min={1}
            max={10}
            step={1}
          />
          <span className="survey-range-hint">
            1 — very poor &nbsp;&nbsp; 10 — excellent
          </span>
        </div>

        {/* summary error count before submit */}
        {Object.keys(errors).length > 0 && Object.keys(touched).length > 0 && (
          <div className="survey-error-summary">
            Please fix {Object.keys(errors).length} error(s) before submitting.
          </div>
        )}

        <div className="survey-buttons">
          <button className="survey-button" type="button" onClick={handleReset}>
            Reset
          </button>
          <button className="survey-button" type="submit">
            Submit →
          </button>
        </div>
      </form>
    </div>
  );
}
