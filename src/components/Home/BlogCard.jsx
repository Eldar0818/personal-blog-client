import { Avatar, Button, Card, CardActions, CardContent, 
  CardHeader, CardMedia, Grid, Typography} from '@mui/material'

const BlogCard = ({blog}) => {

  return (
    <Grid item sm={6} marginBottom={5}>
      <Card sx={{maxWidth: '550px'}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "crimson" }} aria-label="recipe">
              EY
            </Avatar>
          }
          title={blog.title.substring(0, 75)}
          subheader={new Date(blog.createdAt).toLocaleString()}
        />
        <Typography
          textAlign="center"
          color="secondary"
        >
          {blog.category}
        </Typography>
        <CardMedia
        component="img"
        height="250"
        image={blog.poster}
        alt={blog.title}
      />
      <CardContent>
        <Typography
          variant="span"
          color="#7c7c7c"
        >
          {blog.text.substring(0, 200)}...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" component="a" href={`/blog/${blog.slug}`}>Read More</Button>
      </CardActions>
      </Card>
    </Grid>
  )
}

export default BlogCard