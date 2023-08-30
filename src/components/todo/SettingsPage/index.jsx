
import { ListContext } from "../../../context/ListContext";
import { useContext, useEffect, useState } from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function SettingsPage() {

  const { addItem, deleteItem, toggleComplete, list, incompleteCount, incomplete, defaultValues, itemsPerPage, setItemsPerPage, difficulty, setDifficulty, includeCompleted,
    setIncludeCompleted } = useContext(ListContext);

  function handleIncludeCompleted(e) {
    setIncludeCompleted(!includeCompleted);
  }


  const handleChange = (event) => {
    setItemsPerPage(event.target.value);
  };

  const handleDiffecultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  useEffect(() => {
    // Store values in local storage
    localStorage.setItem('itemsPerPage', itemsPerPage);
    localStorage.setItem('difficulty', difficulty);
    localStorage.setItem('includeCompleted', JSON.stringify(includeCompleted));
    
}, [itemsPerPage, difficulty, includeCompleted]);

  return (

    <div style={{ marginTop: '3em',marginBottom:'3em' }}  >

      {!includeCompleted && <Button variant="contained" onClick={() => handleIncludeCompleted()} >include completed</Button>}
      {includeCompleted && <Button variant="outlined" onClick={() => handleIncludeCompleted()} >hide completed</Button>}

      <Box style={{ marginTop: '1em',width:'11em' }}   sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">elements per page</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="elementsperpage"
            onChange={handleChange}
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box style={{ marginTop: '1em',width:'11em' }}   sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">diffeculty</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            // value={age}
            label="diffeculty"
            onChange={handleDiffecultyChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </Box>

    </div>


  );
}

export default SettingsPage;