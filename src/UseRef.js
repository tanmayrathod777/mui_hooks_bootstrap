import React , {useRef} from 'react'

export default function UseRef() {
    const HandleInput = () =>{
        inputRef.current.value = "1000" ;
        inputRef.current.focus()
        inputRef.current.style.color = "red" ;
    }
    let inputRef = useRef(null)
  return (
    <div>
        <input type ="text" ref ={inputRef}></input>
        <button onClick={HandleInput}>handleinput</button>
    </div>
  )
}
