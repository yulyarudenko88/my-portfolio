import { Link, useLocation } from 'react-router-dom';
import ProjectLinks from '../ProjectLinks/ProjectLinks';
import PropTypes from 'prop-types';

import {
  Card,
  Img,
  Options,
  Option,
} from './PortfolioGalleryCard.styled';

const PortfolioGalleryCard = ({
  id,
  posterPath,
  overview,
  options,
  sitePath,
  githubPage,
}) => {
  const location = useLocation();

  return (
      <Card key={id}>
        <Link to={`${id}`} state={location}>
          <Img src={posterPath} alt={overview} />
        </Link>
        <Options>
          {options.map((option, index) => (
            <li key={`${index} + ${option}.trim()`}>
              <Option>{option}</Option>
            </li>
          ))}
        </Options>
        <ProjectLinks
          sitePath={sitePath}
          githubPage={githubPage}
          position="absolute"
        />
      </Card>
  );
};

PortfolioGalleryCard.propTypes = {
  id: PropTypes.number.isRequired,
  posterPath: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  sitePath: PropTypes.string.isRequired,
  githubPage: PropTypes.string.isRequired,
};

export default PortfolioGalleryCard;
