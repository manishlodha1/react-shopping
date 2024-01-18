import { Send } from '@material-ui/icons'
import React from 'react'
import "./newsletter.css"

const Newsletter = () => {
  return (
    <div className='newsContainer'>
        <h1 className="newsTitle">Newsletter</h1>
        <div className='newsDesc'>
            Get timely updates from your favorite products.
        </div>
        <div className='newsInputContainer'>
            <input className='newsInput' type="text" placeholder='Your Email..' />
            <button className='newsBtn'>
                <Send />
            </button>
        </div>
          
    </div>
  )
}

export default Newsletter