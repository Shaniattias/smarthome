import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function AddRoom(props) {
  const nav=useNavigate();

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [color, setColor] = useState('')
    const cheack=()=>{
      if(name=='' ){
       alert ('name is null') 
      }
      else if(type=='' ){
        alert ('type of room is null') 
       }
      else if(color=='' ){
        alert ('choose color') 
       }
      else {
       props.Addroome(name,type,color)
       nav('/');
      
      }
    }
    
  return (
    <div>
        <input onChange={((e)=>{setName(e.target.value)})} type="text" name="room" placeholder='room name' /><br/>
        <select onChange={((e)=>{setType(e.target.value)})}>
        <option value="type" selected disabled>coose type</option> 
        <option value="badroom" >badroom</option>
        <option value="toilet" >toilet</option>
        <option value="kitchen" >kitchen</option>
        </select><br/>
        <input  onChange={((e)=>{setColor(e.target.value)})} type="color" /><br/>
        <button onClick={()=>{cheack()}}>AddRoom</button>

    </div>
  )
}
