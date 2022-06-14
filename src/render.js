import React , {useState} from 'react'

export default function Render() {
    const [loggedIn , setLoggedIn] = useState(false)

    if(loggedIn) {
        return (
            <div>
                <h1>welcome user</h1>
                <button onClick={() => setLoggedIn(false)}>user</button>

            </div>
          )
    }else {
        return (
            <div>
                <h1>welcome Guest</h1>
                <button onClick={() => setLoggedIn(true)}>click</button>

            </div>
          )
    }
  
}
