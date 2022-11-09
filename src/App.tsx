import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import CountryTable from './components/CountryTable';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { countriesReducer, fetchCountries, sortByName } from './redux/reducers/countries';

import { createTheme, ThemeProvider } from '@mui/material/styles'
import { green, purple } from '@mui/material/colors';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ToggleButton from './components/ToggleButton';
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

export const ThemeContext = createContext ({toggleMode : () => {}}) 

function App() {
  const countries = useAppSelector (state => state.countriesReducer)
  const dispatch = useAppDispatch()
  const [mode, setMode] = useState<"light"|"dark">("light") 
  useEffect(() => {
    dispatch(fetchCountries())
  },[])
  const theme = createTheme({
    palette: { 
      mode,
      ...(mode === "light" ? {
        primary: {
          main: "#EAE9E0"
        },
        secondary: {
          main: "#FAF7F0"
        },
        text:{
          primary: "#7D6E83",
          secondary: "#395144 "
        },
        background: {
          default: "#F1F1F1 "
        }
      } : {
        primary:  {
          main: "#284E78"
        },
        secondary: {
          main: "#2C3639"
        },
        text:{
          primary: "#DCD7C9",
          secondary: "#D0C9C0"
        },
        background: {
          default: "#0B103E "
        }
      })
    }
  });
  const manageTheme = {
    toggleMode: () => {
      setMode((prevMode)=> (prevMode === "light" ? "dark" : "light"))
    }
  }
  return (
    <ThemeContext.Provider value={manageTheme}>
      <ThemeProvider theme={theme}>
        <Box className="App" sx={{bgcolor:'background.default'}} padding={5}>
          <ToggleButton/>
          <button onClick={ () => dispatch(sortByName())}>Sort Countries</button>
          <CountryTable countries={countries} /> 
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export default App;
