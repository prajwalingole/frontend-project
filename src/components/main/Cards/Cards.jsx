import React from 'react'
import { Typography, Container, Grid, Card, Button } from '@material-ui/core';
import { CardActions, CardContent,} from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import useStyles from './styles';

const Cards = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container} maxwidth="lg">
      <Grid container spacing={1}>
        <Grid item>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
              <div className={classes.ftxt}>
                TOTAL INCOME
              </div>
              <div className={classes.stxt}>
                $589,209.78
              </div>
              <div className={classes.ttxt}>
                20% increase compared to last week
              </div>
            </CardContent>
            <CardActions className={classes.actions}>
              <Button className={classes.btn} variant="text"><Typography styles={{fontSize: [8, "!important"]}}>See Details</Typography>  <KeyboardDoubleArrowRightIcon className={classes.icon} /></Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
              <div className={classes.ftxt}>
                TOTAL INCOME
              </div>
              <div className={classes.stxt}>
                $589,209.78
              </div>
              <div className={classes.ttxt}>
                20% increase compared to last week
              </div>
            </CardContent>
            <CardActions className={classes.actions}>
              <Button className={classes.btn} variant="text"><Typography styles={{fontSize: [8, "!important"]}}>See Details</Typography>  <KeyboardDoubleArrowRightIcon className={classes.icon} /></Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card} variant="outlined">
            <CardContent className={classes.content}>
            <div className={classes.ftxt}>
                TOTAL INCOME
              </div>
              <div className={classes.stxt}>
                $589,209.78
              </div>
              <div className={classes.ttxt}>
                20% increase compared to last week
              </div>
            </CardContent>
            <CardActions className={classes.actions}>
              <Button size="small" variant="contained">See Details <KeyboardDoubleArrowRightIcon className={classes.icon} /></Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Cards