import PropTypes from 'prop-types';
import { List, Item } from './Filter.styled';

const Filter = ({ options, onFilterClick }) => {
  return (
    <List>
      {options.map(option => (
        <Item key={option.trim()}>
          <button
            type="button"
            onClick={() => {
              onFilterClick(option);
              // console.log(option);
            }}
          >
            {option}
          </button>
        </Item>
      ))}
    </List>
  );
};

Filter.propTypes = {
  options: PropTypes.array,
  onFilterClick: PropTypes.func,
};

export default Filter;
