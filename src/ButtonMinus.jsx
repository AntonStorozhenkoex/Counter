import React from "react";

const ButtonMinus = ({count,setCount}) =>{
    return(
        <div>
            <button onClick={() => setCount(count-1)}>-1</button>
        </div>
    )
}
export default ButtonMinus