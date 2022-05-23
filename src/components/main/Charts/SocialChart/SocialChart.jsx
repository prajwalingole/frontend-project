import React from 'react'
import { Box, Grid, Typography, Card } from '@mui/material';
import { ResponsiveContainer, Pie, PieChart, Cell } from 'recharts';
import { SocialData } from '../Data';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import logo1 from './logo1.png';
import useStyles from './styles';


const SocialChart = () => {
  const classes = useStyles();
  return (
    <Card>
      <Grid container sx={{marginTop: '4px',marginBottom: '3px'}}>
        <Grid item lg={10} xs={10} md={10}>
          <div className={classes.title}>Social Source</div>
        </Grid>
        <Grid item lg={2} xs={2} md={2}>
          <MoreHorizIcon sx={{ color: '#bdbdbd' }} />
        </Grid>
      </Grid>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          {SocialData.map((entry, index) => (
            <Pie
              data={[entry]}
              cx="50%"
              cy={100}
              startAngle={entry.st}
              endAngle={entry.ed}
              innerRadius={entry.inr}
              outerRadius={entry.otr}
              paddingAngle={0}
              dataKey="value"
            >
              <Cell key={`cell-${index}`} fill={entry.color} />
            </Pie>
          ))}
        </PieChart>
      </ResponsiveContainer>
      <Box>
        <Box sx={{
          position: "absolute", left: "83%", top: "380px", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column",
          alignItems: "center",
        }}
        >
          <Typography
            variant="h7"
            component="h7"
            sx={{
              fontSize: "10px",
              color: '#c8c9d6'
            }}
          >
            TOTAL SALES
          </Typography>
          <Typography variant="h5" component="h4"
            sx={{
              color: '#494980',
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            3,234
          </Typography>
          <Typography
            variant="h5"
            component="h4"
            sx={{
              fontSize: "10px",
              fontWeight: "bold",
              color: '#494980'
            }}
          >
            <img
              src={logo1}
              alt="logo1"
              style={{ height: "10px", width: "10px" }}
            />{" "}
            Products
          </Typography>
          <Grid className={classes.cont} container>
            <Grid item lg={5}>
              <div className={classes.cont1}></div>
              <div className={classes.fs}>E-Commerce</div>
              <div className={classes.ss}>1,618</div>
            </Grid>
            <Grid item lg={4}>
              <div className={classes.cont2}></div>
              <div className={classes.fs}>Facebook</div>
              <div className={classes.ss}>808</div>
            </Grid>
            <Grid item lg={3}>
              <div className={classes.cont3}></div>
              <div className={classes.fs}>Instagram</div>
              <div className={classes.ss}>808</div>
            </Grid>
          </Grid>
        </Box>

      </Box>

    </Card>
  )
}

export default SocialChart