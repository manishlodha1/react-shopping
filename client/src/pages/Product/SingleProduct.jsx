import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import "./Singleproduct.css"
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Newsletter from '../../components/Newsletter/Newsletter'
import Footer from '../../components/Footer/Footer'
import { Add, Remove } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../../requestMethods'
import { addProduct } from '../../redux/cartRedux'
import { useDispatch } from 'react-redux'


const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%; 
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;



const SingleProduct = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2]; 

    const [product,setProduct] = useState({});
    const [quantity,setQuantity] = useState(1);
    const [color,setColor] = useState("");
    const [size,setSize] = useState("");
    const dispatch = useDispatch();


    useEffect(()=>{
        const getProduct = async () => {
            try{
                const res = await publicRequest.get("/products/find/"+id);
                setProduct(res.data);
            }
            catch(err){
                console.log(err);
            }
        };
        getProduct();
    },[id]);

    const handleQuantity = (type) =>{
        if(type === "dec"){
           quantity > 1 && setQuantity(quantity-1);
        }
        else{
            setQuantity(quantity+1);
        }
    };

    const handleClick = () => {
    //    dispatch(
    //        addProduct({...product,quantity,color,size})
    //    );
    };
  return (
    <div className='SingleproductContainer'>
        <Navbar />
        <Announcement />
        <div className='SingleproductWrapper'>
            <div className='SingleproductImgContainer'>
                <img className='SingleproductImg' src={product.img} />
            </div>
            <div className='SingleproductInfo'>
                <h1 className="SingleproductTitle">{product.title}</h1>
                <p className="SingleproductDesc">
                {product.desc}
                </p>
                <span className="SingleproductPrice">Rs {product.price}</span>
                 <div className='SingleproductFilterContainer'>
                    <div className='SingleproductFilter'>
                        <span className='SingleproductFilterTitle'>Color</span>
                        {product.color?.map((c) => (
                            <FilterColor color={c} key={c} onClick={()=>setColor(c)} />
                            //<div className='SingleproductFilterColor' backgroundColor={c} key={c}></div>
                        ))}
                        

                    </div>
                    <div className='SingleproductFilter'>
                        <span className='SingleproductFilterTitle'>Size</span>
                        <select className='SingleproductFilterSizeSelect'>
                            {product.size?.map((s) => (
                                <option className='SingleproductFilterSizeOption' key={s} onChange={(e)=>setSize(e.target.value)}>{s}</option>
                            ))}
                        </select>
                    </div>
                 </div>
                 <div className='addContainer'>
                    <div className='amountContainer'>
                        <Remove onClick={()=>handleQuantity("dec")} />
                        <span className='amount'>{quantity}</span>
                        <Add onClick={()=>handleQuantity("inc")} />
                    </div>
                    <button className='addBtn' onClick={handleClick}>ADD TO CART</button>

                 </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  )
}

export default SingleProduct