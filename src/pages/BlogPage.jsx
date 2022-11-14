import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import useAllBlogs from '../helpers/useAllBlogs'
import { useLocation } from 'react-router-dom'
import { Favorite, Share } from '@mui/icons-material'

const BlogPage = () => {

    const { allBlogs } = useAllBlogs()
    const params = useLocation().pathname.split('/')[2]

    const clickedBlog = allBlogs?.filter(blog => blog.slug === params)[0]
    console.log(clickedBlog);

  return (
    <Box sx={{ minHeight: '80vh' }}>
        <Container sx={{ padding: '25px 0' }}>
           <Box
            sx={{ 
                maxWidth: '650px',
                margin: '0 auto',
                display: 'flex', 
                flexDirection: 'column',
            }}
           >
            <Typography
                variant="h4"
                sx={{ marginBottom: '15px', padding: '0 10px' }}
            >
                {clickedBlog?.title}
            </Typography>
            <Typography
                variant='p'
                sx={{ 
                    marginBottom: '15px',
                    color: '#7c7c7c',
                    paddingLeft: '10px'
                }}
            >
                {clickedBlog?.category}, {new Date(clickedBlog?.createdAt).toLocaleDateString()}
            </Typography>
            <Box
                component="img"
                src={clickedBlog?.poster}
                alt={clickedBlog?.title}
                sx={{
                    width: '100%',
                    height: '450px',
                    objectFit: 'cover',
                    marginBottom: '15px'
                }}
            />

            <Box
                sx={{ padding: '20px 10px' }}
            >
                {
                    clickedBlog?.text.split("**").map((txt, index) => (
                        <Typography key={index}
                            sx={{
                                marginBottom: '15px',
                                "&:first-letter": {
                                    paddingLeft: '10px'
                                }
                            }}
                        >
                            {txt}
                        </Typography>
                    ))
                }
            </Box>

            <Box
                display="flex"
                padding="25px 0"
            >
                <Favorite
                    sx={{
                        cursor: 'pointer',
                        color: "#7c7c7c",
                        margin: '0 10px'
                    }}
                />
                <Share
                    sx={{
                        cursor: 'pointer',
                        color: "#7c7c7c",
                        margin: '0 10px'
                    }}
                />
            </Box>

           </Box>
        </Container>
    </Box>
  )
}

export default BlogPage