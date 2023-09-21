import { useParams } from 'react-router-dom';
import ProjectLinks from '../../components/ProjectLinks/ProjectLinks';
import Container from '../../components/Container/Container';
import { Wrapper } from './ProjectDetails.styled';

import PROJECT from '../../data/project';

const ProjectDetails = () => {
  const { projectId } = useParams();

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
        <h1>{`${title} ${projectId}`}</h1>
        <p>{desc}</p>
        {type === 'Team' && (
          <p>{`It is a team project. I was a ${role} and ${completed}`}</p>
        )}
        <h2>Technology Stack</h2>
        <ul style={{ marginTop: 'auto' }}>
          {technology_stack?.map(technology => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <ProjectLinks
          sitePath={site_path}
          githubPage={github_page}
          position="static"
        />
      </Container>
    </Wrapper>
  );
};

export default ProjectDetails;
