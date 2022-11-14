import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { SectionImage, IntroContent, IntroBtn } from '../../muiStyled'

const Introduce = () => {

    const introBg = '/assets/introduce.png'

  return (
    <Stack direction={{md : "row"}}>
       <IntroContent>
            <Box>
                <Typography
                    variant="h4"
                    marginBottom={2}
                    sx={{fontWeight: '600'}}
                >
                    Few Words About The Webside
                </Typography>
                <Typography
                    variant="p"
                    sx={{
                        fontSize: '20px',
                        color: '#f0f0f0'
                    }}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima ut vel quaerat dolores dolorum laudantium. Adipisicing elit. Aliquid ipsa nemo dolor quis sit libero.
                </Typography>
            </Box>
            <br/>
            <IntroBtn variant='contained' size="large" component="a" href="/about">
                About Us
            </IntroBtn>
       </IntroContent>
       <Box flex={1}>
            <SectionImage
                component="img"
                src={introBg}
                alt="Intro"
            />
        </Box>
  </Stack>
  )
}

export default Introduce