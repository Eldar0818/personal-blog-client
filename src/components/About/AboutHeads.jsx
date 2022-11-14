import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { AboutHeader, SectionImage } from '../../muiStyled';

const AboutHeads = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <AboutHeader
        >
          <Container
            sx={{ padding: '25px 0' }}
          >
            <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
                <Box flex={1} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    padding: '0 20px'
                }}>
                    <Typography
                        variant='h4'
                        sx={{ 
                            fontSize: '35px',
                            color: '#fff',
                            fontWeight: '600',
                            letterSpacing: '1px',
                            marginBottom: '15px'
                        }}
                    >
                        I am looking forward to give you the best contents
                    </Typography>
                    <Typography
                        variant='p' 
                        sx={{ 
                            fontSize: '18.5px',
                            color: '#fff',
                            fontWeight: '300',
                            letterSpacing: '1px',
                            lineHeight: '27px'
                        }}
                    >
                    I have had occasional writer’s block; but for the most part, coming up with ideas has never been an issue. If you pay attention to the world around you and listen to people, you’ll get a flurry of potential ideas for posts.
                    </Typography>
                </Box>
                <Box flex={1}>
                    <SectionImage
                        component="img"
                        src="/assets/about.webp"
                        alt="about"
                        sx={{borderRadius: '25px'}}
                    />
                </Box>
            </Stack>
          </Container>
        </AboutHeader>
    )
}

export default AboutHeads