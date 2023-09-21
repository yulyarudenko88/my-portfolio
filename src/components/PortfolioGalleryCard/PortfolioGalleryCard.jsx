import { Link, useLocation } from 'react-router-dom';
import { ImGithub } from 'react-icons/im';
import { IconContext } from 'react-icons';
import { MdOpenInNew } from 'react-icons/md';
import PropTypes from 'prop-types';

import {
  Card,
  Img,
  Options,
  Option,
  LinksList,
  LinkItem,
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
    <IconContext.Provider value={{ className: 'project-links' }}>
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

        <LinksList>
          <LinkItem>
            <a
              href={githubPage}
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="link to github"
            >
              <ImGithub />
            </a>
          </LinkItem>
          <LinkItem>
            <a
              href={sitePath}
              target="_blank"
              rel="noopener noreferrer nofollow"
              title="link to website"
            >
              <MdOpenInNew />
            </a>
          </LinkItem>
        </LinksList>
      </Card>
    </IconContext.Provider>
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
