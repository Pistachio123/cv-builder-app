//import { Container, Card, Button } from 'react-bootstrap';
import { Container, Grid } from '@material-ui/core';
import "../../CSS/ResumeScreen.css";

const ResumeLaw = () => {
  return (
    <Container className='law-cv-page'>
      <Grid container>
        <Grid item xs={12} md={4} lg={3} style={{backgroundColor: 'cyan'}}>
          abc
        </Grid>
        <Grid item xs style={{backgroundColor: 'orange'}}>
          xyz
        </Grid>
      </Grid>
      This is where our Law CV will be.
    </Container>
  );
};

export default ResumeLaw;