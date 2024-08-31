import React from 'react'
import pic from './assets/Troll.png'
const Header = () => {
  return (
    <div  className='header' >
        <img   className='pic' src={pic} alt="" />
        <h1>Meme Generator</h1>
    </div>
  )
}

export default Header
