'use client';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#00bcd4',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  minWidth: 300,
  maxWidth: '90vw',
  outline: 'none',
};

export default function SkillsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
      sx={{
        height: '5vh',
        width: '20vw',
        marginX: '2vw',
        fontSize: '.8rem',
        color: '#00bcd4',
        bgcolor: 'var(--black)',
        border: '2px solid #00bcd4',
      }}
      variant="contained" 
      onClick={handleOpen}>
        Skills
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropProps={{
          style: { backgroundColor: 'rgba(30,30,30,0.8)' },
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
