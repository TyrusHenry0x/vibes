import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NewVibe from './components/NewVibe';
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


  return (
    <div className="App">

      {/* <div className="header"><h1 id="vibes">Vibes</h1></div> */}


      <Route path="/" exact>

        <div className="homepage">
          {vibes.map((vibe) => (
            <Vibes
              vibe={vibe}
            />

          ))}
        </div>

      </Route>

      <Route path="/new">

        <NewVibe />

      </Route >

      <Sidebar />

    </div >
  );
}

export default App;