import React from 'react'
import { useParams } from 'react-router-dom';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import {useAppSelector } from "../redux/hooks";
import Typography from '@mui/material/Typography';



const SingleCountry = () => {

    const {name} = useParams()
    const currentCountry = useAppSelector((state)=>state.countriesReducer.find((country)=>country.name.official === name)) 
    return (
    <div>
        {currentCountry ? 
        <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell>Official name</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Capital</TableCell>
              <TableCell>Languages</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow key={currentCountry.name.official}>
                <TableCell>
                    <img src={currentCountry.flags.png} alt="flag" width="60em" />
                </TableCell>
                <TableCell>{currentCountry.name.official}</TableCell>
                <TableCell>{Object.keys(currentCountry.currencies)}</TableCell>
                <TableCell>{currentCountry.capital}</TableCell>
                <TableCell>{Object.values(currentCountry.languages).map((item: any) => (<Typography key={item}>{item}</Typography>))}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
        : <p>There are no such country</p>}
    </div>
  )
}

export default SingleCountry