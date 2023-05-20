import { useState } from "react";

export default function Form(){

        const [firstname, setFirstname] = useState("")
        const [lastname, setLastname] = useState("")
        const [gender, setGender] = useState("")
        const [hobbies, setHobbies] = useState([]);
        const [city, setCity] = useState("");

        const submitData =()=>{
            console.log("Firstname::", firstname)
            console.log("Lastname::", lastname)
            console.log("GENDER::", gender)
            console.log("Hobbies::", hobbies)
            console.log("City::", city)
            console.log("Submitted Data");
        }

        const handleCheck=(event)=>{
            let updatedList = [...hobbies];
            if(event.target.checked){
                updatedList = [...hobbies,event.target.value]
            }else{
                updatedList.splice(hobbies.indexOf(event.target.value),1);
            }
            setHobbies(updatedList);
        }

    return(<div>
            <br/>
            <br/><table>
            <tr>
                <td>Firstname :</td>
                <td><input type="text" onChange={(e)=>setFirstname(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Lastname :</td>
                <td><input type="text" onChange={(e)=>setLastname(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Gender :</td>
                <td>Male<input name="gender" onClick={()=>setGender("MALE")} type="radio"/> Female <input name="gender"onClick={()=>setGender("FEMALE")} type="radio"/> </td>
            </tr>
            <tr>
                <td>Hobbies :</td>
                <td>
                    Swimming<input onClick={handleCheck} type="checkbox" value="Swimming"/> 
                    Jogging <input onClick={handleCheck} type="checkbox" value="Jogging"/> 
                    Dancing <input onClick={handleCheck} type="checkbox" value="Dancing"/> 
                </td>
            </tr>
            <tr>
                <td>City :</td>
                <td>
                    <select onChange={(e)=>setCity(e.target.value)}>
                        <option value="Delhi">Delhi</option>
                        <option value="Noida">Noida</option>
                        <option value="Gurgaon">Gurgaon</option>                        
                    </select>
                </td>
            </tr>
            <tr>
                <td><button onClick={submitData}>Submit</button></td>
            </tr>
            </table>
    </div>)

}