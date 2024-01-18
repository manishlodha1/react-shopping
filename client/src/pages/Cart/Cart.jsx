import React from 'react'
import "./cart.css"
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../components/Footer/Footer'
import { Add, Remove } from '@material-ui/icons'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state=>state.cart);
  return (
    <div className='cartContainer'>
        <Navbar />
        <Announcement />
        <div className='cartWrapper'>
            <h1 className='cartTitle'>YOUR BAG</h1>
            <div className='cartTop'>
                <button className='cartTopBtn'>CONTINUE SHOPPING</button>
                <div className='cartTopTexts'>
                    <span className='cartTopText'>SHOPPING BAG(2)</span>
                    <span className='cartTopText'>YOUR WISHLIST(0)</span>
                </div>
                <button className='cartTopBtn checkOut'>CHECKOUT NOW</button>

            </div>
            <div className='cartBottom'>
                <div className='cartInfo'>
                    {cart.products.map((product) => (
                        <div className='cartProduct'>
                            <div className='cartProductDetail'>
                                <img className='cartProductImg' src={product.img} alt="" />
                                <div className='cartDetails'>
                                    <span className='cartPName'><b>Product:</b> {product.title}</span>
                                    <span className='cartPId'><b>ID:</b> {product._id}</span>
                                    <div className='cartPColor'></div>
                                    <span className='cartPSize'><b>Size:</b> {product.size}</span>
                                </div>
                            </div>
                            <div className='cartPriceDetail'>
                                <div className='cartPAmountContainer'>
                                    <Add />
                                    <div className='cartPAmount'>{product.quantity}</div>
                                    <Remove />
                                </div>
                                <div className='cartPPrice'>Rs {product.price * product.quantity}</div>
                            </div>
                        </div> 
                    ))}
                     <hr className='cartHr' />
                </div>
                <div className='cartSummary'>
                    <h1 className='cartSTitle'>ORDER SUMMARY</h1>
                    <div className='cartSItem'>
                        <span className='cartSItemText'>Subtotal</span>
                        <span className='cartSItemPrice'>Rs {cart.total}</span>
                    </div>
                    <div className='cartSItem'>
                        <span className='cartSItemText'>Estimated Shipping</span>
                        <span className='cartSItemPrice'>Rs 250</span>
                    </div>
                    <div className='cartSItem'>
                        <span className='cartSItemText'>Shipping Discount</span>
                        <span className='cartSItemPrice'>Rs -250</span>
                    </div>
                    <div className='cartSItem cartTotal'>
                        <span className='cartSItemText '>Total</span>
                        <span className='cartSItemPrice'>Rs {cart.total}</span>
                    </div>
                    <button className='cartTotalBtn'>CHECKOUT NOW</button>

                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart