import { ImTelegram, ImMail4, ImGithub, ImLinkedin } from 'react-icons/im';
import { IconContext } from 'react-icons';
import { NetworksList } from "./Networks.styled";

const Networks = () => {
  return (
    <IconContext.Provider value={{ className: 'networks' }}>
      <NetworksList>
        <li>
          <a
            href="https://t.me/yuliia_rudenko88"
            target="_blank"
            rel="noopener noreferrer nofollow"
            title="my telegram"
          >
            <ImTelegram />
          </a>
        </li>
        <li>
          <a
            href="mailto:yulyarudenko88@gmail.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            title="my email"
          >
            <ImMail4 />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/yulyarudenko88"
            target="_blank"
            rel="noopener noreferrer nofollow"
            title="my Github"
          >
            <ImGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/yuliia-rudenko88"
            target="_blank"
            rel="noopener noreferrer nofollow"
            title="my Linkedin"
          >
            <ImLinkedin />
          </a>
        </li>
      </NetworksList>
    </IconContext.Provider>
  );
};

export default Networks;
