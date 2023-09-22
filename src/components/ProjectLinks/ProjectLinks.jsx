import { ImGithub } from 'react-icons/im';
import { IconContext } from 'react-icons';
import { MdOpenInNew } from 'react-icons/md';
import PropTypes from 'prop-types';

import { LinksList, LinkItem } from './ProjectLinks.styled';

const ProjectLinks = ({
  sitePath,
  githubPage,
  position,
  fill = 'rgb(97, 97, 97)',
  bgColor = 'rgba(245, 245, 245, 0.8)',
  hoverFocusParams = {
    bgColor: 'rgba(245, 245, 245, 0.8)',
    borderColor: 'rgb(97, 97, 97)',
  },

}) => {
  return (
    <IconContext.Provider value={{ className: 'project-links' }}>
      <LinksList position={position}>
        <LinkItem
          key={githubPage}
          bgColor={bgColor}
          fill={fill}
          hoverFocusParams={hoverFocusParams}
        >
          <a
            href={githubPage}
            target="_blank"
            rel="noopener noreferrer nofollow"
            title="link to github"
          >
            <ImGithub />
          </a>
        </LinkItem>
        <LinkItem key={sitePath} bgColor={bgColor}
          fill={fill}
          hoverFocusParams={hoverFocusParams}>
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
    </IconContext.Provider>
  );
};

ProjectLinks.propTypes = {
  sitePath: PropTypes.string.isRequired,
  githubPage: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  fill: PropTypes.string,
  hoverFocusParams: PropTypes.shape({
    bgColor: PropTypes.string,
    borderColor: PropTypes.string,
  }),
};

export default ProjectLinks;
