export default function Profile(props){    
    const {name, lastname} = props
    return <h1> {props.children}  Name : {name} {lastname} </h1>
}