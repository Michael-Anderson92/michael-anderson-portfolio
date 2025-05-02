'use client';

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const mainStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'var(--black)', // #1e1e1e
  color: 'var(--white)', // #f5f5f5
  border: '2px solid var(--blue)', // #00bcd4 border
  borderRadius: '12px', // Softer corners
  boxShadow: '0 8px 32px rgba(0, 188, 212, 0.2)', // Subtle blue shadow
  p: 5,
  height: '100vh',
  width: '100vw',
  maxWidth: '100vw',
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  overflowY: 'auto',
};