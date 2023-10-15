// import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
//import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Spawnuser({value,username}) {
  return (
    <Paper
      style={{
        width: '600px',
        height: '100px',
        display: 'flex',
        //justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: 'grey',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
        }}
      >
        {"icon"}
      </Box>
      {username+": "+"$"+value}
    </Paper>
  );
}
function user({username,x,y})
{
  return (
    <Box
      sx={{
        position: 'absolute', 
        left: x, 
        top: y,
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: '10px',
        width: 300,
        height: 300,
        backgroundColor: 'lightblue',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      > {"username"}</Box>
  );
}
export default function Home() {
  return (
    <>
    
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // Align to the top
        height: '100vh', // Set the height of the container to the viewport height
      }}
    >
      <Typography variant="h4">
        Total <br /> $100
      </Typography>
    </Container>
    
    <Container
      style={{
        position: 'absolute',
        left: '30%', 
        top: '30%',
      }}
      >
      <Spawnuser value={10} username={"user1"}/>
      <Spawnuser value={20} username={"user2"}/>
      <Spawnuser value={30} username={"user3"}/>
    </Container>
    </>
  );
}
