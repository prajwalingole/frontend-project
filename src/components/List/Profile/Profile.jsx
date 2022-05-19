import React from 'react'
import { Card,Container,Grid,Typography,CardMedia, CardContent} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ImageListItem } from '@mui/material';
import img03 from './img03.jpeg'
import useStyles from './styles';
const Profile = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={4}>
      {/* <CardMedia
        component="img"
        height="140"
        image="img03"
        alt="logo"
      /> */}
      <div className={classes.img}>
      <ImageListItem >
          <img src={img03} alt="" />
        </ImageListItem>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={classes.ftxt}>Albert Tristian</div>
        <div className={classes.stxt}>Sr. Manager</div>
      </Grid>
      <Grid item xs={2}>
        <KeyboardArrowDownIcon className={classes.icon} />
      </Grid>
      </Grid>
    </Card>
  )
}

export default Profile