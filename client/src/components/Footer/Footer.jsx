import React from 'react'
import "./footer.css"; 
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='footerLeft'>
            <h1 className="footerLogo">GKD.</h1>
            <p className='footerDesc'>
                Ghar Ki Dukan (GKD) Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt culpa doloremque quia atque consectetur adipisci, tempora provident natus voluptas! Itaque facere praesentium quas accusamus. Corporis architecto beatae voluptatibus eos corrupti? 
            </p>
            <div className='footerSocialContainer'>
                <div className='footerSocialIcon' style={{backgroundColor: "#3B5999"}}>
                    <Facebook />
                </div>
                <div className='footerSocialIcon' style={{backgroundColor: "#E4405F"}}>
                    <Twitter />
                </div>
                <div className='footerSocialIcon' style={{backgroundColor: "#55ACEE"}}>
                    <Instagram />
                </div>
                <div className='footerSocialIcon' style={{backgroundColor: "#E60023"}}>
                    <Pinterest />
                </div>
            </div>
        </div>
        <div className='footerCenter'>
            <h3 className='footerCenterTitle'>Useful Links</h3>
            <ul className='footerlist'>
                <li className='footerlistItems'>Home</li>
                <li className='footerlistItems'>Cart</li>
                <li className='footerlistItems'>Man Fashion</li>
                <li className='footerlistItems'>Women Fashion</li>
                <li className='footerlistItems'>Accessories</li>
                <li className='footerlistItems'>My Account</li>
                <li className='footerlistItems'>Order Tracking</li>
                <li className='footerlistItems'>Wishlist</li>
                <li className='footerlistItems'>Terms</li>
                

            </ul>
        </div>
        <div className='footerRight'>
            <h3>Contact</h3>
            <div className='footerContactItem'>
                <Room style={{marginRight: "10px"}} />
                622, Malviya Nagar, Delhi
            </div>
            <div className='footerContactItem'>
                <Phone style={{marginRight: "10px"}} /> +91 9658974350
            </div>
            <div className='footerContactItem'>
                <MailOutline style={{marginRight: "10px"}} /> contact@gkd.dev
            </div>
            <img className='footerPayment' src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
        </div>
    </div>
  )
}

export default Footer