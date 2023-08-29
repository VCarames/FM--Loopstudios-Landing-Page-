import { Link } from "react-router-dom";
import data from "/public/data/creations";

function Creations() {
  return (
    <section className="creations-section">
      <div className="creations-section__container">
        <h2 className="creations-section__heading section-heading">
          Our creations
        </h2>

        <Link to="/" className="creations-section__btn btn--desktop button">
          See all
        </Link>
      </div>
      <ul className="creations-section__list" role="list">
        {data.creations.map((creation) => (
          <li
            key={creation.id}
            className="creations-section__item"
            role="listitem"
          >
            <h3 className="creations-section__subheading">
              <Link to="/" className="creations-section__link">
                {creation.title}
              </Link>
            </h3>
            <picture className="creations-section__picture">
              <source
                srcSet={creation.desktopImg}
                media="(min-width: 62.5rem)"
              />
              <img src={creation.mobileImg} alt={creation.title} />
            </picture>
          </li>
        ))}
      </ul>

      <Link href="/" className="creations-section__btn btn--mobile button">
        See all
      </Link>
    </section>
  );
}

export default Creations;
