import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const BlogFilter = ({input, handleFilterChange}) => {

  return (
    <Box flex={1}>
     <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={input}
            label="Age"
            onChange={handleFilterChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value="Life">Life</MenuItem>
          <MenuItem value="Health">Health</MenuItem>
          <MenuItem value="Technology">Technology</MenuItem>
          <MenuItem value="Sport">Sport</MenuItem>
        </Select>
     </FormControl>
    </Box>
  )
}

export default BlogFilter