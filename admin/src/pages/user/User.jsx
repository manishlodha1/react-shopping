import React from 'react'
import "./user.css"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/newUser">

            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img className='userShowImg' src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className="userShowTopTitle">
                        <span className="userShowUserName">Anna Becker</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Account Details</span>
                    <div className="userShowIngo">
                        <PermIdentity className='userShowIcon' />
                        <span className="userShowInfoTitle">annuabecker998</span>
                    </div>
                    <div className="userShowIngo">
                        <CalendarToday className='userShowIcon' />
                        <span className="userShowInfoTitle">10.12.2003</span>
                    </div>
                    <span className="userShowTitle">Contact Details</span>
                    <div className="userShowIngo">
                        <PhoneAndroid className='userShowIcon' />
                        <span className="userShowInfoTitle">+91 95687435</span>
                    </div>
                    <div className="userShowIngo">
                        <MailOutline className='userShowIcon' />
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    <div className="userShowIngo">
                        <LocationSearching className='userShowIcon' />
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>UserName</label>
                            <input type="text" placeholder='"annabeck999' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='"annabeck999' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='"annabeck999' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='"annabeck999' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='"annabeck999' className='userUpdateInput' />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='userUpdateImg' alt="" />
                            <label htmlFor="file"><Publish className='userUpdateIcon' /></label>
                            <input type="file" style={{display: "none"}} name="" id="file" />
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default User