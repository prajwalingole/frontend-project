import React from 'react'
import Box from '@mui/material/Box';
import { Typography, Button, Grid, Container } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import useStyles from './styles';

const Share = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container>
        <Grid item xs={9.5}>
          <Typography variant='h6' component="div" sx={{fontWeight: "bold",color: '#4e4e84',fontSize: '16px'}}>
            Hi, Albert Tristian
          </Typography>
          <Typography variant='h6' component="div" sx={{fontSize: "12px",color: '#bdbdbd'}}>
            welcome back to analyze
          </Typography>
        </Grid>
        <Grid item xs={2.5} >
          <Grid container spacing={0.5}>
            <Grid item xs={6}>
              <Button className={classes.btn} size="small" variant="outlined" sx={{color: '#8676ff'}}>Share <ShareOutlinedIcon /></Button>
            </Grid>
            <Grid item xs={6}>
              <Button className={classes.btn} size="small" variant="contained" sx={{backgroundColor: '#8676ff'}}>Export <DownloadOutlinedIcon /></Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Share