import "./CareerGoals.css";

export default function CareerGoals() {
  return (
    <section id="career" className="section career">
      <div className="container career__inner">
        <div className="section-head reveal">
          <span className="kicker">Career Goals</span>
          <h2>Where I'm headed</h2>
        </div>

        <p className="career__text reveal reveal-d1">
          My long-term goal is to become a professional Software Engineer. Right now, I'm
          focused on strengthening my React.js and front-end development skills through real
          projects, growing as a UI/UX designer, and looking for a first internship where I can
          learn from experienced engineers and contribute to real products.
        </p>
      </div>
    </section>
  );
}
