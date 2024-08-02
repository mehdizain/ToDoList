import React from "react";

const Lists=(props)=>
{
    return(
        <React.Fragment>
        <button id="delBtn" onClick={()=>
          {
            props.onSelect(props.id);
          }}>X</button>
        <li>{props.text}</li>
        </React.Fragment>
    )
}
export default Lists;