import { useState, useEffect } from "react"
import axios from "axios"

const NewVibe = () => {

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    const newVibe = {
      fields: {
        Name,
        text,
      }
    }

    await axios.post('https://api.airtable.com/v0/apppfkjVKyYXyDqYM/Table%201?api_key=key5SMVCWBp7tBUcr', newVibe)
    setToggleFetch(!toggleFetch)
  }
  const [Name, SetName] = useState('')
  const [text, setText] = useState('')
  const [toggleFetch, setToggleFetch] = useState(true)

  return (
    <div className="formpage">
      <div className="formbox">
        <h1 className="newvibetitle">New Vibe</h1>
        <form className="newVibe" onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="Name"> </label>
          <input
            type="text"
            id="username"
            placeholder="Name"
            value={Name}
            onChange={(ev) => SetName(ev.target.value)}
          />
          <label htmlFor="text"></label>
          <input
            type="text"
            id="text"
            placeholder="Whats the Vibe for today?"
            value={text}
            onChange={(ev) => setText(ev.target.value)}
          />
          {/* <div className="mood"></div> */}

          <input type="submit" value="Vibe" className="vibebutton" />
        </form>
      </div>
    </div>
  )
}

export default NewVibe