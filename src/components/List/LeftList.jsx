import React from 'react'
import { List, Divider, Typography,Grid } from '@material-ui/core';
import  {mainListItems, secondaryListItems}  from './listItems'; 
import Profile from './Profile/Profile';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import useStyles from './styles';

const LeftList = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <ViewCompactIcon />
        <Typography className={classes.title} gutterbottom>
          Analyze.
        </Typography>
      </Grid>
    <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
        <Divider sx={{ my: 1 }} />
    </List>
    <div>
    <Profile />
    </div>
    </div>
  )
}

export default LeftList