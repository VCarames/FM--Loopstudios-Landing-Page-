import MobileImg from "/assets/images/mobile/image-interactive.jpg";
import DesktopImg from "/assets/images/desktop/image-interactive.jpg";

function About() {
  return (
    <section className="about-section">
      <h2 className="visually-hidden">About Us</h2>
      <picture className="about-section__picture">
        <source media="(min-width: 62.5rem)" srcSet={DesktopImg} />
        <img src={MobileImg} alt="" />
      </picture>
      <div className="about-section__content">
        <h3 className="about-section__heading section-heading">
          The leader in interactive VR
        </h3>
        <p className="about-section__text section-text">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}

export default About;
