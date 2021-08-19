import {useState} from "react";
import ButtonPlus from "./ButtonPlus";
import ButtonMinus from "./ButtonMinus";

function App() {
  const [count,setCount] =useState(0)
  return (
    <div>
      <ButtonPlus
          count={count}
          setCount={setCount}/>
      {count}
      <ButtonMinus
          count={count}
          setCount={setCount}/>
    </div>
  );
}

export default App;
