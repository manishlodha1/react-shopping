import React from 'react'
import "./categoryItem.css"
import { Link } from 'react-router-dom'

const CategoryItem = ({item}) => {
  return (
    <div className='catItemContainer'>
      <Link to={`/products/${item.cat}`}> 
        <img className='catItemImg' src={item.img} alt="" />
        <div className='catItemInfo'>
            <h1 className="catItemInfoTitle">{item.title}</h1>
            <button className='catItemInfoBtn'>SHOP NOW</button>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem