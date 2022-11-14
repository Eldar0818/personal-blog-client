import { AppBar, Typography, Button, Menu, MenuItem } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useState } from 'react'
import { ToolbarFlex } from '../muiStyled'

const Navbar = () => {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Container>
        <ToolbarFlex>
            <Typography
                 variant="h6"
                 noWrap
                 component="a"
                 href="/"
                 color="#fff"
                 >
                SIRDASH
            </Typography>
            <Box>
             <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="outlined"
                size='large'
                color="common"
              >
                Menu
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose} component="a" href="/blogs">Blogs</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="/about">About</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="/contact">Contact</MenuItem>
              </Menu>
            </Box>
        </ToolbarFlex>
      </Container>
    </AppBar>
  )
}

export default Navbar