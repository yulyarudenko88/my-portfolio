import { List, Item } from './Filter.styled';

const OPTIONS = ['HTML5 / CSS3 / JS', 'React', 'Node.js'];

const Filter = () => {
  return (
    <List>
      {OPTIONS.map(option => (
        <Item key={option}>
          <span>{option}</span>
        </Item>
      ))}
    </List>
  );
};

export default Filter;
