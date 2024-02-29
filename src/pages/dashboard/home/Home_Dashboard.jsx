import { Link,Outlet } from 'react-router-dom'
import './home.scss'
const Home_Dashboard = () => {
  return (
    <div className="Home_Dash">
      <div className="side_menu">
        <div className="menu">
       <Link to="/dashboard/products">products</Link>
        </div>
        <footer>lhdjlhsjhd</footer>
      </div>
      <div className="dash_Board_Content">
        <Outlet />
      </div>
    </div>
  );
}

export default Home_Dashboard