import './nav.scss'
import UserProfile from '../userProfile/UserProfile'
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
const Nav = () => {
  return (
    <nav className="Nav_Content">
      <div className="icons">
        <div className="icon">
          <SearchOutlinedIcon />
        </div>
        <div className="icon">
          <DashboardCustomizeOutlinedIcon />
        </div>
        <div className="icon">
          <AddAlertOutlinedIcon />
          <span className="number_not">1</span>
        </div>
        <div className="icon">
          <ExtensionOutlinedIcon />
        </div>
        <div className="icon">
          <SettingsIcon />
        </div>
      </div>
      <div className="userProfile">
        <UserProfile />
      </div>
    </nav>
  );
}

export default Nav