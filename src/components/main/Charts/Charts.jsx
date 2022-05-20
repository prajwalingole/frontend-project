import React from 'react'
import SocialChart from './SocialChart/SocialChart';
import SalesChart from './SalesChart/SalesChart';
import {Container,Grid} from '@material-ui/core';
import useStyles from './styles';


const Charts = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item lg={8}>
          <SalesChart />
        </Grid>
        <Grid item lg={4}>
          <SocialChart />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Charts