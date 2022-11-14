import { Box, Container} from '@mui/material'
import React from 'react'
import AboutBody from '../components/About/AboutBody'
import AboutHeads from '../components/About/AboutHeads'
import Faq from '../components/About/Faq'
import BigTitle from '../components/BigTitle'
import RecentBlogs from '../components/RecentBlogs'
import Subscribe from '../components/Home/Subscribe'
import useRecentBlogs from '../helpers/useRecentBlogs'

const About = () => {

    const { recentBlogs } = useRecentBlogs()

  return (
    <Box
        sx={{width: '100%', minHeight: '80vh'}}
    >
        <AboutHeads/>
        <Container>
            <Box sx={{padding: '25px 0', width: '100%'}}>
                <BigTitle header="About How This Platform Work." />
                <AboutBody/>
            </Box>
            <Box sx={{padding: '25px 0', width: '100%'}}>
              <BigTitle header="Frequently Asked Questions" />
              <Faq/>
            </Box>
            <Box sx={{padding: '25px 0', width: '100%'}}>
              <BigTitle header="Subscribe Us" />
              <Subscribe/>
            </Box>
            <Box sx={{padding: '25px 0', width: '100%'}}>
              <BigTitle header="Recent Posts" />
              <RecentBlogs recentBlogs={recentBlogs} />
            </Box>
        </Container>
    </Box>
  )
}

export default About