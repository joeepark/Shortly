import logo from '/src/assets/logo.svg';
import facebook from '/src/assets/icon-facebook.svg';
import twitter from '/src/assets/icon-twitter.svg';
import pinterest from '/src/assets/icon-pinterest.svg';
import instagram from '/src/assets/icon-instagram.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer--container grid">
        <img src={logo} />
        <div className="footer--links">
          <h3>Features</h3>
          <ul>
            <li>
              <a href="#">Link Shortening</a>
            </li>
            <li>
              <a href="#">Branded links</a>
            </li>
            <li>
              <a href="#">Anaylyics</a>
            </li>
          </ul>
        </div>
        <div className="footer--links">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="footer--links">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer--icons">
          <ul className="flex">
            <li>
              <a href="#">
                <img src={facebook} alt="faceboook" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={pinterest} alt="pinterest" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
