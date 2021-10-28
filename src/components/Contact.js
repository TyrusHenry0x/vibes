import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const Contact = () => {

  return (
    <div className="contactform">
      <h1>Get in touch</h1>
      <p>Email: tyrushenry03@gmail.com</p>
      <a href="https://github.com/TyrusHenry0x/">
        <GitHubIcon />
      </a>

      <a href="https://www.linkedin.com/in/tyrus-henry-bb409021a/">
        <LinkedInIcon />
      </a>

    </div>
  )
}

export default Contact