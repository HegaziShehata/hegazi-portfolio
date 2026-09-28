import "./About.css";
import photo from "../assets/hegazi-photo.jpeg";

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/201010537695",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M12.02 2C6.5 2 2.03 6.48 2.03 12c0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38A9.94 9.94 0 0 0 12.02 22C17.54 22 22 17.52 22 12S17.54 2 12.02 2Zm0 18.06c-1.6 0-3.13-.43-4.46-1.24l-.32-.19-3.12.82.83-3.04-.2-.31A8.06 8.06 0 1 1 20.08 12c0 4.45-3.6 8.06-8.06 8.06Zm4.42-6.03c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.18-1.39-1.32-1.63-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hegazi-shehata90/",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5A1.96 1.96 0 1 0 5.28 7.42 1.96 1.96 0 0 0 5.25 3.5ZM20.5 20.5H17.13v-6.31c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.33v6.42H9.23V8.5h3.24v1.64h.05a3.56 3.56 0 0 1 3.2-1.76c3.42 0 4.05 2.25 4.05 5.18v6.94Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hegazielmzayen45@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13Zm2.1.5 6.9 5.4 6.9-5.4H5.1ZM19.5 7.4l-7.1 5.55a1.5 1.5 0 0 1-1.8 0L4.5 7.4v11.1h15V7.4Z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/HegaziShehata",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="section-head reveal">
          <span className="kicker">About</span>
          <h2>A student developer building toward a software engineering career</h2>
        </div>

        <div className="about__layout">
          <div className="about__photo reveal">
            <img src={photo} alt="Hegazi Shehata" />
            <div className="about__photo-overlay">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="about__content">
            <div className="about__body reveal reveal-d1">
              <p>
                I'm an Information Technology student at the Faculty of Computers and
                Information Technology, focused on Front-End Development and UI/UX Design. I
                build responsive, user-friendly web applications with React.js, and design the
                interfaces behind them in Figma.
              </p>
              <p>
                I'm continuously developing my technical and design skills through real
                projects — from React apps to custom UI components — while working toward my
                long-term goal of becoming a professional Software Engineer. I'm also
                interested in Software Engineering more broadly, and I care about writing clean,
                maintainable code and designing experiences that are genuinely easy to use.
              </p>
            </div>

            <div className="about__facts reveal reveal-d2">
              <div className="about__fact">
                <span className="about__fact-label">Based in</span>
                <span className="about__fact-value">Tanta, Gharbia, Egypt</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Focus</span>
                <span className="about__fact-value">React.js & UI/UX Design</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-label">Studying</span>
                <span className="about__fact-value">Information Technology, EELU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

