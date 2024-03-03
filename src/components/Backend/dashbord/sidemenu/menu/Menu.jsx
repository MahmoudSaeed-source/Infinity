import './menu.scss'
import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { LiaProductHunt } from "react-icons/lia";
import { LiaBorderStyleSolid } from "react-icons/lia";
import { TbReportSearch } from "react-icons/tb";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
const Menu = () => {
  return (
    <div className="menu_Container">
      <div className="menu_Item">
        <h3 className="title">main</h3>
        <div className="links_Items">
          <Link to="/dashboard" className="link_Page">
            <span className="icon_Link">
              <IoHomeOutline />
            </span>
            <span className="title_Link">Home</span>
          </Link>
          <Link to="/dashboard" className="link_Page">
            <span className="icon_Link">
              <LuUsers />
            </span>
            <span className="title_Link">profile</span>
          </Link>
        </div>
      </div>
      <div className="menu_Item">
        <h3 className="title">users</h3>
        <div className="links_Items">
          <Link to="/dashboard/users" className="link_Page">
            <span className="icon_Link">
              <LuUsers />
            </span>
            <span className="title_Link">admin Users</span>
          </Link>
          <Link to="/dashboard" className="link_Page">
            <span className="icon_Link">
              <LuUsers />
            </span>
            <span className="title_Link">custmers</span>
          </Link>
        </div>
      </div>
      <div className="menu_Item">
        <h3 className="title">products</h3>
        <div className="links_Items">
          <Link to="/dashboard" className="link_Page">
            <span className="icon_Link">
              <LiaProductHunt />
            </span>
            <span className="title_Link">products</span>
          </Link>
          <Link to="/dashboard" className="link_Page">
            <span className="icon_Link">
              <LiaBorderStyleSolid />
            </span>
            <span className="title_Link">orders</span>
          </Link>
        </div>
      </div>
      <div className="menu_Item">
        <h3 className="title">Analytics</h3>
        <div className="links_Items">
          <Link to="/dashboard" className="link_Page">
            <span className="icon_Link">
              <TbBrandGoogleAnalytics />
            </span>
            <span className="title_Link">Analytics</span>
          </Link>
          <Link to="/dashboard" className="link_Page">
            <span className="icon_Link">
              <TbReportSearch />
            </span>
            <span className="title_Link">reports</span>
          </Link>
        </div>
      </div>
      <div className="menu_Item">
        <h3 className="title">user logout</h3>
        <div className="links_Items">
          <Link to="/dashboard" className="link_Page">
            <span className="icon_Link">
              <IoLogOutOutline />
            </span>
            <span className="title_Link">logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu