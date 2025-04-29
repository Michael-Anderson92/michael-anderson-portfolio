'use client';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useForm, ValidationError } from '@formspree/react';

// Main Modal Style
const mainStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'var(--black)', // Custom background color
  color: 'var(--white)', // Custom text color
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  height: '75vh', // Full height for the modal
  width: '90vw', // Full width for the modal
  maxWidth: '100vw', // Prevent overflow
  outline: 'none',
  display: 'flex', // Use flexbox for alignment
  flexDirection: 'column', // Stack elements vertically
  alignItems: 'center', // Align items to the center
  justifyContent: 'space-between', // Space between elements
};

const warningStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'var(--black)', // Custom background color
  color: 'var(--white)', // Custom text color
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  width: '80vw', // Moderate width for warning modal
  maxWidth: '100vw', // Prevent horizontal overflow
  outline: 'none',
  textAlign: 'center',
};

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setShowWarning(false); // Reset warning state
  };
  const [state, handleSubmit] = useForm("mwplrkvj");

  if (state.succeeded) {
    return (
      <Button
        sx={{
          height: '5vh',
          width: '20vw',
          marginX: '2vw',
          fontSize: '.8rem',
        }}
        variant="contained"
      >
        Thanks!
      </Button>
    );
  }

  return (
    <div>
      <Button
        sx={{
          height: '5vh',
          width: '20vw',
          marginX: '2vw',
          fontSize: '.8rem',
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Contact
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
        <Box sx={mainStyle}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{
              textAlign: 'center',
              marginTop: '8%',
              marginBottom: '2rem',
            }}
          >
            Thanks for contacting me!
          </Typography>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              width: '100%',
            }}
          >
            {/* Email Field */}
            <div style={{ width: '80%' }}>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  color: 'var(--white)',
                  marginBottom: '1rem',
                }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid var(--gray)',
                  borderRadius: '4px',
                  backgroundColor: 'var(--black)',
                  color: 'var(--white)',
                }}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Message Field */}
            <div style={{ width: '80%' }}>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  color: 'var(--white)',
                  marginBottom: '1rem',
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                required
                style={{
                  width: '100%',
                  height: '40vh',
                  overflow: 'auto',
                  padding: '0.5rem',
                  border: '1px solid var(--gray)',
                  borderRadius: '4px',
                  backgroundColor: 'var(--black)',
                  color: 'var(--white)',
                }}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                style={{
                  backgroundColor: 'var(--blue)',
                  color: 'var(--white)',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                Submit
              </button>

              {/* Back Button */}
              <button
                type="button"
                onClick={() => setShowWarning(true)}
                style={{
                  backgroundColor: 'var(--gray)',
                  color: 'var(--white)',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                Back
              </button>
            </div>
          </form>
        </Box>
      </Modal>

      {/* Warning Popup Modal */}
      <Modal
        open={showWarning}
        onClose={() => setShowWarning(false)}
        aria-labelledby="warning-modal-title"
        closeAfterTransition
        BackdropProps={{
          style: { backgroundColor: 'rgba(30,30,30,0.8)' },
        }}
      >
        <Box sx={warningStyle}>
          <Typography
            id="warning-modal-title"
            variant="h6"
            sx={{
              marginBottom: '1rem',
            }}
          >
            Are you sure you want to go back? Unsaved changes will be lost.
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Button
              sx={{
                backgroundColor: 'var(--blue)',
                color: 'var(--white)',
                padding: '0.5rem 1rem',
                fontSize: '.8rem',
              }}
              onClick={handleClose}
            >
              Yes, go back
            </Button>
            <Button
              sx={{
                backgroundColor: 'var(--gray)',
                color: 'var(--white)',
                padding: '0.5rem 1rem',
                fontSize: '.8rem',
              }}
              onClick={() => setShowWarning(false)}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}