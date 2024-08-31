import React, { useEffect, useState } from 'react'
import memesData from './memesData'
const Input = () => {
const[first,setfirst]=useState("");
console.log(first);
const[second,setsecond]=useState("");
const[MemeImage,setMemeImage]=useState("https://i.imgflip.com/2fm6x.jpg");
const getMeme=(event)=>{
    event.preventDefault(); 
    const memeArray=memesData.data.memes;
    const randomNumber=Math.floor(Math.random()*memeArray.length);
     setMemeImage(memeArray[randomNumber].url);
     console.log(memeArray[randomNumber].name)
    
}



  return (
    <div className='main' >
      <form action="">

       <div className='form' >
      
       {/*<input   className='first' type="text" placeholder='enter '    onChange={(e)=>setfirst( e.target.value)} />*/ }
       {/*   <input  className='second' type="text"  placeholder='something'  onChange={(e)=>setsecond( e.target.value)}    /> */} 
       
       </div>
        <button className='btn' onClick={getMeme}  >Generate Random Meme</button>



      </form>
      <img   className='memeimage' src={MemeImage} alt="" />
    </div>
  )
}

export default Input
