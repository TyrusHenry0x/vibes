import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Contact = () => {

  return (
    <div>
      <Link href="https://github.com/TyrusHenry0x/">
        <GitHubIcon />
      </Link>
      <a href="https://www.linkedin.com/in/tyrus-henry-bb409021a/">
        linkedin
        <LinkedInIcon />
      </a>
    </div>
  )
}

export default Contact