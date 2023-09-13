import { Wrapper, Image, ListItem, Title, Info, SkillsList } from './About.styled';
import MyPhoto from '../../assets/images/my-photo.jpg';

const HARD_SKILLS = [
  'HTML5 / CSS3 / SASS',
  'Responsive / Adaptive design',
  'JavaScript',
  'REST API',
  'Webpack',
  'React',
  'Node.js',
  'Redux / ReduxToolkit',
];

const About = () => {
  return (
    <Wrapper>
      <Image src={MyPhoto} alt="my photo" />
      <ul>
        <ListItem>
          <Title>Info</Title>
          <Info>
            Hello! I hope you are doing well. I am Junior Fullstack Developer
            currently living and working in Kyiv, Ukraine.
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
        </ListItem>
        <ListItem>
          <Title>Hard Skills</Title>
          <SkillsList>{HARD_SKILLS.map(skill =>(<li key={skill.trim()}>{skill}</li>))}</SkillsList>
        </ListItem>
        <ListItem>
          <Title>Certificates</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas saepe
            eos autem soluta officiis. A omnis fuga enim fugit illo quidem
            doloremque mollitia! Dolor, eligendi suscipit dolores quo labore
            iste!
          </p>
        </ListItem>
      </ul>
    </Wrapper>
  );
};

export default About;
