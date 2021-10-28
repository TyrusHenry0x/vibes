import { Link } from "@material-ui/core"

const AboutPage = () => {

  return (
    <div className="about">
      <h1>About</h1>
      <p>Vibes is a platform that focuses on positivity in day to day life, it could be something as simple as your breakfast tasting great, or finding the bright side of a bad situation. </p>
      <Link to="/" exact><button>Home</button></Link>
    </div>
  )
}

export default AboutPage