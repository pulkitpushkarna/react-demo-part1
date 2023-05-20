import { useState } from "react"


export default function Counter(){
    const [counter, setCounter] = useState(0)
    const increment = ()=>setCounter(counter+1);

        return(<div>
                <div> {counter}</div>
                <div><button onClick={increment}>Increment</button> </div>
        </div>)

}