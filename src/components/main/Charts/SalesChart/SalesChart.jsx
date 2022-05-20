import React from 'react'
import { Card,Grid } from '@mui/material';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SalesData } from '../Data';
import { ClassNames } from '@emotion/react';
import useStyles from './styles'

function Custom({ active, payload }) {
  if (active && payload!=null && payload[0]!=null) {
      return (
          <div style={{ padding: "8px", color: "#383874", backgroundColor: "white", border: "1px solid #F0F0F0" }}>
              {`$${payload[0].value * 1000}`}
          </div>
      );
  }
  return null;
}

const SalesChart = () => {
  const classes = useStyles();
  return (
    <Card>
      <Grid container>
        <Grid item>
          <div className={classes.ftxt}>Sales Analytics</div>
        </Grid>
        <Grid item>
          {/* <div className={classes.stxt}>Period  This week</div> */}
        </Grid>
      </Grid>
      <ResponsiveContainer height={180}  >
        <AreaChart data={SalesData} >
          <defs>
            <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor="#8676ff" stopOpacity={0.9} />
              <stop offset='76%' stopColor="#8676ff" stopOpacity={0.07} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="0 0" opacity={0.2} />
          <XAxis dataKey="name" axisLine={{ stroke: '#cccccc' }} tick={{ fill: '#c0c0c0' }} tickLine={false} />
          <YAxis width={35} dataKey="pv" unit="K" tickFormatter={num => `$${num}`} tick={{ fill: '#c0c0c0' }} axisLine={{ stroke: '#cccccc' }} tickLine={false} />
          <Tooltip content={<Custom />} cursor={false} />
          <Area type="monotone" dataKey="pv" stroke="#8676ff" fill=" url(#color)" strokeWidth={3} dot={false} fillOpacity={0.1} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default SalesChart