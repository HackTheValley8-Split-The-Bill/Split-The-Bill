import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function Login() {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Paper
          style={{position: 'absolute', 
          left: '50%', 
          top: '20%',
          display: 'flex',
          alignItems:'center',
          transform: 'translate(-50%, -50%)',
          justifyContent:'center',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          backgroundColor: 'lightblue',
          border: '2px solid black',
          marginBottom: '16px',
        }}
        sx={{
          backgroundColor: 'lightblue',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        {"User"}
      </Paper>
      <TextField
        label="Username"
        variant="outlined"
        style={{ marginBottom: '16px',
        position: 'absolute', 
        left: '40%', 
        top: '32%', }}
        InputProps={{ style: { width: '300px' } }}
      />
      <TextField
        label="Password"
        variant="outlined"
        style={{ marginBottom: '16px',
        position: 'absolute', 
        left: '40%', 
        top: '40%', }}
        InputProps={{ style: { width: '300px' } }}
      />
      <p
        style={{
        position: 'absolute', 
        left: '49%', 
        top: '45%', }}
      >
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">forgot your password?</a>
      </p>
      <Box
      sx={{
        position: 'absolute', 
        left: '52%', 
        top: '50%',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: '10px',
        width: 100,
        height: 40,
        backgroundColor: 'lightblue',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      > {"Login"}</Box>
      <Box
      sx={{
        position: 'absolute', 
        left: '41%', 
        top: '50%',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: '10px',
        width: 100,
        height: 40,
        backgroundColor: 'lightblue',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      > {"Sign up"}</Box>
    </Container>
  );
}


