import {useState} from "react";
import Button from "./Button";

function App() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Button
                str={`+1`}
                onClick={() => setCount(count + 1)}/>
            {count}
            <Button
                str={'-1'}
                onClick={() => setCount(count - 1)}/>
        </div>
    );
}

export default App;
