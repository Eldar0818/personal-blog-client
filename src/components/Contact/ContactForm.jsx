import { Box, Button, Modal, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid skyblue',
    boxShadow: 24,
    p: 4,
  };

function Messenger ({open, handleClose, text}){
    
    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: 'cornflowerblue' }}>
            {text}
          </Typography>
        </Box>
      </Modal>
    )
}

const ContactForm = () => {

    const [openModal, setOpenModal] = useState(false)
    const [confirmText, setConfirmText] = useState("")

    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        handleOpenModal()
        setConfirmText("Thanks for you sent message to us, We will answer you as soon as possible.")
        setTimeout(()=> {
            handleCloseModal()
        }, 4500)
    }

  return (
    <Box>
         <Typography
            variant="h4"
            marginBottom={2}
        >
            Send Email From Here:
        </Typography>
        <form onSubmit={handleSubmit}>
            <TextField 
                type="email" 
                fullWidth 
                label="Email" 
                id="Email" 
                sx={{ marginBottom: '15px' }}
                required
            />
            <TextField 
                type="text" 
                fullWidth 
                label="Subject" 
                id="Subject" 
                sx={{ marginBottom: '15px' }}
                required
            />
            <TextareaAutosize
                maxRows={10}
                aria-label="maximum height"
                placeholder="Story"
                style={{ 
                    width: '100%', 
                    resize: 'none', 
                    height: '350px', 
                    padding: '10px',
                    fontSize: '18px',
                    outline: 'none',
                    marginBottom: '15px'
                }}
                required
            />
            <Button 
                type="submit"
                variant='contained'
                size="large"
                sx={{color: "#ffffff"}}
            >
                Send Message
            </Button>
        </form>
        <Messenger 
            open={openModal}
            handleClose={handleCloseModal}
            text={confirmText}
        />
    </Box>
  )
}

export default ContactForm