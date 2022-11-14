import { Box, Grid } from '@mui/material'
import { Container } from '@mui/system'
import BigTitle from '../components/BigTitle'
import BlogCard from '../components/Home/BlogCard'
import Hero from '../components/Home/Hero'
import Introduce from '../components/Home/Introduce'
import RecentBlogs from '../components/Home/RecentBlogs'
import Subscribe from '../components/Home/Subscribe'
import useRecentBlogs from '../helpers/useRecentBlogs'
import useTrendings from '../helpers/useTrendings'

const Home = () => {

  const { trendings } = useTrendings()
  const { recentBlogs } = useRecentBlogs()

  return (
    <Box>
        <Hero/>
        <Container>
          <Box sx={{padding: '25px 0', width: '100%'}}>
            <BigTitle header="Trending posts" />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {
                trendings?.map(blog => (
                  <BlogCard key={blog._id} blog={blog} />
                ))
              }
            </Grid>
          </Box>
          <Box sx={{padding: '25px 0', width: '100%'}}>
             <Introduce/>
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

export default Home