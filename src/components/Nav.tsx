function Nav() {
  return (
    <nav className="nav flex">
      <ul className="nav--left flex">
        <li>
          <img src="../assets/logo.svg" />
        </li>
        {/* <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li> */}
      </ul>
      <ul className="nav--right flex">
        {/* <li>Login</li>
        <li>Sign Up</li> */}
        <li>
          <button className="hamburger">☰</button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
