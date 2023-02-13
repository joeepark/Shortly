import brand from '/src/assets/icon-brand-recognition.svg';
import detailed from '/src/assets/icon-detailed-records.svg';
import customizeable from '/src/assets/icon-fully-customizable.svg';

function Features() {
  return (
    <section className="features--container">
      <div className="features flex">
        <div className="features--header">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced statistics
            dashboard
          </p>
        </div>
        <div className="features--feature">
          <img src={brand} />
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't mean a thing. Branded
            links help instil confidence in your content
          </p>
        </div>
        <div className="features--feature">
          <img src={detailed} />
          <h3>Detailed Records</h3>
          <p>
            Gain insights who is clicking your links. Knowing when and where people engage with your
            content helps inform better decisions
          </p>
        </div>
        <div className="features--feature">
          <img src={customizeable} />
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through customizable links,
            supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Features;
