// import React from 'react';
// import { Link } from 'react-router-dom';
// import { GalleryItem, Thumb, Title } from './RecipeGalleryItem.styled';

// const MAX_TITLE_LENGTH = 25;
const PAGES = ["About", "Portfolio", "Contact"];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {PAGES.map((page) => (
          <li key={page}>{page}</li>
        ))}
      </ul>
      {/* <Link to={`/recipes/${id}`}>
      </Link>*/}
    </nav>
  );
};

export default Navigation;
