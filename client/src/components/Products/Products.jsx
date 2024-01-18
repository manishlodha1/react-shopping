import React, { useEffect, useState } from 'react'
import "./products.css"
import { popularProducts } from '../../data'
import Product from '../Product/Product'
import axios from "axios";

const Products = ({cat,filters,sort}) => {
  console.log(cat,filters,sort);

  const [products,setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res = await axios.get(cat
          ? `http://localhost:5000/api/products?category=${cat}`
          : "http://localhost:5000/api/products");
        console.log("res == ",res);
        setProducts(res.data); 
      }
      catch(err){
        console.log("error ==",err);
      }
    };
    getProducts();
    },[cat]);

    // if any filter is changed then this useEffect run
    useEffect(()=>{
      cat && setFilteredProducts(
        products.filter((item)=>Object.entries(filters).every(([key,value]) => item[key].includes(value))
       )
      );
    },[products,cat,filters]);

  
  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProducts((prev)=>[...prev].sort((a,b)=>a.createdAt - b.createdAt));
    }
    else if(sort === "asc"){
      setFilteredProducts((prev)=>[...prev].sort((a,b)=>a.price - b.price));
    }
    else{
      setFilteredProducts((prev)=>[...prev].sort((a,b)=>b.price - a.price));
    }
  },[sort]);

  return (
    <div className='productsContainer'>
        {cat ? filteredProducts.map((item)=>(
            <Product item={item} key={item.id} />))
          : products 
              .slice(0,5).map((item)=> <Product item={item} key={item.id} />)    
        }
    </div>
  )
}

export default Products