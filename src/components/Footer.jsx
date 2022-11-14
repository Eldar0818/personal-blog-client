import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { FooterBox } from '../muiStyled'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import RedditIcon from '@mui/icons-material/Reddit';

const Footer = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <FooterBox>
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    variant="h5"
                    color="#ffffff"
                    fontWeight='600'
                    component="a"
                    href="/"
                >
                    SIRDASH
                </Typography>
                <Stack
                    direction={ isMobile ? "column" : "row"}
                    spacing={2}
                >
                    <Typography
                        variant="p"
                        color="#ffffff"
                        component="a"
                        href="/blogs"
                        fontSize="20px"
                    >
                        Blogs
                    </Typography>
                    <Typography
                        variant="p"
                        color="#ffffff"
                        component="a"
                        href="/about"
                        fontSize="20px"
                    >
                        About
                    </Typography>
                    <Typography
                        variant="p"
                        color="#ffffff"
                        component="a"
                        href="/contact"
                        fontSize="20px"
                    >
                        Contact
                    </Typography>
                </Stack>
            </Box>
            <Box
                sx={{
                    marginTop: '50px',
                    marginBottom: '10px',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    variant='p'
                    fontSize='15px'
                    color='#ffffff'
                >
                    &copy; Web dev Yalikun Yilida 2022, All rights reserved.
                </Typography>
                <Stack
                    direction="row"
                    spacing={2}
                    paddingTop={isMobile ? '10px' : '0px'}
                >
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <InstagramIcon/>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <TwitterIcon/>
                    </a>
                    <a href="https://www.reddit.com/" target="_blank" rel="noreferrer">
                        <RedditIcon/>
                    </a>
                </Stack>
            </Box>
        </Container>
    </FooterBox>
  )
}

export default Footer