import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Vibes from './components/Vibes';


const API_URL = 'https://api.airtable.com/v0/apppfkjVKyYXyDqYM/Table%201?api_key=key5SMVCWBp7tBUcr'

function App() {
  const [vibes, setVibes] = useState([])
  const [toggleFetch, setToggleFetch] = useState(true)
  const [Name, SetName] = useState('')
  const [text, setText] = useState('')
  useEffect(() => {
    const getVibes = async () => {
      const resp = await axios.get(API_URL)
      console.log(resp.data.records)
      setVibes(resp.data.records)
    }
    getVibes()
  }, [toggleFetch])
  const handleSubmit = async (ev) => {
    ev.preventDefault()

    console.log('form submitted')

    const newVibe = {
      Name,
      text,
    }

    console.log(newVibe)
    await axios.post('https://api.airtable.com/v0/apppfkjVKyYXyDqYM/Table%201?api_key=key5SMVCWBp7tBUcr', newVibe)
    setToggleFetch(!toggleFetch)
  }

  return (
    <div className="App">

      {/* <div className="header"><h1 id="vibes">Vibes</h1></div> */}


      <Route path="/" exact>
        {vibes.map((vibe) => (
          <Vibes
            vibe={vibe}
          />

        ))}
      </Route>

      <Route path="/new">
        <div>
          <form className="newVibe" onSubmit={handleSubmit}>
            <label htmlFor="username">User:</label>
            <input
              type="text"
              id="username"
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
            <input type="submit" value="Vibe" />
          </form>
        </div>
      </Route>

      {/* <Sidebar /> */}

    </div>
  );
}

export default App;