// external
import React from 'react';
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

  React.useEffect(() => {
    console.log('here')
    fetch('/api/kits/459').then((res) => res.json()).then((res) => {
      console.log('res', res)
    })
  })

  return (
    <div className='App'>
      <MuiTextField
        focused
        variant='outlined'
        aria-label='Search for Kits Text Field'
        label='Search for Kits'
        style={{ width: '50%', marginBottom: '20px' }}
        onChange={(evt) => onSearchKitsInput(evt?.target?.value)}
      />
      {searchResults.length 
        ? <DataTable data={searchResults} />
        : <div>No kits found for "{searchInput}"</div>
      }
    </div>
  );
}

export default App;
