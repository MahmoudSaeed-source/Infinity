import React, { useEffect, useState } from 'react';
import './topsale.scss';
import axios from 'axios';


const TopSale = () => {
  const [users,setUsers] = useState([]);
  const get_Users = () => {
    axios.get("http://localhost:3000/users").then((users) => {
      try {
        setUsers(users.data)
      } catch(err) {
        console.log(err.message)
      }
    })
  }
  useEffect(() => {
    get_Users();
  },[])
  return (
    <div className="top_Deals">
      <h2 className="Title_Section">Top Deals</h2>
      <div className="users_Deals_Content">
        {users
          .sort((a, b) => b.amount - a.amount).slice(1,6)
          .map((user) => (
            <div className="user_Component" key={user.id}>
              <div className="Img_user_Name">
                <div className="user_image">
                  <img src={user.image} alt="" />
                </div>
                <div className="user_Info">
                  <span className="Name">
                    {user.firstName}
                    {user.lastName}
                  </span>

                  <span className="mail">{user.email}</span>
                </div>
              </div>
              <h3 className="user_Amount">$ {user.amount}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}
export default TopSale;