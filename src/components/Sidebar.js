import { Link, Route } from 'react-router-dom';
import SideBarData from './SidebarData';


const Sidebar = () => {

  return (
    <div className="Sidebar">
      <ul className='SidebarList'>
        {SideBarData.map((val, key) => {
          return (
            <Link key={key}
              className="row"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar