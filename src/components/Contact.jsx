import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="contact__text reveal">
          <h2>Let's Build Something Great Together</h2>
          <p>
            I'm looking for a first internship or freelance opportunity where I can grow as a
            front-end developer. Feel free to reach out.
          </p>
        </div>

        <div className="contact__grid reveal reveal-d1">
          <a href="mailto:hegazielmzayen45@gmail.com" className="contact__item">
            <span className="contact__item-label">Email</span>
            <span className="contact__item-value">hegazielmzayen45@gmail.com</span>
          </a>

          <a href="tel:+201010537695" className="contact__item">
            <span className="contact__item-label">Phone</span>
            <span className="contact__item-value">01010537695</span>
          </a>

          <a
            href="https://www.linkedin.com/in/hegazi-shehata90/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__item"
          >
            <span className="contact__item-label">LinkedIn</span>
            <span className="contact__item-value">hegazi-shehata90</span>
          </a>

          <a
            href="https://github.com/HegaziShehata"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__item"
          >
            <span className="contact__item-label">GitHub</span>
            <span className="contact__item-value">HegaziShehata</span>
          </a>

          <div className="contact__item contact__item--static">
            <span className="contact__item-label">Location</span>
            <span className="contact__item-value">Tanta, Gharbia, Egypt</span>
          </div>

          <a
            href="https://drive.google.com/file/d/1XjgnEgval_mzA-EqZK1MXWL0IG_fRJ6R/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__item contact__item--cv"
          >
            <span className="contact__item-label">Resume</span>
            <span className="contact__item-value">Download CV ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
