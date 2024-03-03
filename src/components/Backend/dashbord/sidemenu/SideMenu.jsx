
import './sidemenu.scss'
import Menu from './menu/Menu.jsx'
const SideMenu = () => {
  return (
    <div className='side_Content'>
      <div className="user_Profile">
        <div className='image_Container'>
          <img src='../../../../../public/IMG-20220823-WA0032.jpg' alt ="user-image"/>
        </div>
        <span className ="user">Mahmoud</span>
      </div>
      <div className="menu">
        <Menu/>
      </div>
   </div>
  );
}

export default SideMenu;