import { Box, Button, Container, Typography } from '@mui/material'
import { HeroImage } from '../../muiStyled'

const Hero = () => {

    const bgUrl = '/assets/background-blog.webp'
   
  return (
    <Box position="relative">
        <HeroImage
             component="img"
             src={bgUrl}
             alt="hero-bg"
        />
        <Box
             sx={{
                padding: '25px 0', 
                position: 'absolute', 
                top: '0', 
                zIndex: '99',
                width: '100%'
            }}
        >
        <Container>           
                <Box flex={1}>
                    <Typography
                        component="p"
                        color="#7c7c7c"
                        variant="h5"
                        marginTop={10}
                        marginBottom={5}
                    >
                        Understand Each Other And Learn From Each Other.
                    </Typography>
                    <Typography
                        variant="h3"
                        component="div"
                        color="primary"
                        marginBottom={5}
                        fontWeight="600"
                    >
                        SIRDASH WELCOMES YOU!
                    </Typography>
                    <Typography
                        variant="p"
                        component="div"
                        color="#7c7c7c"
                        marginBottom={5}
                        fontSize="20px"
                    >
                        Every Wednesday And Friday Upload A Interesting Blogs About World And Life
                    </Typography>
                    <Button
                        variant='outlined'
                        color="primary"
                        component="a"
                        href="/about"
                    >
                        Check More
                    </Button>
                </Box>
        </Container>
        </Box>
    </Box>
  )
}

export default Hero