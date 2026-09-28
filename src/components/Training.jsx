import "./Training.css";

const programs = [
  {
    title: "ITI Trainee",
    detail: "Information Technology Institute • Front-End Development • React.js",
  },
  {
    title: "DEPI Trainee",
    detail: "Digital Egypt Pioneers Initiative • Front-End Development • React.js",
  },
  {
    title: "UI/UX Design Program",
    detail: "Digital Egypt Youth (DEY) Initiative by NTI",
    extra: ["User Research", "UX Design", "UI Design", "Wireframing", "Prototyping", "Design Systems", "Figma"],
  },
];

const certificates = [
  {
    title: "UI/UX Design Program",
    detail: "Digital Egypt Youth (DEY) Initiative by NTI",
    url: "https://drive.google.com/file/d/1SncEjjjmlq89R0YM5RpcaD34ZXvngz36/view?usp=sharing",
  },
  // {
  //   title: "CCNA: Introduction to Networks",
  //   detail: "Cisco Networking Academy · Verified on Credly",
  //   url: "https://www.credly.com/badges/2839f226-fa94-4c6e-9686-6845ba0524bc/public_url",
  // },
  {
    title: "Learn HTML & CSS",
    detail: "ITI Platform (Mahara-Tech) · Officially verified",
    url: "https://maharatech.gov.eg/mod/customcert/verify_certificate.php?code=WEhwoqvf83&qrcode=1",
  },
  // {
  //   title: "Employability Skills (Module I)",
  //   detail: "Ministry of Higher Education & Scientific Research · BeReady Program",
  //   url: "https://bereadyapi.mohesr.gov.eg/Certificates/78AB-937F-2475-455DCertificate.pdf",
  // },
];

export default function Training() {
  return (
    <section id="training" className="section training">
      <div className="container">
        <div className="section-head reveal">
          <span className="kicker">Training & Certificates</span>
          <h2>Programs and credentials</h2>
        </div>

        <div className="training__columns">
          <div className="training__col reveal reveal-d1">
            <h3>Training Programs</h3>
            <div className="training__list">
              {programs.map((p) => (
                <div className="training__item" key={p.title}>
                  <h4>{p.title}</h4>
                  <p>{p.detail}</p>
                  {p.extra && (
                    <ul className="training__extra">
                      {p.extra.map((e) => (
                        <li key={e}>{e}</li>
                      ))}
                    </ul>
                  )}
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="training__cert-link"
                    >
                      View Certificate ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="training__col reveal reveal-d2">
            <h3>Certificates</h3>
            <div className="training__list">
              {certificates.map((c) => (
                <div className="training__item" key={c.title}>
                  <h4>{c.title}</h4>
                  <p>{c.detail}</p>
                  <a
                    href={c.url}
                    target={c.url !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="training__cert-link"
                  >
                    View Certificate ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
