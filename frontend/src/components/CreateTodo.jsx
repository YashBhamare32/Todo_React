import { useState } from "react";

export function CreateTodo(){
    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    return <div>
        <input style={{
            padding:10,
            margin:10
        }} id="title" type="text" placeholder="Title" onChange={function(e){
            const value = e.target.value;
            setTitle(value);
        }} /><br/>
        <input style={{
            padding:10,
            margin:10
        }}id="description" type="text" placeholder="Description" onChange={function(e){
            const value = e.target.value;
            setDescription(value);
        }}/><br/>

        <button style={{
            padding:10,
            margin:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todos" , {
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "content-type":"application/json"
                }
            }).then(async function(res){
                const json = await res.json();
                // alert("Todo added");
            })
        }}>Add todo</button>
    </div>
}
export default CreateTodo