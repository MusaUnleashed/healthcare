import React, { useState } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';


export default function HomePage(props:any) {
    const [number,setNumber] = useState('');
    const handleChange = ( e :any) =>{
        setNumber(e.target.value);
    }
    const handleSubmit= ()=>{
        props.handleSubmit(number);
    }
  return (
    <div>
        {/* <input  value={number} onChange = { handleChange}/> 
        <Button onClick={handleSubmit}>  Click To Send</Button>
        */}
        
          <InputGroup style={{width:"50%", margin: "0 auto" }} size="sm" className="mb-1">
          <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm"  value={number} onChange = { handleChange}/>
            <Button onClick={handleSubmit}>  Click To Send</Button>  
        </InputGroup>
        
        {props.list?.length > 0 ? props.list.map( (element :any,index:any) => {
              return <span key ={index} style={{color:'red',fontSize:'20px'}}>{element + ' '}</span >
            }): null }
         
        
        {/* <button ></button> */}
    </div>
  )
}
