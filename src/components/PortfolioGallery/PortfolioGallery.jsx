import PropTypes from 'prop-types';
import PortfolioGalleryCard from '../PortfolioGalleryCard/PortfolioGalleryCard';

const PortfolioGallery = ({ projects }) => {
  return (
    <ul>
      {projects?.map(({ id, poster_path, overview, options }) => {
        let posterPath = '';

        if (poster_path) {
          posterPath = `https://image.tmdb.org/t/p/w400/${poster_path}`;
        } else {
          posterPath =
            'https://cdn.pixabay.com/photo/2012/04/18/23/29/film-38241_960_720.png';
        }

        return (
          <PortfolioGalleryCard
            key={id}
            id={id}
            posterPath={posterPath}
            overview={overview}
            options={options}
          />
        );
      })}
    </ul>
  );
};

PortfolioGallery.propTypes = {
  projects: PropTypes.array,
};

export default PortfolioGallery;
