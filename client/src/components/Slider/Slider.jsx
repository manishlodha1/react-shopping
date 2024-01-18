import React from 'react'
import "./slider.css"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { sliderItems  } from '../../data'
import { useState } from 'react'
import { useRef } from 'react'

const Slider = () => {
    const sliderRef = useRef(null);
    const scrollAmount = 100;
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 )
        }
        else{
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
        } 
    };
  return (
    <div className='sliderContainer'>
        <div className='sliderArrow leftArrow' onClick={() => {
            const container = sliderRef.current;
            container.scrollLeft -= scrollAmount;
        }}>
            <ArrowLeftOutlined />
        </div>
        <div className='sliderWrapper' ref={sliderRef}>
        {sliderItems.map((item)=>(
            <div className='slide' bg={item.bg}> 
                <div className='sliderImgContainer'>
                    <img className='sliderImages' src={item.img} alt="" />
                </div>
                <div className='sliderInfoContainer'>
                    <h1 className='sliderTitle'>
                        {item.title}
                    </h1>
                    <p className='sliderDesc'>
                        {item.desc}
                    </p>
                    <button className='sliderBtn'>SHOP NOW</button>
                </div>
            </div>
        ))}
            
        </div>
        <div className='sliderArrow rightArrow' onClick={() => {
            const container = sliderRef.current;
            container.scrollLeft += scrollAmount;
        }}>
            <ArrowRightOutlined />
        </div>
    </div>
  )
}

export default Slider