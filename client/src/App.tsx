// external
import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// internal
import SearchService from './search.service';
import KitDetails from './KitDetails';
import { Kit } from './models';
import './App.css';

function App() {
  const [loading, setLoading] = React.useState<boolean>(true)
  const [selectedKit, setSelectedKit] = React.useState<Kit | null>()
  const [selectedKitId, setSelectedKitId] = React.useState<number>();
  const [searchResults, setSearchResults] = React.useState<Kit[]>([])
  const searchService = new SearchService();

  React.useEffect(() => {
    setLoading(true)
    searchService.searchKitsByLabelId().then((results) => {
      setSearchResults(results)
      setLoading(false)
    })
  }, [])

  React.useEffect(() => {
    if (selectedKitId) {
      setLoading(true)
      searchService.getKitById(selectedKitId).then((kit) => {
        setSelectedKit(kit)
        setLoading(false)
      })
    } else setSelectedKit(null)
  }, [selectedKitId])

  return (
    <div className='App'>
      <Autocomplete
        disablePortal
        options={searchResults}
        getOptionLabel={(option: Kit) => option.label_id}
        sx={{ marginBottom: '20px' }}
        noOptionsText='No kits found'
        onChange={(_evt, kit) => setSelectedKitId(kit?.id)}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params: any) =>
          <TextField
            {...params}
            data-testid='search-for-kits-text-field'
            label='Search for Kits By Label ID'
          />
        }
      />
      {loading && 
        (<Box
          data-testid='loader'
          sx={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}
        >
          <CircularProgress />
        </Box>)
      }
      {!loading && selectedKit && <KitDetails kit={selectedKit} />}
    </div>
  );
}

export default App;
