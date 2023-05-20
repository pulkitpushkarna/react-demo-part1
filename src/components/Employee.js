import axios from "axios";
import { useState } from "react";

export default function Employee(){
    const [name,setName] = useState()
    const [age,setAge] = useState()
    const [employees, setEmployees]= useState([])

    const saveEmployee=()=>{
        axios({
            method: "post",
            url:"http://localhost:8080/employees",
            data:{
                name: name,
                age: age
            }
        }).then(res=>{
            axios({
                method:"get",
                url:"http://localhost:8080/employees"
            }).then(response=>{
                setEmployees(response.data._embedded.employees)
            })
        })

    }

    return(<div>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" onChange={(e)=>setAge(e.target.value)}/>
            <button onClick={saveEmployee}>Save</button>
            {employees.map((employee)=>{return(<div>{employee.name} {employee.age}</div>)})}   

    </div>)



}