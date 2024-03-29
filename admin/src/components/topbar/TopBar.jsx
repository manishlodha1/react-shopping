import React from 'react'
import "./topbar.css";
import {NotificationsNone,Language, Settings} from "@material-ui/icons";

const TopBar = () => {
  return (
    <div className='topbar'> 
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">gkdAdmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBag">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBag">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='topAvatar' alt="" />
            </div>
        </div>

    </div>
  )
}

export default TopBar