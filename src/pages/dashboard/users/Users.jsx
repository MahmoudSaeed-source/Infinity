import { Button } from '@mui/material';
import './users.scss';
import Table_Users from '../../../components/Backend/dashbord/users_Page_Component/table_users/Table_Users.jsx'

const Users = () => {
  return (
    <div className="user_Page_Content">
      <div className="users_Header">
        <h3 className="title">Users</h3>
        <Button variant="contained" style={{fontSize:"12px"}}>New User</Button>
      </div>
      <Table_Users/>
    </div>
  );
}

export default Users