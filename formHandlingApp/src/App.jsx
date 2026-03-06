import { useState } from "react";
import Submit from "./Components/Submit";
import "./App.css"
function FormHandle(){
  const [Name,setName]=useState("")
  const [Email,setemail]=useState("")
  const [show,setshow]=useState(false)
  return (
    <>
      <div className="Namebox">
        <h1>Form information</h1>
        <label>Name :  </label>
        <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
      </div>
      <br></br>
      <div className="mailbox">
        <label>E-mail :  </label>
        <input type="email" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)}/>
      </div>
      <button  id="Button" onClick={()=>setshow(true)}>submit</button>
      {show && <Submit Name={Name} Email={Email}/>}
    </>
  )

}
export default FormHandle;