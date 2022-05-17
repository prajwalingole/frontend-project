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
        <Grid>
          <Appbar />
          <Divider orientation='horizontal' />
        </Grid>
        <Grid>
          <Share />
        </Grid>
        <Grid>
          <Cards />
        </Grid>
        <Grid>
          <Charts />
        </Grid>
        <Grid>
          <OrderList />
        </Grid>
      </Grid>
    </Container>
  )
}

export default wrapper