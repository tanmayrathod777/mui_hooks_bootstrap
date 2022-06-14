import React ,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' ;

export default function Time() {
    let time = new Date().toLocaleTimeString()
    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setTime(time)
    }
    setInterval(updateTime)
    const [Time , setTime] = useState(time)
  return (
    <div>
        <h1 class="display-1">{time}</h1>
        {/* <button type="button" class="btn btn-info" onClick={updateTime}>Info</button> */}
    </div>
  )
}
