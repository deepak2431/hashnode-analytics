import React from 'react';
import { Paper, Typography, Grid, Stack, Divider, Button} from '@mui/material';

const SummaryCard = () => {
    
    return (
      <div className="summary-card">
        <Paper elevation={0} style={{ marginTop: '3rem', marginLeft: '8rem' }}>
        <Typography variant='h5' style={{fontWeight: 'bolder'}}>Month name</Typography>
        <Divider variant="fullWidth" />
        <Typography variant='body1' style={{color: '#2963ff'}}>BLOG HIGHLIGHTS</Typography>
          <Grid container spacing={2} style={{marginTop: '0.07rem'}}>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
              <Typography variant="h4" style={{fontWeight: 'bolder'}}>Top Blog</Typography>
              <Typography variant='h5' style={{color: '#2963FF', fontWeight: 'bolder'}} >Blog title</Typography>
              <Button variant='contained' style={{width: '30%', backgroundColor: '#E8E8E8', color:'#000000'}}>View Blog</Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
              <Typography variant="h4" style={{fontWeight: 'bolder'}}>Top 5 Blogs</Typography>
              <Stack spacing={1}>
                <Typography variant='h6'>Python tips</Typography>
                <Typography variant='h6'>Python tips</Typography>
                <Typography variant='h6'>Python tips</Typography>
                <Typography variant='h6'>Python tips</Typography>
                <Typography variant='h6'>Python tips</Typography>
              </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
              <Typography variant="h4" style={{fontWeight: 'bolder'}}>Month Name Summary</Typography>
              <Stack direction="row" spacing={4}>
                <Stack spacing={1}>
                 <Typography variant="body1">Total posts</Typography>
                 <Typography variant="h6" style={{fontWeight: 'bolder'}}>678</Typography>
                </Stack>
                <Stack spacing={1}>
                 <Typography variant="body1">Total reactions</Typography>
                 <Typography variant="h6" style={{fontWeight: 'bolder'}}>678</Typography>
                </Stack> 
                <Stack spacing={1}>
                 <Typography variant="body1">Total popularity</Typography>
                 <Typography variant="h6" style={{fontWeight: 'bolder'}}>678</Typography>
                </Stack>
              </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
}

export default SummaryCard;