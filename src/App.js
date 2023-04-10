
import './App.css';
import {BrowserRouter,Route,Routes} from'react-router-dom'
import Homepage from './components/Homepage';
import AddRoom from './components/AddRoom';
import { useState } from 'react';
import Room from './components/Room'



function App() {
  
  //מערך החדרים
  const [room, setroom] = useState([]);
 //הוספת חדר למערך, ושולח לקקומפוננטה שמוסיפה חדר
  const Addroome=(name,type,color)=>{
     setroom([...room,{name:name,type:type,color:color,products:[]}])
  }
  //הוספת חדר ובדיקה לפי "קונדישין" אם כבוי או דלוק
 const addProduct=(index,typeproduct)=>{
  let temp={condition:false,type:typeproduct}
  room[index].products.push(temp)
  setroom([...room])
 }
 //בודק לפי מיקום החדר איזה מוצר במערך שלו דולק או כבוי
 const changecondition=(indexofroom,indexofproduct)=>{
  room[indexofroom].products[indexofproduct].condition=!room[indexofroom].products[indexofproduct].condition
  setroom([...room])
  
 }



  return (
    <div className="App">
     <h1> Smart Home </h1>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Homepage room={room}/>} />
      <Route path='/AddRoom' element={<AddRoom Addroome={Addroome}  />}/>
      
    {/* לולאה שרצה ובונה את החדר עם הנתיב שלו לערןץ */}
      {room.map((val,index)=>{
        return <Route path={`/room${val.name}`} element={<Room changecondition={changecondition} addProduct={addProduct} 
         index={index}  name={val.name} type={val.type} products={ val.products}/>}/>
       })}
         
      
     </Routes>
     </BrowserRouter>
     

    </div>
  );
}

export default App;
