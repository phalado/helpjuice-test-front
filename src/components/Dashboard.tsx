import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from '../styles'
import { getSearchInputs } from '../services/apiServices';

const Dashboard = () => {
  const [terms, setTerms] = useState<{key: string, doc_count: number}[]>([])
  const navigate = useNavigate();

  useEffect(() => {
    const service = getSearchInputs();
    service.then(answer => setTerms(answer.data.search_inputs))
  }, [])

  return (
    <div className="Dashboard">
      <Box display="flex" justifyContent="center" alignItems="center" style={styles.buttonContainer}>
        <Button variant="contained" onClick={() => navigate('/')}>Go back home</Button>
      </Box>
      <Typography component="h1" variant="h4" align="center">Most searched terms</Typography>
      <Container component="div" maxWidth="xs">
        <Grid container spacing={2} style={styles.graphic}>
          <Grid item xs={6}>
            <Typography component="h5" variant="h5" align="center">Term</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="h5" variant="h5" align="center">Times searched</Typography>
          </Grid>
        </Grid>
        {terms.length > 0 && terms.map(term => (
          <Grid container spacing={2} style={styles.graphic}>
            <Grid item xs={6}>
            <Typography component="h5" variant="body1" align="center">{term.key}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="h5" variant="body1" align="center">{term.doc_count}</Typography>
          </Grid>
          </Grid>
        ))}
      </Container>
    </div>
  )
}

export default Dashboard;
