import { Box, Typography } from '@mui/material'
import React from 'react'

const ContactDetails = () => {
  return (
    <Box>
        <Typography
            variant="h4"
            marginBottom={2}
        >
            Let's get in touch:
        </Typography>
        <Typography
            variant="h6"
            fontSize="18px"
            marginBottom={2}
            sx={{ fonWeight: '300', color: '#7c7c7c' }}
        >
            Please don't hesitate to contact me if you would like to cooperate.
        </Typography>
        <br/>
        <Typography
            variant="h6"
            fontSize="18px"
            marginBottom={2}
            sx={{ fonWeight: '300', color: '#7c7c7c' }}
        >
            Available time: Monday to Friday 09:00 - 17:00<br/>
            Call: +46728403982 , Email: eldar940818@gmail.com
        </Typography>
        <Typography
            variant="h4"
            marginBottom={2}
        >
            My office:
        </Typography>
        <Box>
            <iframe title="This is a unique title" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d724.2657860572508!2d17.928859093824688!3d59.392761570857886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9e589a0317cd%3A0xe1828eb5cee96bc5!2sAlmbygatan%2014%2C%20163%2075%20Sp%C3%A5nga!5e0!3m2!1sen!2sse!4v1668334724406!5m2!1sen!2sse" 
                width="600"
                height="450"
                style={{
                    width: "100%",
                    height: "450",
                    border: '0'
                }}
            ></iframe>
        </Box>
    </Box>
  )
}

export default ContactDetails