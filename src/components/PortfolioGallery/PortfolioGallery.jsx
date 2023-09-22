import PropTypes from 'prop-types';
import PortfolioGalleryCard from '../PortfolioGalleryCard/PortfolioGalleryCard';
import { Gallery } from './PortfolioGallery.styled';

const PortfolioGallery = ({ projects, filterOption }) => {
  const filteredProjects =
  filterOption === 'All'
      ? projects
      : projects.filter(project => project.options.includes(filterOption));

  return (
    <Gallery>
      {filteredProjects?.map(
        ({ id, poster_path, overview, options, site_path, github_page }) => {
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
              sitePath={site_path}
              githubPage={github_page}
            />
          );
        }
      )}
    </Gallery>
  );
};

PortfolioGallery.propTypes = {
  projects: PropTypes.array,
  filterOption: PropTypes.string,
};

export default PortfolioGallery;
