import React from 'react';
import { Paper, Typography, Grid, Stack } from '@mui/material';

const SummaryCard = () => {
    
    return (
      <div className="summary-card">
        <Paper elevation={0}>
          <Stack direction="column" spacing={6}>
            <Stack direction="row" spacing={3}>
              <Typography variant="h5">Top posts</Typography>
              <Typography variant="h5" style={{ color: "gray" }}>
                Appreciation
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </div>
    );
}

export default SummaryCard;