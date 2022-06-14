import React , {useState} from 'react'
import "./style.css"


export default function App() {
  const [data ,setData] = useState(null);
  const [print , setPrint] = useState(false) ;
  function getData (val) {
    setData(val.target.value) ;
    setPrint(false);
  }
  return (
   
    <div>
       
      <input type="text" onChange={getData} />
      {
        print ? <h1>{data}</h1> :null
      }
      <button onClick={() => setPrint(true)}>print</button>       
    </div>
  )
}
