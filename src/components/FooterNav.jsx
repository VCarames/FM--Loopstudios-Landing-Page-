import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <nav className="footer__nav" aria-label="footer">
      <ul className="footer__nav-list" role="list">
        <li className="footer__nav-item" role="listitem">
          <Link to="/" className="footer__nav-link">
            About
          </Link>
        </li>
        <li className="footer__nav-item" role="listitem">
          <Link to="/" className="footer__nav-link">
            Careers
          </Link>
        </li>
        <li className="footer__nav-item" role="listitem">
          <Link to="/" className="footer__nav-link">
            Events
          </Link>
        </li>
        <li className="footer__nav-item" role="listitem">
          <Link to="/" className="footer__nav-link">
            Products
          </Link>
        </li>
        <li className="footer__nav-item" role="listitem">
          <Link to="/" className="footer__nav-link">
            Support
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
