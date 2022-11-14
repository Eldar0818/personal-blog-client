import { Box, Button, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'

const ContactForm = () => {
  return (
    <Box>
         <Typography
            variant="h4"
            marginBottom={2}
        >
            Send Email From Here:
        </Typography>
        <form>
            <TextField 
                type="email" 
                fullWidth 
                label="Email" 
                id="Email" 
                sx={{ marginBottom: '15px' }}
            />
            <TextField 
                type="text" 
                fullWidth 
                label="Subject" 
                id="Subject" 
                sx={{ marginBottom: '15px' }}
            />
            <TextareaAutosize
                maxRows={10}
                aria-label="maximum height"
                placeholder="Story"
                style={{ 
                    width: '100%', 
                    resize: 'none', 
                    height: '350px', 
                    padding: '10px',
                    fontSize: '18px',
                    outline: 'none',
                    marginBottom: '15px'
                }}
            />
            <Button 
                type="submit"
                variant='contained'
                size="large"
                sx={{color: "#ffffff"}}
            >
                Send Message
            </Button>
        </form>
    </Box>
  )
}

export default ContactForm