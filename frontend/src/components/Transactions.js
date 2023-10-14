import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import { useState } from 'react';

export default function Transactions() {
  return (
    <Container>
      {/* Transaction Header */}
      <Paper
        style={{
          padding: '20px',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h4">Transactions</Typography>
      </Paper>

      {/* Transaction Details */}
      <Paper
        style={{
          padding: '20px',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h5">Transaction Details</Typography>
        {/* Place content for transaction details here */}
      </Paper>

      {/* Payment History */}
      <Paper
        style={{
          padding: '20px',
          marginBottom: '16px',
        }}
      >
        <Typography variant="h5">Payment History</Typography>
        {/* Place content for payment history here */}
      </Paper>
    </Container>
  );
}

