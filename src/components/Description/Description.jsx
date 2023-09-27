import PropTypes from 'prop-types';
import { Desc } from './Description.styled';

const Description = ({ children }) => <Desc>{children}</Desc>;

Description.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Description;
