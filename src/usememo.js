import React , {useMemo, useState} from 'react'

export default function Usememo() {
    const [count , setCount] = useState(0)
    const [item , setItem] = useState(10)
    const multicount = useMemo(function multi() {
        return count * 5 ;

    } , [count])
  return (
    <div>
        <h1>Hooks</h1>
        <button onClick={()=>setCount(count + 1)}>update</button>
        <button onClick={()=>setItem(item + 1)}>update</button>

        <h2>Count :{count}</h2>
        <h2>Item :{item}</h2>
        <h2>Unneccesary function :{multicount}</h2>

    </div>
  )
}
