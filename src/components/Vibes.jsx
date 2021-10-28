import { Link } from "react-router-dom"

export const Vibes = (props, toggleFetch, setToggleFetch) => {

  // const API_URL = 'https://api.airtable.com/v0/apppfkjVKyYXyDqYM/Table%201?api_key=key5SMVCWBp7tBUcr/'
  // const deleteVibe = async () => {
  //   await axios.delete(API_URL + `&records[]=${records}`)
  //   setToggleFetch(!toggleFetch)
  // }

  return (
    <div className="post">
      <h1><b>{props.vibe.fields.Name}</b></h1>
      <p>{props.vibe.fields.text}</p>

      <Link to={`/edit-vibe/${props.vibe.id}`}><button>Edit</button></Link>
    </div>
  )
}

export default Vibes

// (This is the contents of each post)