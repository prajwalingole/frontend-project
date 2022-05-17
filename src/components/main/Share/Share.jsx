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
          <Typography className={classes.fxt} varaint="h7">
            Hi, Albert Tristain
          </Typography>
          <Typography className={classes.stxt} variant="h7">
            welcome back to analyze
          </Typography>
        </Grid>
        <Grid item xs={2.5} >
        <Grid container spacing={0.5}>
          <Grid item xs={6}>
            <Button className={classes.btn} size="small" variant="outlined">Share <ShareOutlinedIcon /></Button>
            </Grid>
            <Grid item xs={6}>
          <Button className={classes.btn} size="small" variant="contained">Export <DownloadOutlinedIcon /></Button>
        </Grid>
        </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Share