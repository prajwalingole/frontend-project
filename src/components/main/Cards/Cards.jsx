import React from 'react'
import { Typography, Container, Grid, Card, Divider,Button } from '@material-ui/core';
import { CardActions, CardContent, } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CallMadeIcon from '@mui/icons-material/CallMade';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import useStyles from './styles';

const Cards = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxwidth="lg">
      <Grid container spacing={4}>
        <Grid item lg={4} xs={12} md={6} >
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
              <Grid container>
                <Grid item lg={10}>
                  <div className={classes.ftxt}>
                    TOTAL INCOME
                  </div>
                  <div className={classes.stxt}>
                    $589,209.78
                  </div>
                </Grid>
                <Grid item lg={2}>
                    <CallMadeIcon sx={{ color: '#00e676', fontSize: '20px' }} />
                </Grid>
              </Grid>
              <div className={classes.ttxt}>
                <span className={classes.per}>20%</span> increase compared to last week
              </div>
            </CardContent>
            <Divider />
            <CardActions className={classes.actions}>
              <Grid container>
                <Grid item lg={10}>
                  <div className={classes.sd}>
                    See Detail
                  </div>
                </Grid>
                <Grid item lg={2}>
                  <KeyboardDoubleArrowRightIcon sx={{color: '#4e4e84'}} />
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12} md={6}>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
              <Grid container>
                <Grid item lg={10}>
                  <div className={classes.ftxt}>
                    TOTAL EXPENSE
                  </div>
                  <div className={classes.stxt}>
                    $120,458.90
                  </div>
                </Grid>
                <Grid item lg={2}>
                    <SouthEastIcon sx={{ color: '#ef5350', fontSize: '20px' }} />
                </Grid>
              </Grid>
              <div className={classes.ttxt}>
                <span className={classes.per}>15%</span> decrease compared to last week
              </div>
            </CardContent>
            <Divider />
            <CardActions className={classes.actions}>
            <Grid container>
                <Grid item lg={10}>
                  <div className={classes.sd}>
                    See Detail
                  </div>
                </Grid>
                <Grid item lg={2}>
                  <KeyboardDoubleArrowRightIcon sx={{color: '#4e4e84'}} />
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12} md={6} >
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
              <Grid container>
                <Grid item lg={10}>
                  <div className={classes.ftxt}>
                    TOTAL INCOME
                  </div>
                  <div className={classes.stxt}>
                    502,903
                  </div>
                </Grid>
                <Grid item lg={2}>
                    <CallMadeIcon sx={{ color: '#00e676', fontSize: '20px' }} />
                </Grid>
              </Grid>
              <div className={classes.ttxt}>
                <span className={classes.per}>80%</span> increase compared to last week
              </div>
            </CardContent>
            <Divider />
            <CardActions className={classes.actions}>
              <Grid container>
            <Grid item lg={10}>
                  <div className={classes.sd}>
                    See Detail
                  </div>
                </Grid>
                <Grid item lg={2}>
                  <KeyboardDoubleArrowRightIcon sx={{color: '#4e4e84'}} />
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cards