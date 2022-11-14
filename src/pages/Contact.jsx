import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import BigTitle from '../components/BigTitle'
import ContactDetails from '../components/Contact/ContactDetails'
import ContactForm from '../components/Contact/ContactForm'

const Contact = () => {
  return (
    <Box
        sx={{
            width: '100%',
            minHeight: '80vh'
        }}
    >
        <Container
            sx={{padding: '25px 0'}}
        >
            <BigTitle header="Contact" />
            <Box
                sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '15px'
                 }}
            >
                <img 
                    src="/assets/contact01.webp" 
                    alt="contact"
                    style={{ width: '345px' }}
                />
            </Box>
            <Box paddingTop="25px" width="100%">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6}>
                        <Box padding="15px" >
                            <ContactDetails/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box padding="15px">
                            <ContactForm/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    </Box>
  )
}

export default Contact