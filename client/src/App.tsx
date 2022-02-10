// external
import React from 'react';
import MuiTextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { debounce } from 'lodash'

// internal
import DataTable from './DataTable';
import SearchService from './search.service';
import { Kit } from './models';
import './App.css';


function App() {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [searchInput, setSearchInput] = React.useState<string>('')
  const [searchResults, setSearchResults] = React.useState<Kit[]>([])
  const searchService = new SearchService();

  React.useEffect(() => {
    setLoading(true)
    searchService.searchKitsByLabelId(searchInput).then((results) => {
      setSearchResults(results)
      setLoading(false)
    })
  }, [searchInput])

  const onSearchKitsInput = React.useMemo(() => debounce(setSearchInput, 300), []);


  return (
    <div className='App'>
      <MuiTextField
        focused
        variant='outlined'
        aria-label='Search for Kits Text Field'
        label='Search for Kits by Label'
        data-testid="search-for-kits-text-field"
        style={{ width: '50%', marginBottom: '20px' }}
        onChange={(evt) => onSearchKitsInput(evt?.target?.value)}
      />
      {loading && 
        (<Box
            data-testid="loader"
            sx={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}
          >
          <CircularProgress />
        </Box>)
      }
      {!loading && 
        (searchResults.length
          ? <DataTable data={searchResults} data-testid="data-table" />
          : <div>No kits found for "{searchInput}"</div>
        )
      }
    </div>
  );
}

export default App;
