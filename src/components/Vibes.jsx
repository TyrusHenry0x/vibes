import { Link, useParams } from "react-router-dom"
import axios from "axios"


export const Vibes = (props, toggleFetch, setToggleFetch) => {

  const params = useParams()

  const API_URL = 'https://api.airtable.com/v0/apppfkjVKyYXyDqYM/Table%201?api_key=key5SMVCWBp7tBUcr/'

  // const deleteVibe = async () => {
  //   // await axios.delete(API_URL + `/${params.id}`)
  //   await axios.delete(API_URL, { records: }).base
  //   setToggleFetch(!toggleFetch)
  // }

  return (
    <div className="post">
      <h1><b>{props.vibe.fields.Name}</b></h1>
      <p>{props.vibe.fields.text}</p>

      <Link to={`/edit-vibe/${props.vibe.id}`}><button>Edit</button></Link>
      {/* <button onClick={deleteVibe}>Delete</button> */}
    </div>
  )
}

export default Vibes

// (This is the contents of each post)