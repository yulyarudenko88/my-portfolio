import Filter from '../../components/Filter/Filter';
import PortfolioGallery from '../../components/PortfolioGallery/PortfolioGallery';

const Portfolio = () => {
  return (
    <>
      <section>
        <Filter />
      </section>
      <section>
        <PortfolioGallery />
      </section>
    </>
  );
};

export default Portfolio;
