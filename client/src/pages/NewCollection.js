import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import MenuBar from '../Components/MenuBar'
function NewCourse() {
    const user = localStorage.getItem('user');
    if (user) {

    } else {
        window.location.href = '/login'
    }

    const [collectionName, setCollectionName] = useState('');

    const handleChange = (e) => {
        console.log(e);
        setCollectionName(e);
    }

    const handleCancelClick = () => {
        setCollectionName('');
        return;
    }
    const handleCreateClick = () => {
        window.location.href = `/admin/content/collections/new/${collectionName}`
    }

    return (
        <Box sx={{ position: 'relative', display: 'flex', width: '100vw', height: '100vh', overflowX: 'hidden' }}>
            <Box>
                <MenuBar />
            </Box>




            <Box sx={{ width: '80vw', height: '100%', position: 'absolute', right: '0%' }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '5%', alignItems: 'center', alignItems: 'center' }}>

                    <Typography sx={{ fontSize: '200%', margin: '1%', fontWeight: 'bold' }}>Create a new Collection</Typography>
                    <Box sx={{ width: '60%', height: '70%', borderRadius: '10px', border: '1px solid #ccc', display: 'flex', background: '#FAFAFA', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '120%', marginLeft: '5%', width: '100%', textAlign: 'start', marginTop: '5%' }}>Name of the Collection</Typography>
                        <TextField onChange={(e) => handleChange(e.target.value)} size="small" sx={{ width: '95%' }} value={collectionName}></TextField>
                        <Box sx={{ width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: '1%', alignItems: 'flex-end', marginTop: '4%' }}>
                            <Button sx={{ margin: '0.5%' }} onClick={handleCancelClick}>Cancel</Button>
                            <Button sx={{ margin: '0.5%' }} onClick={handleCreateClick} variant="contained">Create</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default NewCourse