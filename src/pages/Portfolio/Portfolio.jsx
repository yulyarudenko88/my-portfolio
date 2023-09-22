import { useSearchParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Filter from '../../components/Filter/Filter';
import PortfolioGallery from '../../components/PortfolioGallery/PortfolioGallery';
import { Section } from './Portfolio.styled';
import PROJECTS from '../../data/projects';

const OPTIONS = ['All', 'HTML5 / CSS3 / JS', 'React', 'Node.js'];

const Portfolio = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterOption = searchParams.get('filter') || 'All';

  const handleFilterClick = option => {
    setSearchParams({ filter: option });
  };

  return (
    <Container>
      <Section>
        <Filter options={OPTIONS} onFilterClick={handleFilterClick}/>
      </Section>
      <Section>
        <PortfolioGallery projects={PROJECTS} filterOption={filterOption}/>
      </Section>
    </Container>
  );
};

export default Portfolio;
