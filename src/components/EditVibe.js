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

    await axios.put(API_URL + `/${params.id}`, { updateVibe })
  }
  const [text, setText] = useState('')

  return (
    <div className="formpage">
      <div className="formbox">
        <form className="editVibe" onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="text"></label>
          <input
            type="text"
            id="text"
            placeholder="Edit?"
            value={text}
            onChange={(ev) => setText(ev.target.value)}

          />

          <input type="submit" value="Confirm" preventdefault />
        </form>
      </div>
    </div >

  )
}

export default EditVibe