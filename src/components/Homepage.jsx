import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function Homepage(props) {
   const nav = useNavigate();
  return (
    <div>
      <h3>List of rooms:</h3>
        {props.room.map((val)=>{
      return <Link to={`/room${val.name}`}><button  style={{backgroundColor:`${val.color}`, height:'50px',width:'100px' }}>{val.name}<br/>
      {val.type}</button></Link> 
    })}<br/>
        <button onClick={()=>nav('/AddRoom')}>+</button>
    </div>
  )
}
