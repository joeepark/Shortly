import hero from '/src/assets/illustration-working.svg';
function Hero() {
  return (
    <header>
      <div className="hero">
        <div className="hero--image">
          <img src={hero} />
        </div>
        <div className="hero--content">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your links are
            performing
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </header>
  );
}
export default Hero;
