import { useState } from 'react';
import Container from '../../components/Container/Container';
import Filter from '../../components/Filter/Filter';
import PortfolioGallery from '../../components/PortfolioGallery/PortfolioGallery';
import { Section } from './Portfolio.styled';
import PROJECTS from '../../data/projects';

const OPTIONS = ['All', 'HTML5 / CSS3 / JS', 'React', 'Node.js'];

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterClick = option => {
    setSelectedFilter(option);
  };

  return (
    <Container>
      <Section>
        <Filter options={OPTIONS} onFilterClick={handleFilterClick} />
      </Section>
      <Section>
        <PortfolioGallery projects={PROJECTS} selectedFilter={selectedFilter}/>
      </Section>
    </Container>
  );
};

export default Portfolio;
