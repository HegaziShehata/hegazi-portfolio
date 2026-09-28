import { projects } from "../data/projects";
import "./Projects.css";

const GITHUB_URL = "https://github.com/HegaziShehata";

// Only projects flagged `featured: true` in src/data/projects.js are shown (max 3).
const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

const hasLink = (url) => Boolean(url) && url !== "#";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">Projects</span>
          <h2>Featured projects</h2>
          <p>A selection of the front-end projects I'm most proud of.</p>
        </div>

        <div className="projects__grid">
          {featuredProjects.map((project, i) => (
            <article className={`project-card reveal reveal-d${i + 1}`} key={project.id}>
              <div
                className={`project-card__thumb ${project.image ? "project-card__thumb--image" : ""}`}
              >
                {project.image ? (
                  <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                ) : (
                  <div className="project-card__mock" aria-hidden="true">
                    <div className="project-card__mock-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="project-card__mock-body">{project.title}</div>
                  </div>
                )}
              </div>

              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="project-card__tech" aria-label="Technologies used">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="project-card__actions">
                  {hasLink(project.liveUrl) && (
                    <a
                      href={project.liveUrl}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  {hasLink(project.codeUrl) && (
                    <a
                      href={project.codeUrl}
                      className={`btn ${hasLink(project.liveUrl) ? "btn-ghost" : "btn-primary"}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__more reveal">
          <a
            href={GITHUB_URL}
            className="btn btn-ghost projects__more-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
