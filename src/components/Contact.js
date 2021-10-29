import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Contact = () => {

  return (
    <div className="contactform">
      <h1 className="contacthead">Get in touch</h1>
      <p>Email: tyrushenry03@gmail.com</p>

      <div className="links-out">
        <a href="https://github.com/TyrusHenry0x/">
          <GitHubIcon id="githubi" />
        </a>

        <a href="https://www.linkedin.com/in/tyrus-henry-bb409021a/">
          <LinkedInIcon id="linkedini" />
        </a>
      </div>
    </div>
  )
}

export default Contact