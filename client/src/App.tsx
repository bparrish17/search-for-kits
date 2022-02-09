// external
import React, { useEffect } from 'react';
import MuiTextField from '@mui/material/TextField';
import { debounce } from 'lodash'

// internal
import DataTable from './DataTable';
import SearchService from './search.service';
import { Kit } from './models';
import './App.css';


function App() {
  const [searchInput, setSearchInput] = React.useState<string>('')
  const [searchResults, setSearchResults] = React.useState<Kit[]>([])
  const searchService = new SearchService();

  React.useEffect(() => {
    searchService.search(searchInput).then((results) => {
      setSearchResults(results)
    })
  }, [searchInput])

  const onSearchKitsInput = React.useMemo(
    () => debounce(setSearchInput, 300),
  []);

  useEffect(() => {
    console.log('HERE:')
    fetch('/api/kits')
      .then((res) => res.json())
      .then((results) => console.log('results', results))
  }, [])


  return (
    <div className='App'>
      <MuiTextField
        focused
        variant='outlined'
        label='Search for Kits'
        style={{ marginBottom: '20px' }}
        onChange={(evt) => onSearchKitsInput(evt?.target?.value)}
      />
      <DataTable data={searchResults} />
    </div>
  );
}

export default App;
