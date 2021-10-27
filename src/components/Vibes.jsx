import axios from "axios"
import editf

export const Vibes = (props, toggleFetch, setToggleFetch) => {

  const deleteVibe = async () => {
    await axios.delete(`https://api.airtable.com/v0/apppfkjVKyYXyDqYM/Table%201?api_key=key5SMVCWBp7tBUcr/${props.vibe.id}`)
    setToggleFetch(!toggleFetch)
  }

  return (
    <div className="post">
      <h1><b>{props.vibe.fields.Name}</b></h1>
      <p>{props.vibe.fields.text}</p>
      <Link to='/editvibes'>Edit</Link>
      <button onClick={deleteVibe}>Delete</button>
    </div>
  )
}

export default Vibes

// (This is the contents of each post)