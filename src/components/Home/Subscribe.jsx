import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SubscribeBox } from '../../muiStyled'

const Subscribe = () => {

    const [subBtnClicked, setSubButtonClicked] = useState(false)
    const [subEmail, setSubEmail] = useState("")

    const handleSubClick = () => {
        if(subEmail === ""){
            alert("Provide your email!")
        }else{
            setSubButtonClicked(true)
        }
    }

  return (
    <SubscribeBox>
        <Typography
                variant="h6"
                marginBottom={2}
                sx={{
                    fontSize: '25px',
                    color: '#333',
                    fontWeight: '600',
                    textAlign: 'center'
                }}
            >
                Want to get notification via email?
        </Typography>
        <Typography
                variant="p"
                marginBottom={2}
                sx={{
                    fontSize: '20px',
                    color: '#7c7c7c',
                    textAlign: 'center'
                }}
            >
                Subscribe and get notification when new interesting topics upload!
        </Typography>
        <Paper elevation={12}
            sx={{padding: '25px 15px'}}
        >
            { 
                !subBtnClicked ? 
                <Stack direction={{ xs : "column", sm: "row" }} spacing={1} width="100%">
                <Box flex={4}>
                    <TextField 
                        fullWidth 
                        variant="outlined" 
                        label="subscribe" 
                        id="subscribe"
                        type="email"
                        placeholder='Enter Your Email'
                        onChange={e => setSubEmail(e.target.value)}
                    />
                </Box>
                <Box flex={1}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{ color: "#fff", height:  "50px" }}
                        onClick={ handleSubClick }
                    >
                        Subscribe
                    </Button>
                </Box>
            </Stack> :
            <Typography
                sx={{
                    color: 'crimson',
                    textAlign: 'center'
                }}
            >
                Thanks for subscribing us.
            </Typography>
            }
        </Paper>
    </SubscribeBox>
  )
}

export default Subscribe