//import { Container, Card, Button } from 'react-bootstrap';
import { Container, Grid } from '@material-ui/core';
import "C:/Users/domsa/React JS App/bachelor-thesis/frontend/src/CSS/ResumeScreen.css";

const ResumeCS = () => {
  return (
    <Container className='cs-cv-page'>
      <Grid container>
        <Grid item xs={12} md={4} lg={3} style={{backgroundColor: 'cyan'}}>
          abc
        </Grid>
        <Grid item xs style={{backgroundColor: 'orange'}}>
          xyz
        </Grid>
      </Grid>
      This is where our CS CV will be.
    </Container>
  );
};

export default ResumeCS;