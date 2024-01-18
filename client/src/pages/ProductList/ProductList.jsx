import React, { useState } from 'react'
import "./productlist.css"
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Products from '../../components/Products/Products'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import { useLocation } from 'react-router-dom'

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    // console.log("cate == ", cat);
    const [filters,setFilters] = useState({});
    const [sort,setSort] = useState("newest");


    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

   console.log(filters);
  return (
    <div className='productlistContainer'>
        <Navbar />
        <Announcement />
        <h1 className="productlistTitle">{cat}</h1>
        <div className='productlistFilterContainer'>
            <div className='productlistFilters'>
                <span className='filtersText'>Filter Products:</span>
                <select className='filterSelect' name = "color" onChange={handleFilters}>
                    <option className='filterSelectOption' disabled>Color</option>
                    <option className='filterSelectOption'>White</option>
                    <option className='filterSelectOption'>golden</option>
                    <option className='filterSelectOption'>Red</option>
                    <option className='filterSelectOption'>yellow</option>
                    <option className='filterSelectOption'>Green</option>
                    <option className='filterSelectOption'>blue</option>
                </select>
                <select className='filterSelect' name = "size" onChange={handleFilters}>
                    <option className='filterSelectOption' disabled selected>Size</option>
                    <option className='filterSelectOption'>XS</option> 
                    <option className='filterSelectOption'>S</option>
                    <option className='filterSelectOption'>M</option>
                    <option className='filterSelectOption'>L</option>
                    <option className='filterSelectOption'>XL</option>
                    <option className='filterSelectOption'>XXL</option>
                </select>
            </div>
            <div className='productlistFilters'>
                <span  className='filtersText'>Sort Products:</span>
                <select className='filterSelect' onChange={(e)=>setSort(e.target.value)}>
                    <option className='filterSelectOption' value="newest">Newest</option>
                    <option className='filterSelectOption' value="asc">Price (asc)</option>
                    <option className='filterSelectOption' value="desc">Price (desc)</option>
                    
                </select>
            </div>

        </div>
        <Products cat={cat} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductList