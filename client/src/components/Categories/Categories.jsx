import React from 'react'
import "./categories.css";
import { categories } from '../../data';
import CategoryItem from '../CategoryItem/CategoryItem';

const Categories = () => {
  return (
    <div className='catContainer'>
        {categories.map((item) => (
            <CategoryItem item={item} />
        ))}
    </div>
  )
}

export default Categories