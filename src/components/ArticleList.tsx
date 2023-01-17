import React from 'react';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import styles from '../styles'

const ArticleList = (props: any) => {
  const { articleList } = props;

  return (
    <Container component="main" maxWidth="xs">
      {articleList.map((articleName: string) => (
        <Typography component="p" variant="body1" style={styles.articleList}>{articleName}</Typography>
      ))}
    </Container>
  );
}

export default ArticleList;
