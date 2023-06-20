//import { Container, Card, Button } from 'react-bootstrap';
import { Container, Grid } from '@material-ui/core';
import "C:/Users/domsa/React JS App/cv builder app/frontend/src/CSS/ResumeScreen.css";

const ResumeMD = () => {
  return (
    <Container className='md-cv-page'>
      <Grid container>
        <Grid item xs={12} md={4} lg={3} style={{backgroundColor: 'cyan'}}>
          abc
        </Grid>
        <Grid item xs style={{backgroundColor: 'orange'}}>
          xyz
        </Grid>
      </Grid>
      This is where our medicine CV will be.
    </Container>
  );
};

export default ResumeMD;