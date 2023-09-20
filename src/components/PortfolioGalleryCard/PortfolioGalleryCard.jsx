import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PortfolioGalleryCard = ({ id, posterPath, overview, options }) => {
  const location = useLocation();

  return (
    <li key={id}>
      <Link to={`portfolio${id}`} state={location}>
        <div>
          <img src={posterPath} alt={overview} />
          <ul>
            {options.map(option => (
              <li key={id}>
                <span>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
};

PortfolioGalleryCard.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default PortfolioGalleryCard;
