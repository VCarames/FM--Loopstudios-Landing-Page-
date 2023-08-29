import { Link } from "react-router-dom";
import Logo from "/assets/logo.svg";
import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__container">
          <Link to="/" className="footer__logo" aria-label="Home - Loopstudios">
            <img src={Logo} alt="" />
          </Link>
          <FooterNav />
        </div>
        <div>
          <FooterSocials />
          <p className="footer__copyright">
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
