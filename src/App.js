import React from 'react'
import { CssBaseline, Typography,Container,Grid,Divider} from '@material-ui/core';
import LeftList from './components/List/LeftList';
import Wrapper from './components/main/Wrapper/Wrapper'

const App = () => {
  return (
     <Container>
       <CssBaseline />
       <Grid container >
         <Grid lg={2} xs={2} md={2}>
           <LeftList />
         </Grid>
         <Grid lg={10} xs={2} md={2}>
           <Wrapper />
         </Grid>
        </Grid>
     </Container>
  )
}

export default App;