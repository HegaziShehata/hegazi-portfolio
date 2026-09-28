import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">Hegazi Shehata</h1>
          <p className="hero__role">Front-End Developer</p>
          <p className="hero__subrole">React Developer • UI/UX Designer</p>

          <p className="hero__desc">
            I'm an Information Technology student building responsive, user-friendly web
            experiences with React.js — and shaping the interfaces behind them in Figma.
            Currently based in Tanta, Gharbia, Egypt, working toward becoming a professional
            Software Engineer.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="hero__social">
            <a
              href="https://www.linkedin.com/in/hegazi-shehata90/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/HegaziShehata"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="hero__panel-bar">
            <span className="hero__dot hero__dot--red" />
            <span className="hero__dot hero__dot--yellow" />
            <span className="hero__dot hero__dot--green" />
            <span className="hero__panel-title">developer.js</span>
          </div>
          <pre className="hero__code">
            <code>
<span className="tok-kw">const</span> <span className="tok-var">developer</span> = {"{"}
{"\n  "}<span className="tok-prop">name</span>: <span className="tok-str">"Hegazi Shehata"</span>,
{"\n  "}<span className="tok-prop">role</span>: <span className="tok-str">"Front-End Developer"</span>,
{"\n  "}<span className="tok-prop">stack</span>: [<span className="tok-str">"React"</span>, <span className="tok-str">"JavaScript"</span>, <span className="tok-str">"Figma"</span>],
{"\n  "}<span className="tok-prop">location</span>: <span className="tok-str">"Tanta, Egypt"</span>,
{"\n  "}<span className="tok-prop">learning</span>: <span className="tok-bool">true</span>,
{"\n"}{"}"};
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
