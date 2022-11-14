import { Box, Typography } from "@mui/material"

const BigTitle = ({header}) => {
  return (
    <Box justifyContent="center">
        <Typography
            component="div"
            variant="h4"
            color="primary"
            marginTop={3}
            marginBottom={3}
            fontWeight="600"
        >
            {header}
        </Typography>
    </Box>
  )
}

export default BigTitle