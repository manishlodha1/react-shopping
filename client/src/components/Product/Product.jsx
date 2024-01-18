import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import "./product.css";
import { Link } from 'react-router-dom';

const Product = ({item}) => {
  return (
    <div className='productContainer'>
        <div className='productCircle'></div>
        <img className='productImg' src={item.img} alt="" />
        <div className='productInfo'>
            <div className='productInfoIcon'>
                <ShoppingCartOutlined />
            </div>
            <div className='productInfoIcon'>
                <Link to={`/product/${item._id}`}>
                    <SearchOutlined />
                </Link>
            </div>
            <div className='productInfoIcon'>
                <FavoriteBorderOutlined />
            </div>
        </div>

    </div>
  )
}

export default Product