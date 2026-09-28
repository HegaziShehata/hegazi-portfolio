import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} Hegazi Shehata Elmzayn</span>
        <div className="footer__links">
          <a href="https://www.linkedin.com/in/hegazi-shehata90/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/HegaziShehata" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
