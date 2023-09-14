import { motion } from 'framer-motion';
import {
  Wrapper,
  Image,
  Title,
  Info,
  SkillsList,
  SkillsListItem,
  CertificateList,
  ImgWrap,
  CertificateImg,
  CertificateListItem,
  CertificateTitle,
} from './About.styled';

import MyPhoto from '../../assets/images/my-photo.jpg';
import GoItFullstackCertificate from '../../assets/images/goit-fullstack_certificate.png';
import HARD_SKILLS from '../../data/hard-skills';
import CERTIFICATES from '../../data/certificates';

const InfoAnimation = {
  hidden: {
    y: 150,
    opacity: 0,
  },

  visible: custom => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const About = () => {
  return (
    <Wrapper>
      <Image src={MyPhoto} alt="my photo" />
      <motion.ul initial="hidden" whileInView='visible' viewport={{amount: 0.2, once: true,}}>
        <motion.li variants={InfoAnimation} custom={1} className='about-list-item'>
          <Title>Info</Title>
          <Info>
            Hello! I hope you are doing well. I am{' '}
            <span>Junior Fullstack Developer</span> currently living and working
            in Kyiv, Ukraine.
          </Info>
          <Info>
            How did I end up in IT? My entire professional life is connected
            with the construction and design of the subway, because I always
            wanted to be involved in creating something beautiful, stable and
            useful. From this follows my organization, flexibility and the
            desire to pay attention to small details in individual and team
            work. But time does not stand still and I found another field, study
            and work in which brings even more pleasure!
          </Info>
        </motion.li>
        <motion.li variants={InfoAnimation} custom={2} className='about-list-item'>
          <Title>Hard Skills</Title>
          <SkillsList>
            {HARD_SKILLS?.map(skill => (
              <SkillsListItem key={skill.trim()}>{skill}</SkillsListItem>
            ))}
          </SkillsList>
        </motion.li>
        <motion.li variants={InfoAnimation} custom={3} className='about-list-item'>
          <Title>Certificates</Title>
          <CertificateList>
            {CERTIFICATES?.map(({ name, path }) => (
              <CertificateListItem key={name.trim()}>
                <ImgWrap>
                  <CertificateTitle>{name}</CertificateTitle>
                  <a href={path} target="_blank" rel="noopener noreferrer">
                    <CertificateImg
                      src={GoItFullstackCertificate}
                      alt="fullstack certificate from GoIT"
                    />
                  </a>
                </ImgWrap>
              </CertificateListItem>
            ))}
          </CertificateList>
        </motion.li>
      </motion.ul>
    </Wrapper>
  );
};

export default About;
