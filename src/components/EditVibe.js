import { useParams } from "react-router-dom"
import axios from "axios"

const EditVibe = ({ vibes }) => {
  const params = useParams()

  const API_URL = 'https://api.airtable.com/v0/apppfkjVKyYXyDqYM/Table%201?api_key=key5SMVCWBp7tBUcr'

  const handleSubmit = async () => {
    await axios.put(API_URL + ``)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"></input>
      <button type="submit"></button>

    </form>

  )
}

export default EditVibe