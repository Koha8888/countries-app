import React, { useEffect, useState } from 'react'
import { fetchCountries } from '../redux/reducers/countries';
import { Country } from '../types/country';
import { useParams } from 'react-router-dom';

const SingleCountry = () => {

    const {name} = useParams()

    const [country, setCountry] = useState<Country[]>([])

    useEffect(() => {
      const fetchCountries = () => {
        fetch("https://restcountries.com/v3.1/name/${name}?fullText=true")
        .then((res)=> res.json())
        .then((data:Country[])=>{
            setCountry(data)
      })
      }
    }, [name])
    
    fetchCountries()

    if (country.length === 0) {
        return <div>Loading</div>
    }

  return (
    <div>
        <ul>
            <li>{country[0].capital}</li>
            <li>{country[0].name.official}</li>
            <li>{Object.keys(country[0].currencies)}</li>
        </ul>
    </div>
  )
}

export default SingleCountry