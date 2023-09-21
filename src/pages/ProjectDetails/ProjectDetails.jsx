import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { projectId } = useParams();
  return <div>Now showing project with id - {projectId}</div>;
};

export default ProjectDetails;