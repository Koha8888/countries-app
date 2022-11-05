import  { createSlice } from '@reduxjs/toolkit';
import { Country } from '../../types/country';

const initialState: Country [] = []

const favCountriesSlice = createSlice({
    name: "favCountriesSlice",
    initialState,
    reducers:{
        addToFav: () => {

        },
        removeFromFav : () => {

        }  
    }
})
