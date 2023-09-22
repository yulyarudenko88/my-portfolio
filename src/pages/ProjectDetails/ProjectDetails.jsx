import { useParams, useLocation } from 'react-router-dom';
import { BsBoxArrowLeft } from 'react-icons/bs';
import ProjectLinks from '../../components/ProjectLinks/ProjectLinks';
import Container from '../../components/Container/Container';
import {
  Wrapper,
  StyledLink,
  Title,
  Info,
  SecondaryTitle,
  SkillsList,
  SkillsListItem,
} from './ProjectDetails.styled';

import PROJECT from '../../data/project';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state ?? '/portfolio';
  // console.log(location);
  const {
    title,
    // poster,
    desc,
    technology_stack,
    type,
    role,
    completed,
    site_path,
    github_page,
  } = PROJECT;

  return (
    <Wrapper>
      <Container>
        <StyledLink to={backLinkHref}>
          <BsBoxArrowLeft
            style={{
              width: '30px',
              height: '30px',
            }}
          />
        </StyledLink>
        <Title>{`${title} ${projectId}`}</Title>
        <div>
          <Info>{desc}</Info>
          {type === 'Team' && (
            <Info>
              It is a <span>team</span> project. I was a <span>{role}</span> and{' '}
              <span>{completed}</span>
            </Info>
          )}
        </div>
        <SecondaryTitle>Technology Stack</SecondaryTitle>
        <SkillsList>
          {technology_stack?.map(technology => (
            <SkillsListItem key={technology}>{technology}</SkillsListItem>
          ))}
        </SkillsList>
        <ProjectLinks
          sitePath={site_path}
          githubPage={github_page}
          position="static"
          bgColor="transparent"
          fill="rgb(255, 255, 255)"
          hoverFocusParams={{
            bgColor: 'rgba(245, 245, 245, 0.3)',
            borderColor: 'rgba(245, 245, 245, 0.3)',
          }}
        />
      </Container>
    </Wrapper>
  );
};

export default ProjectDetails;
