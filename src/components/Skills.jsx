import { skillGroups } from "../data/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">Skills</span>
          <h2>What I work with</h2>
          <p>The languages, frameworks, and tools I use to design and build web interfaces.</p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <div className={`skills__group reveal reveal-d${i + 1}`} key={group.title}>
              <h3>{group.title}</h3>
              <ul className="skills__tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
