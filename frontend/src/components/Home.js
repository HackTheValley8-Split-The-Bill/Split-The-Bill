import { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Avatar from './Avatar';

function User({ value, username }) {
  return (
    <Grid container justifyContent='space-between' alignItems='center' sx={{ height: '70px', overflow: 'scroll', cursor: 'pointer' }}>
      <Grid item container xs spacing={3} alignItems='center'>
        <Grid item>
          <Avatar name={username} size='56px' />
        </Grid>
        <Grid item>
          <Typography variant="h6" sx={{ fontSize: '1.2em' }}>
            {`${username}`}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1" align='center' sx={{ fontSize: '1.4em' }}>
          {(parseFloat(value) >= 0
          ? <Box component="span" sx={{ color: 'green' }}>{`$${value}`}</Box>
          : <Box component="span" sx={{ color: 'red' }}>{`-$${Math.abs(value)}`}</Box>
          )}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default function Home() {
  const [totalBalence, setTotalBalence] = useState(0);

  useEffect(() => {
    setTotalBalence(20);
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: {
            xs: '300px',
            md: 'calc(40vh - 60px)',
          },
        }}>
        <Typography variant="h1" sx={{ fontSize: '8em' }}>
          {(parseFloat(totalBalence) >= 0
          ? <Box component="span" sx={{ color: 'green' }}>{`$${totalBalence}`}</Box>
          : <Box component="span" sx={{ color: 'red' }}>{`-$${Math.abs(totalBalence)}`}</Box>
          )}
        </Typography>
      </Box>
      <Paper
        elevation={5}
        sx={{
          marginLeft: {
            xs: '15vw',
            md: 'calc(50vw - 300px)',
          },
          width: {
            xs: 'calc(70vw - 50px)',
            md: '550px',
          },
          height: {
            xs: 'calc(100vh - 410px)',
            md: 'calc(60vh - 50px)',
          },
          padding: '10px 20px 0px 30px',
        }}
      >
        <User value={10} username={"Lianting Wang"}/>
        <User value={-20} username={"Zheyuan Wei"}/>
        <User value={30} username={"Qirui"}/>
      </Paper>
    </div>
  );
}
