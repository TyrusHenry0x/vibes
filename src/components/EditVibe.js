import { useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const EditVibe = ({ vibes }) => {
  const params = useParams()

  const API_URL = 'https://api.airtable.com/v0/apppfkjVKyYXyDqYM/Table%201?api_key=key5SMVCWBp7tBUcr'

  const handleSubmit = async () => {

    const updateVibe = {
      fields: {
        text,
      }
    }

    await axios.put(API_URL + `/${params.id}`, updateVibe)
  }
  const [text, setText] = useState('')

  return (
    <div className="newpage">
      <div className="newbox">
        <form className="newVibe" onSubmit={handleSubmit}>
          <label htmlFor="text"></label>
          <input
            type="text"
            id="text"
            placeholder="Edit?"
            value={text}
            onChange={(ev) => setText(ev.target.value)}
          />
          {/* <div className="mood"></div> */}

          <input type="submit" value="Vibe" />
        </form>
      </div>
    </div>

  )
}

export default EditVibe