import Counter from "./Counter";

export default function ConditionalComponent(){
    const display = true;
    return (display?<Counter/> : <h3>Nothing to see here</h3>)

}