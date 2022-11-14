import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import { LoadingWrapper } from '../muiStyled'

const Loading = () => {
  return (
    <LoadingWrapper>
        <Box sx={{ display: 'flex', marginBottom: '15px' }}>
            <CircularProgress sx={{ color: "#fff" }} />
        </Box>
        <Typography color="#ffffff">Loading...</Typography>
    </LoadingWrapper>
  )
}

export default Loading