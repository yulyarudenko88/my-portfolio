import Container from '../../components/Container/Container';
import { Text, Img } from './NotFound.styled';
import CatImg from '../../assets/images/cat.svg';

const NotFound = () => {
  return (
    <Container>
      <Img src={CatImg} alt="cat" />
      <Text>
        <span>We are sorry,</span> but the page you were looking for can’t be
        found..
      </Text>
    </Container>
  );
};

export default NotFound;
