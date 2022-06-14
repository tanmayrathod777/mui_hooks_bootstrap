import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';import React from 'react'
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';





export default function App() {
  return (<div>

    <card>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField id="outlined-basic" label="Name" variant="outlined" />
       <TextField id="outlined-basic" label="Age" variant="outlined" /> <br></br>
       <TextField id="outlined-basic" label="Password" variant="outlined" />

    </Box>
    </card>
  </div>
  )
}
