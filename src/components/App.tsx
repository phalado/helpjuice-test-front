import React, { ChangeEvent, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Searchbar from './Searchbar';
import ArticleList from './ArticleList';
import { articleRequest } from '../services/apiServices';

const App = () => {
  const [articleName, setArticleName] = useState('')
  const [articleList, setArticleList] = useState([])

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleName(event.target.value)
  }

  useEffect(() => {
    if (articleName === '') return

    const service = articleRequest(articleName);
    service.then((answer) => setArticleList(answer?.data.results));
  }, [articleName])

  return (
    <div className="App">
      <header className="App-header">
        <Typography component="h1" variant="h2" align="center">Helpjuice Test</Typography>
        <Typography component="h1" variant="h4" align="center">Articles searchbar</Typography>
      </header>
      <Searchbar handleFieldChange={handleFieldChange} />
      <ArticleList articleList={articleList} />
    </div>
  );
}

export default App;
