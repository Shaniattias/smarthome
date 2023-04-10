import React from 'react'
import { useState } from 'react'

export default function Addproduct(props) {
 
    const [product, setproduct] = useState('lamp')

  return (
    <div>
        <select onChange={(e)=>{setproduct(e.target.value)}}>
            <option value="lamp">lamp</option>
            <option value="sterio">sterio</option>
            <option value="air-conditioner">air-conditioner</option>
        </select>
        <button onClick={()=>{props.addProduct(props.index,product)}}>Add product</button>
        <h4>Red color - the product is off // Green color - the product is on</h4>

    </div>
  )
}
