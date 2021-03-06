import React from "react"
import { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Popup from "./Popup"

const NewVibe = ({toggleFetch, setToggleFetch}) => {
  const [Name, SetName] = useState('');
  const [text, setText] = useState('');
  // const [toggleFetch, setToggleFetch] = useState(true);
  const history = useHistory();

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    ev.target.reset()

    const newVibe = {
      fields: {
        Name,
        text,
      }
    }

    await axios.post('https://api.airtable.com/v0/apppfkjVKyYXyDqYM/Table%201?api_key=key5SMVCWBp7tBUcr', newVibe)

    history.push("/")
    setToggleFetch(!toggleFetch);
  }



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
          <input type="submit" value="vibe" className="vibebutton" />
        </form>
      </div>
    </div>
  )
}

export default NewVibe