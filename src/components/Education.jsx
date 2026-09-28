import "./Education.css";

const coursework = [
  "Programming Language",
  "Object-Oriented Programming (Java)",
  "Data Structures",
  "Algorithms Analysis and Design",
  "Introduction to Software Engineering",
  "Advanced Software Engineering",
  "Web Technology",
  "Introduction to Database Systems",
  "Machine Learning Fundamentals",
  "Artificial Intelligence",
];

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">Education</span>
          <h2>Academic background</h2>
        </div>

        <div className="education__card reveal reveal-d1">
          <div className="education__main">
            <h3>Bachelor of Science in Information Technology</h3>
            <p className="education__school">
              Faculty of Computers and Information Technology – EELU
            </p>
            <p className="education__meta">Expected Graduation: 2028 · GPA: 3.46 / 4.00 (Very Good – High)</p>
          </div>

          <div className="education__coursework">
            <span className="education__coursework-label">Relevant coursework</span>
            <ul>
              {coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
