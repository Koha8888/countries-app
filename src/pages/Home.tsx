import React, { useEffect, useMemo, useState } from 'react'
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

    const [value, setValue] = useState('');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const currentCountries = useMemo(()=>{
        return countries.filter((country) => country.name.official.toLowerCase().includes(value.toLowerCase()))
    },[countries, value])

    return (
        <div>
            <Box className="App" sx={{bgcolor:'background.default'}} padding={5}>
                <Typography variant="h3" align='center' color="#5e6166">Countries</Typography>
                <button onClick={ () => dispatch(sortByName())}>Sort Countries</button>
                <ToggleButton/>

                <input value={value} onChange={onChange} />
                <CountryTable countries={currentCountries}/>
            </Box>
        </div>
    )
}

export default Home