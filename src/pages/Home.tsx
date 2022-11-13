import React, { useEffect, useState } from 'react'
import { Country } from '../types/country'
import { fetchCountries } from '../redux/reducers/countries';
import CountryTable from '../components/CountryTable';

const Home = () => {

    // const [countries, setCountries] = useState<Country[]>([])

    // useEffect(() => {
    //   const fetchCountries = () => {
    //     fetch("https://restcountries.com/v3.1/all?fields=name,currencies,capitals,languages,flags")
    //     .then((res)=> res.json())
    //     .then((data:Country[])=>{
    //         setCountries(data)
    //   })
    //   }
    // }, [])
    
    // fetchCountries()

  return (
    <div>
        <CountryTable countries={[]}/>
    </div>
  )
}

export default Home