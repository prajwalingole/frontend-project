import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import pic1 from './pic1.jpg'
import { ImageListItem } from '@mui/material';
import useStyles from './styles';

function createData(product, orderdate, status, customer, priceperunit, quantity, totalprice) {
  return { product, orderdate, status, customer, priceperunit, quantity, totalprice };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 1, 2),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 1, 2),
];

const OrderList = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.txt}>
        Order List
      </div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#b0bec5' }} padding="none">PRODUCT</TableCell>
            <TableCell sx={{ color: '#b0bec5' }} padding="none" align="right">ORDER DATE</TableCell>
            <TableCell sx={{ color: '#b0bec5' }} padding="none" align="right">STATUS</TableCell>
            <TableCell sx={{ color: '#b0bec5' }} padding="none" align="right">CUSTOMER</TableCell>
            <TableCell sx={{ color: '#b0bec5' }} padding="none" align="right">PRICE PER UNIT</TableCell>
            <TableCell sx={{ color: '#b0bec5' }} padding="none" align="right">QUANTITY</TableCell>
            <TableCell sx={{ color: '#b0bec5' }} padding="none" align="right">TOTAL PRICE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              padding="none"
            >
              <TableCell padding="none" component="th" scope="row">
                <Grid container>
                  <Grid item>
                    <ImageListItem sx={{ height: "40px", width: "40px", paddingTop: '7px' }} >
                      <img src={pic1} alt="" />
                    </ImageListItem>
                  </Grid>
                  <Grid item>
                    <div className={classes.rowc}>
                      <div className={classes.id}>
                        #23478
                      </div>
                      <div className={classes.pname}>
                      {row.product}
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell padding="none" align="right">{row.orderdate}</TableCell>
              <TableCell padding="none" align="right">{row.status}</TableCell>
              <TableCell padding="none" align="right">{row.customer}</TableCell>
              <TableCell padding="none" align="right">{row.priceperunit}</TableCell>
              <TableCell padding="none" align="right">{row.quantity}</TableCell>
              <TableCell padding="none" align="right">{row.totalprice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}

export default OrderList