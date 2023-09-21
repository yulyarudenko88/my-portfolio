import { ImGithub } from 'react-icons/im';
import { IconContext } from 'react-icons';
import { MdOpenInNew } from 'react-icons/md';
import PropTypes from 'prop-types';

import { LinksList, LinkItem } from './ProjectLinks.styled';

const ProjectLinks = ({ sitePath, githubPage, position }) => {
  return (
    <IconContext.Provider value={{ className: 'project-links' }}>
      <LinksList position={position}>
        <LinkItem key={githubPage}>
          <a
            href={githubPage}
            target="_blank"
            rel="noopener noreferrer nofollow"
            title="link to github"
          >
            <ImGithub />
          </a>
        </LinkItem>
        <LinkItem key={sitePath}>
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
};

export default ProjectLinks;
