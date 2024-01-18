import React from 'react'
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import "./navbar.css"
import { useSelector } from "react-redux";
import { Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const quantity = useSelector(state=>state.cart.quantity);
    console.log(quantity);
  return (
    <div className='Container'>
        <div className='navbarWrapper'>
            <div className='left'>
                <span className='language'>EN</span>
                <div className='searchContainer'>
                    <input className='Input' type="text" />
                    <Search style={{color: "gray", fontSize: "16px"}} />
                </div>
            </div>
            <div className='center'>
                <h1 className="logo">GKD.</h1>
            </div>
            <div className='right'>
                <div className="MenuItem">
                    REGISTER
                </div>
                <div className="MenuItem">
                    SIGN IN
                </div>
                <Link to="/cart">
                    <div className="MenuItem">
                        <Badge badgeContent={quantity} color='primary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Navbar ;