import React, { useEffect, useState } from 'react'
import { Country } from '../types/country'
import { fetchCountries, sortByName } from '../redux/reducers/countries';
import CountryTable from '../components/CountryTable';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import ToggleButton from '../components/ToggleButton';
import { useAppDispatch, useAppSelector } from '../redux/hooks';



const Home = () => {

    const dispatch = useAppDispatch()
    const countries = useAppSelector (state => state.countriesReducer)

    useEffect( () => { 
        fetchCountries()
    }, [])

    return (
        <div>
            <h1>Home Page</h1>
            <Box className="App" sx={{bgcolor:'background.default'}} padding={5}>
                <Typography variant="h3" align='center' color="#5e6166">Countries</Typography>
                <button onClick={ () => dispatch(sortByName())}>Sort Countries</button>
                <ToggleButton/>
                <CountryTable countries={countries}/>
            </Box>
        </div>
    )
}

export default Home