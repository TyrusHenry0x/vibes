import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NewVibe from './components/NewVibe';
import Sidebar from './components/Sidebar';
import Vibes from './components/Vibes';
// import AboutPage from './components/AboutPage';
import EditVibe from './components/EditVibe';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';

const API_URL = 'https://api.airtable.com/v0/apppfkjVKyYXyDqYM/Table%201?api_key=key5SMVCWBp7tBUcr'

function App() {
  const [vibes, setVibes] = useState([])
  const [toggleFetch] = useState(true)


  useEffect(() => {
    const getVibes = async () => {
      const resp = await axios.get(API_URL)
      setVibes(resp.data.records)
    }
    getVibes()
  }, [toggleFetch])


  return (
    <div className="App">

      <div className="header"><h1 id="vibes">Vibes</h1></div>

      <div className="bottom">

        <Route path="/" exact>

          <div className="homepage">
            {vibes.map((vibe) => (
              <Vibes
                vibe={vibe}
              />

            ))}
          </div>
        </Route>

        <Sidebar />

        <Route path="/new">
          <NewVibe />

        </Route >

        <Route path="/edit-vibe/:id">
          <EditVibe
            vibes={vibes}
          />
        </Route>

        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/support">
          <Contact />
        </Route>

      </div>
    </div >
  );
}

export default App