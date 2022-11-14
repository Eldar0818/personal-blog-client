import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import BigTitle from '../components/BigTitle'
import BlogFilter from '../components/Blogs/BlogFilter'
import BlogWindow from '../components/Blogs/BlogWindow'
import RecentBlogs from '../components/RecentBlogs'
import Subscribe from '../components/Home/Subscribe'
import useAllBlogs from '../helpers/useAllBlogs'
import Loading from '../components/Loading'

const Blogs = () => {

    const { loading, allBlogs } = useAllBlogs()
    const [input, setInput] = useState("");

  if(loading){
    return(
      <Loading />
    )
  }

    const handleFilterChange = (event) => {
        setInput(event.target.value);
        console.log(event.target.value);
      };
    const filteredBlogs = allBlogs?.filter(blog => {
        if(input === ""){
            return blog
        }else{
            return blog.category === input
        }
    })

  return (
    <Box sx={{minHeight: '80vh'}}>
        <Container>
            <BigTitle header="All Blogs" />
            <Box
                sx={{
                    display: 'flex',
                    padding: '25px 0'
                }}
            >
                <BlogFilter
                    input={input}
                    setInput={setInput}
                    handleFilterChange={handleFilterChange}
                />
                <Box flex={1} sx={{display:{xs: 'none', sm: 'block'}}}></Box>
                <Box flex={1} sx={{display:{sm: 'none', md: 'block'}}}></Box>
            </Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {
                filteredBlogs?.length > 0 ? filteredBlogs?.map(blog => (
                  <BlogWindow key={blog._id} blog={blog} />
                )) : <Typography>There is no blog</Typography>
              }
            </Grid>
            <Box sx={{padding: '25px 0', width: '100%'}}>
              <BigTitle header="Subscribe Us" />
              <Subscribe/>
          </Box>
          <Box sx={{padding: '25px 0', width: '100%'}}>
              <BigTitle header="Recent Posts" />
              <RecentBlogs />
          </Box>
        </Container>
    </Box>
  )
}

export default Blogs