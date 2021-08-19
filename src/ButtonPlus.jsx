import React from "react";

const ButtonPlus = ({count,setCount}) =>{
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </div>
    )
}
export default ButtonPlus