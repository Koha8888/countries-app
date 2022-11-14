import React, { createContext, useEffect, useState } from 'react';
import CountryTable from './components/CountryTable';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { countriesReducer, fetchCountries, sortByName } from './redux/reducers/countries';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ToggleButton from './components/ToggleButton';
import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';

import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry'



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
    <BrowserRouter>
    <ThemeContext.Provider value={manageTheme}>
      <ThemeProvider theme={theme}>
          <Routes>
            <Route path='/' element={ <Home /> }> </Route>
            <Route path='/countries/:name' element={ <SingleCountry /> }> </Route>
          </Routes>
      </ThemeProvider>
    </ThemeContext.Provider>
    </BrowserRouter>
  );
}
export default App;
