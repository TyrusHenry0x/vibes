import { useState } from "react"
import axios from "axios"

const NewVibe = () => {

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    console.log('form submitted')

    const newVibe = {
      fields: {
        Name,
        text,
      }
    }

    console.log(newVibe)
    await axios.post('https://api.airtable.com/v0/apppfkjVKyYXyDqYM/Table%201?api_key=key5SMVCWBp7tBUcr', newVibe)
    setToggleFetch(!toggleFetch)
  }
  const [Name, SetName] = useState('')
  const [text, setText] = useState('')
  const [toggleFetch, setToggleFetch] = useState(true)

  return (
    <div className="formpage">
      <div className="formbox">
        <form className="newVibe" onSubmit={handleSubmit}>
          <label htmlFor="Name">User: </label>
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

          <input type="submit" value="Vibe" />
        </form>
      </div>
    </div>
  )
}

export default NewVibe