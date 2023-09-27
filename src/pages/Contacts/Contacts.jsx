import ContactForm from '../../components/ContactForm/ContactForm';
import Container from '../../components/Container/Container';
import Description from '../../components/Description/Description';
import Title from '../../components/Title/Title';
import { Wrapper } from './Contacts.styled';

const Contacts = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Contact Me</Title>
        <Description>
          For general or work send me message at social media in the bottom of
          website or via form next to.
        </Description>
        <ContactForm />
      </Wrapper>
    </Container>
  );
};

export default Contacts;
