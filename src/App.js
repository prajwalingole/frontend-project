import React from 'react'
import { CssBaseline, Typography,Container,Grid,Divider} from '@material-ui/core';
import LeftList from './components/List/LeftList';
import Wrapper from './components/main/Wrapper/Wrapper'

const App = () => {
  return (
     <Container>
       <CssBaseline />
       <Grid container >
         <Grid xs={2}>
           <LeftList />
         </Grid>
         <Grid xs={10}>
           <Wrapper />
         </Grid>
        </Grid>
     </Container>
  )
}

export default App;