import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' ;
export default function Form() {
  return (
    <div>
      <form >
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <h1 class='accordion-collapse' ></h1>
      </form>
    </div>
  )
}
