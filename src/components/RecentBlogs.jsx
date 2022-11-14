import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import useRecentBlogs from '../helpers/useRecentBlogs'

const RecentBlogs = () => {

    const { recentBlogs } = useRecentBlogs()

  return (
    <Grid container
        width="100%"
        spacing={2}
    >
        {
            recentBlogs?.map(blog => (
                <Grid
                    item 
                    key={blog._id}
                    xs={12} sm={6} md={4}  
                >
                   <Card component="a" href={`/blog/${blog.slug}`}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="350"
                            image={blog.poster}
                            alt={blog.title}
                        />
                        <CardContent>
                            <Typography
                                variant="h6"
                                fontSize="15px"
                                sx={{  marginBottom: "5px" }}
                            >
                                {blog.title.substring(0, 35) + '...'}
                            </Typography>
                            <br/>
                            <Typography
                                variant="h6"
                                fontSize="15px"
                                sx={{  marginBottom: "5px", color: "#7c7c7c" }}
                            >
                                {new Date(blog.createdAt).toLocaleString()}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                   </Card>
                </Grid>
            ))
        }
    </Grid>
  )
}

export default RecentBlogs