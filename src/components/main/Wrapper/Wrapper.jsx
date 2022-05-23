import React from 'react'
import { Typography,Container,Grid,Divider} from '@material-ui/core';
import Appbar from '../Appbar/Appbar';
import Share from '../Share/Share';
import OrderList from '../OrderList/OrderList';
import Cards from '../Cards/Cards';
import Charts from '../Charts/Charts';

const wrapper = () => {
  return (
    <Container>
      <Grid>
        <Grid lg={12} xs={12} md={12}>
          <Appbar />
          <Divider orientation='horizontal' />
        </Grid>
        <Grid lg={12} xs={12} md={12}>
          <Share />
        </Grid>
        <Grid lg={12} xs={12} md={12}>
          <Cards />
        </Grid>
        <Grid lg={12} xs={12} md={12}>
          <Charts />
        </Grid>
        <Grid lg={12} xs={12} md={12}>
          <OrderList />
        </Grid>
      </Grid>
    </Container>
  )
}

export default wrapper