import React from 'react';
import { TextField } from '@mui/material';
import { Container } from '@mui/system';
import styles from '../styles'

const Searchbar = (props: any) => {
  const { handleFieldChange } = props;
  
  return (
    <Container component="main" maxWidth="xs" style={styles.searchbarcontainer}>
      <TextField
        variant="outlined"
        required
        fullWidth
        id="article-name"
        label="Article Name"
        name="article-name"
        onChange={handleFieldChange}
      />
    </Container>
  );
}

export default Searchbar;
