import React, { useState } from "react";
import Lists from "./Lists";
const App = () => {
  const [itemVal,setItemVal]=useState("");
  const inputChange=(e)=>
  {
    setItemVal(e.target.value);
  }
  const [listarr,setListArr]=useState([]);
  const addItem=(e)=>
  {
    setListArr((prev)=>
    {
      return[...prev,itemVal];
    })
    setItemVal("");
  };
  const delEntry=(id)=>
    {
      let i=0;
      let k=0;
      let newArr=[];
      console.log("Deleted!",id);
      setListArr((prev)=>
      {
        for(i=0;i<listarr.length;i++)
        {
          if(i===id)
          {
            continue;
          }
          else
          {
            newArr[k++]=prev[i];
          }
        }
        return newArr;
      })
    }
  return (
    <React.Fragment>
      <div className="container">
      <div className="box">
        <h1>To Do List</h1>
        <input type="text" placeholder="Add items" onChange={inputChange} value={itemVal}/>
        <button id='addBtn' onClick={addItem}>+</button>
        <hr/>
        <div className="list">
          <ol>
          {listarr.map((itemval,index)=>
          {
           return <Lists text={itemval} key={index} id={index} onSelect={delEntry}/>
          })}
          </ol>
        </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default App;
