import React, { useState } from 'react'

export default function Validat() {
    const [name , setName] = useState("");
    const [nameError , setNameError] = useState(false)
    const [pass , setPass] = useState("") ;
    const [passError , setPassError] = useState(false);
    const loginHandle = (e) => {
       e.preventDefault()
    }
    function getInput(e) {
        console.log(e.target.value.length)
        if(e.target.value.length < 3) {
            setNameError(true)
        }else {
            setNameError(false)
        }
    }
    function getPass (e) {
        if(e.target.value.length < 5){
            setPassError(true)
        }else {
            setPassError(false)
        }
    }
  return (
    <div>
        <form onSubmit={loginHandle}>
       name : <input type ="text"  onChange={getInput}/>
       {
        nameError?<h3>error</h3>:null 
       }
       Password : <input type = "text" onChange={getPass} required />
       {
        passError ? <h3>error in pass</h3>:null
       }
       <button>submit</button>
       </form>
    </div>
  )
}
