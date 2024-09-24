import { useState } from 'react'
import React from 'react'

function Calci() {
    const [input, setInput] = useState('0')
    function handleClick(value){
         if(value==='C'){
           setInput('')
         }
        else if(value==='<'){
           setInput(input.slice(0,-1))
         }
         else if(value==='='){
           try{
             setInput(eval(input).toString())
           }
           catch(e){
             setInput('Error')
   
           }
       
         }
         else{
           setInput((preValue)=>preValue+value)
         }
         
    }
  return (
    <div className='container'>
    <div className='calc'>
       <h1 id='input'>{input}</h1>
       <div>
        <button onClick={()=>{handleClick('C')}}>C</button>
        <button onClick={()=>{handleClick('<')}}>&lt;</button>
        <button onClick={()=>{handleClick('%')}}>%</button>
        <button onClick={()=>{handleClick('/')}}>/</button>
       </div>
     <div>
       <button onClick={()=>{handleClick('7')}}>7</button>
        <button onClick={()=>{handleClick('8')}}>8</button>
        <button onClick={()=>{handleClick('9')}}>9</button>
        <button onClick={()=>{handleClick('*')}}>*</button>
       </div>
       <div>

       <button onClick={()=>{handleClick('4')}}>4</button>
        <button onClick={()=>{handleClick('5')}}>5</button>
        <button onClick={()=>{handleClick('6')}}>6</button>
        <button onClick={()=>{handleClick('-')}}>-</button>
       </div>
       <div>

       <button onClick={()=>{handleClick('1')}}>1</button>
        <button onClick={()=>{handleClick('2')}}>2</button>
        <button onClick={()=>{handleClick('3')}}>3</button>
        <button onClick={()=>{handleClick('+')}}>+</button>
       </div>

       <div>
       <button onClick={()=>{handleClick('0')}}>0</button>
        <button onClick={()=>{handleClick('00')}}>00</button>
        <button onClick={()=>{handleClick('.')}}>.</button>
        <button onClick={()=>{handleClick('=')}}>=</button>
       </div>
       
    </div>
  </div>
  )
}

export default Calci
