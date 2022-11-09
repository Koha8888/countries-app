import React, { useEffect } from 'react';
import './App.css';
import CountryTable from './components/CountryTable';
import { useAppSelector, useAppDispatch } from './redux/hooks';
import { countriesReducer, fetchCountries, sortByName } from './redux/reducers/countries';

function App() {
  const countries = useAppSelector (state => state.countriesReducer)
  const dispatch = useAppDispatch()
  console.log(countries)
  useEffect(() => {
    dispatch(fetchCountries())
  },[])
  return (
    <div className="App">
      <button onClick={ () => dispatch(sortByName())}>Sort Countries</button>
      <CountryTable countries={countries} /> 
    </div>
  );
}
export default App;
