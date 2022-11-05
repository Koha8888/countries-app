import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Country } from '../../types/country';

const initialState: Country[] = []

export const fetchCountries = createAsyncThunk(
    "fetchCountries",
    async () => {
        const jsonData = await fetch("https://restcountries.com/v3.1/all?fields=name,currencies,capitals,languages,flags")
        return jsonData.json() as Promise<Country[]>
    }

)

const countriesSlice = createSlice({
    name: "countriesSlice",
    initialState,
    reducers: {
        sortByName: (state) => {
            state.sort((a,b) => a.name.official > b.name.official ? 1 : -1)
        },
    },
    extraReducers: (build) => {
        build.addCase(fetchCountries.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const countriesReducer = countriesSlice.reducer
export const {sortByName} = countriesSlice.actions