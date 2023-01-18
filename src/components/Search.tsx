import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Searchbar from './Searchbar';
import ArticleList from './ArticleList';
import { articleRequest, saveSearchInput, updateSearchInput } from '../services/apiServices';
import { useNavigate } from 'react-router-dom';
import styles from '../styles'

const Search = () => {
  const [articleName, setArticleName] = useState('')
  const [articleList, setArticleList] = useState([])
  const [lastSearchInput, setLastSearchInput] = useState('')
  const [lastSearchId, setLastSearchId] = useState(0)

  const navigate = useNavigate();

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setArticleName(event.target.value)
  }

  useEffect(() => {
    if (articleName === '' || articleName === lastSearchInput) return

    const service = articleRequest(articleName);
    service.then((answer) => setArticleList(answer?.data.results));

    if (lastSearchInput === '' || (lastSearchInput !== '' && !articleName.includes(lastSearchInput))) {
      const saveService = saveSearchInput(articleName)
      saveService.then((answer) => {
        setLastSearchInput(answer.data.search_input.input)
        setLastSearchId(answer.data.search_input.id)
      })
    } else {
      const updateService = updateSearchInput(articleName, lastSearchId)
      updateService.then((answer) => setLastSearchInput(answer.data.search_input.input))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articleName])

  return (
    <div className="App">
      <header className="App-header">
        <Typography component="h1" variant="h2" align="center">Helpjuice Test</Typography>
        <Typography component="h1" variant="h4" align="center">Articles searchbar</Typography>
      </header>
      <Box display="flex" justifyContent="center" alignItems="center" style={styles.buttonContainer}>
        <Button variant="contained" onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>
      </Box>
      <Searchbar handleFieldChange={handleFieldChange} />
      <ArticleList articleList={articleList} />
    </div>
  );
}

export default Search;
