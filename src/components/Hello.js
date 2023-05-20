export default function Hello(){
    const name = "Pulkit";
    
    const reverse = (name)=> {return name.split("").reverse().join("")}

    return <h1>Hello {reverse(name)} </h1>
}

