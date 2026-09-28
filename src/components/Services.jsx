import "./Services.css";

const services = [
  {
    title: "Front-End Development",
    description:
      "Responsive and modern websites using HTML, CSS, JavaScript, React.js and Bootstrap.",
  },
  {
    title: "React Development",
    description: "Interactive and component-based web applications using React.js.",
  },
  {
    title: "Responsive Web Design",
    description: "Websites optimized for desktop, tablet, and mobile devices.",
  },
  {
    title: "UI/UX Design",
    description: "User-centered interfaces and experiences using Figma.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">Services</span>
          <h2>How I can help</h2>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div className={`services__card reveal reveal-d${i + 1}`} key={s.title}>
              <span className="services__mark" />
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
