import PropTypes from 'prop-types';
import { StyledTitle } from './Title.styled';

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
