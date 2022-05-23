import React from 'react'
import { Container, Grid,Typography } from '@material-ui/core';
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
  createData('Camera Nikon D 5000 kit', 'December 12, 2021', 'Shipping', 'Collective Electronic', '$2,102.00', 'x 10', '$21.020.00'),
  createData('Polaroid Onestep Plus Instant', 'Septemper 20, 2021', 'Success', 'Aleya Photograph Inc,', '$299.00', 'x 20', '$5,980.00'),
  createData('Polaroid Onestep Plus Instant', 'Septemper 20, 2021', 'Success', 'Aleya Photograph Inc,', '$299.00', 'x 20', '$5,980.00'),
  
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
            <TableCell sx={{ color: '#b0bec5' }} padding="none"><div className={classes.tpro}>PRODUCT</div></TableCell>
            <TableCell sx={{ color: '#b0bec5' }} padding="none" align="right"><div className={classes.tpro}>ORDER DATE</div></TableCell>
            <TableCell sx={{ color: '#b0bec5' }} padding="none" align="right"><div className={classes.tpro2}>STATUS</div></TableCell>
            <TableCell sx={{ color: '#b0bec5' }} padding="none" align="right"><div className={classes.tpro3}>CUSTOMER</div></TableCell>
            <TableCell sx={{ color: '#b0bec5' }} padding="none" align="right"><div className={classes.tpro4}>PRICE PER UNIT</div></TableCell>
            <TableCell sx={{ color: '#b0bec5' }} padding="none" align="right"><div className={classes.tpro4}>QUANTITY</div></TableCell>
            <TableCell sx={{ color: '#b0bec5' }} padding="none" align="right"><div className={classes.tpro4}>TOTAL PRICE</div></TableCell>
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
              <TableCell padding="none" align="right">
                {row.orderdate=="December 12, 2021"?
                <div className={classes.am}>10:09 AM</div>
                :<div className={classes.am}>12:09 AM</div>
               }
                <div className={classes.pname}>{row.orderdate}</div>
              </TableCell>
              <TableCell padding="none" align="right">
                {row.status=="Shipping"?
                  <div className={classes.status}>
                    {row.status}
                  </div>
                  :
                  <div className={classes.stat}>
                  {row.status}
                </div>
                }
              </TableCell>
              <TableCell padding="none" align="right">
                <div className={classes.cusf}>
                {row.customer}
                </div>
                {
                  row.customer=="Collective Electronic"?
                <div className={classes.cuss}>
                  Los Angels, New york
                </div>
                :<div className={classes.cuss}>
                Surabaya, Indonesia
              </div>
                }
                </TableCell>
              <TableCell padding="none" align="right">
                <div className={classes.ppu}>
                {row.priceperunit}
                </div>
                </TableCell>
              <TableCell padding="none" align="right"><div className={classes.ppu}>{row.quantity}</div></TableCell>
              <TableCell padding="none" align="right"><div className={classes.tp}>{row.totalprice}</div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}

export default OrderList