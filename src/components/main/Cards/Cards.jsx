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
      <Grid container spacing={1}>
        <Grid item>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
              <Grid container>
                <Grid item>
                  <div className={classes.ftxt}>
                    TOTAL INCOME
                  </div>
                  <div className={classes.stxt}>
                    $589,209.78
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.calldiv}>
                    <CallMadeIcon sx={{ color: '#00e676', fontSize: '20px' }} />
                  </div>
                </Grid>
              </Grid>
              <div className={classes.ttxt}>
                <span className={classes.per}>20%</span> increase compared to last week
              </div>
            </CardContent>
            <Divider />
            <CardActions className={classes.actions}>
              <Grid container>
                <Grid item>
                  <div className={classes.sd}>
                    See Detail
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.righticon}><KeyboardDoubleArrowRightIcon sx={{color: '#4e4e84'}} /></div>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
              <Grid container>
                <Grid item>
                  <div className={classes.ftxt}>
                    TOTAL EXPENSE
                  </div>
                  <div className={classes.stxt}>
                    $120,458.90
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.calldiv}>
                    <SouthEastIcon sx={{ color: '#ef5350', fontSize: '20px' }} />
                  </div>
                </Grid>
              </Grid>
              <div className={classes.ttxt}>
                <span className={classes.per}>15%</span> decrease compared to last week
              </div>
            </CardContent>
            <Divider />
            <CardActions className={classes.actions}>
            <Grid container>
                <Grid item>
                  <div className={classes.sd}>
                    See Detail
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.righticon}><KeyboardDoubleArrowRightIcon sx={{color: '#4e4e84'}} /></div>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
              <Grid container>
                <Grid item>
                  <div className={classes.ftxt}>
                    TOTAL INCOME
                  </div>
                  <div className={classes.stxt}>
                    502,903
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.calldiv}>
                    <CallMadeIcon sx={{ color: '#00e676', fontSize: '20px' }} />
                  </div>
                </Grid>
              </Grid>
              <div className={classes.ttxt}>
                <span className={classes.per}>80%</span> increase compared to last week
              </div>
            </CardContent>
            <Divider />
            <CardActions className={classes.actions}>
              <div className={classes.cont}>
            <Grid  container>
                <Grid item>
                  <div className={classes.sdt}>
                    See Detail
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.righticon}><KeyboardDoubleArrowRightIcon sx={{color: '#4e4e84',marginBottom:'7px'}} /></div>
                </Grid>
              </Grid>
              </div>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cards