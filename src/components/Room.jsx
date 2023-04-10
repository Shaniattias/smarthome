import React from 'react'
import { useState } from 'react'
import Addproduct from './Addproduct';


export default function Room(props) {
  const [flag, setflag] = useState(false);
  //אחראי על הצגת קומפוננטת הוספת המוצר
  const show = () => {
    if (flag == false) {
      return <div><Addproduct addProduct={props.addProduct} index={props.index} />  </div>
    }
    else {
      return <div><button onClick={changeflag} >Add </button></div>
    }
 }
  //אחראי על שינוי הפלג על מנת להציג את הכפתור
  const changeflag = () => {
    setflag(!flag)
  }

  return (

    <div >
      <h2>{props.name}'s Room</h2>
      <h3>{props.type}</h3>
     
      {/* קריאה לפונ שתציג את מה שמוחזר ממנה  */}
      {show()}
      {/*  // אם אמת? מפעיל ירוק שקר אדום  לולאה שאחראית לראות לפי האפ אם המצב הוא דלוק או כבוי ולפי כך משנה את הצבע */}
      {props.products.map((val, index) => {
      
        let condition = val.condition ? 'green' : 'red'
        return (
          <button style={{ backgroundColor: condition , margin:'0.5%' }} onClick={() => { props.changecondition(props.index, index) }}>{val.type}</button>
        )
      })}

    </div>
  )
}
