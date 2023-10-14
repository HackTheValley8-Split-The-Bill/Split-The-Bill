// import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
//import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
      <Container>
        {/* Big Header Box */}
        <Paper
          style={{
            padding: '100px',
            marginBottom: '16px',

          }}
        >
          <Typography variant="h4">Dashboard</Typography>
          {"Total:"}
        </Paper>
        {/*small boxes*/}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{minHeight: '100px',}}>
              <Typography variant="h6">Username 1</Typography>
              {/* Place content for the first small box here */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{minHeight: '100px',}}>
              <Typography variant="h6">Username 2</Typography>
              {/* Place content for the second small box here */}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{minHeight: '100px',}}>
              <Typography variant="h6">Username 3</Typography>
              {/* Place content for the third small box here */}
            </Paper>
          </Grid>
          {/* You can add more small boxes as needed */}
        </Grid>
      </Container>
    
  );
}
