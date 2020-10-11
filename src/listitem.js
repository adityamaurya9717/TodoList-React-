import React from 'react';
import './listitem.css';
function Listitem(props){
  const items=props.item;
  const listitem=items.map((item,index)=>{
      return <div className="listitem" key={index}>

          <input type="text" id={item.key} value={item.text} onChange={(e)=>{props.setUpdate(e.target.value,item.key)}} />
          <div>
          <button onClick={()=>{props.delete(index)}}>Delete</button>
          </div>
      </div>
  })

  return (
      <div>{listitem}</div>
  )
}
export default Listitem;