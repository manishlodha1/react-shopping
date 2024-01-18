import React from 'react'
import "./widgetSm.css"
import { Visibility } from '@material-ui/icons'
import { useState } from 'react'
import { useEffect } from 'react'
import { userRequest } from '../../requestMethods'

const WidgetSm = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{

        const getUsers = async () =>{
            try{
                const res = await userRequest.get("users/?new=true");
                setUsers(res.data);
            }
            catch(err){
                console.log("error in line 19",err);
            }
        }
        getUsers();
    },[]);
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
           {users.map((user)=>(
            <li className="widgetSmListItem" key={user.id}>
                <img className='widgetSmImg' src={user.img ||"https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                </div>
                <button className='widgetSmButton'>
                    <Visibility className='widgetSmIcon' />
                    Display
                </button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default WidgetSm