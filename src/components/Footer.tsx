function Footer() {
  return (
    <div className="footer">
      <div className="footer--container grid">
        <img src="../../public/logo.svg" />
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
                <img src="../../public/icon-facebook.svg" alt="faceboook" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="../../public/icon-twitter.svg" alt="twitter" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="../../public/icon-pinterest.svg" alt="pinterest" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="../../public/icon-instagram.svg" alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
