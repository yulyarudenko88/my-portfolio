import Networks from '../Networks/Networks';
import { StyledFooter, Copyright } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Networks />
      <Copyright>&#169; 2023 Created by Yuliia Rudenko</Copyright>
    </StyledFooter>
  );
};

export default Footer;
