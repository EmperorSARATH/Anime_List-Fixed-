import { Box } from '@mui/system'
import React from 'react'
import { TextField } from '@mui/material';

const Search = ({setQ,q,filteredPerson}) => {
    // const filtered = filteredPerson.map(person =>  <Card key={person.id} person={person} />); 
 
  return (
    <Box sx={{ margin:"20px 20px 20px 20px", border:"1.5px outline"}}>
        <TextField fullWidth label="search.." id="fullWidth" placeholder='search..' value={q} onChange={(e)=>setQ(e.target.value) }/>
    </Box>
  )
}

export default Search