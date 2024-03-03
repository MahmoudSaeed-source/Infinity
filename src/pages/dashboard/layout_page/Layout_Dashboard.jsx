import { Outlet } from 'react-router-dom'
import "./layout.scss";
import Nav from '../../../components/Backend/dashbord/navbar/Nav.jsx';
import SideMenu from '../../../components/Backend/dashbord/sidemenu/SideMenu.jsx';

const Home_Dashboard = () => {
  return (
    <div className="Home_Dash">
      <div className="dash_Container">
        <div className="side_menu">
          <div className="menu">
            <SideMenu />
          </div>
        </div>
        <div className="dash_Board_Content">
          <Nav />
          <div className="dash_content">
            <Outlet />
          </div>
        </div>
      </div>
      <footer>
        <span>Admin dashboard</span>
        <span> created by Mahmoud Saeed</span>
      </footer>
    </div>
  );
}

export default Home_Dashboard