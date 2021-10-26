import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Vibes from './components/Vibes';


const API_URL = 'https://api.airtable.com/v0/apppfkjVKyYXyDqYM/Table%201?api_key=key5SMVCWBp7tBUcr'

function App() {
  const [vibes, setVibes] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

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

      <div className="header"><h1 id="vibes">Vibes</h1></div>

      <Route path="/" exact>
        {vibes.map((vibe) => (
          <Link to={`/vibe/${vibe.id}`}>
            <li key={vibe.id}>{vibe.fields.Name}</li>
          </Link>
        ))}
      </Route>


      <Sidebar />

    </div>
  );
}

export default App;