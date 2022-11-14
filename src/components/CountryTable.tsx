import React, { useEffect } from "react";
import { Country } from '../types/country';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { CountryTableProps } from "../types/CountryTable";
import Typography from '@mui/material/Typography';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';

const CountryTable = ({countries}: CountryTableProps) => {
    return (
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
            {!countries.length ? 
            
            <TableRow>
              <TableCell>No Flag</TableCell>
              <TableCell>No Official name</TableCell>
              <TableCell>No Currency</TableCell>
              <TableCell>No Capital</TableCell>
              <TableCell>No Languages</TableCell>
            </TableRow>
            
            : countries.map((item) => (
              <TableRow key={item.name.official}>
                <TableCell>
                    <img src={item.flags.png} alt="flag" width="60em" />
                </TableCell>
                <TableCell><Link to = {"countries/" + item.name.official}>{item.name.official}</Link></TableCell>
                <TableCell>{Object.keys(item.currencies)}</TableCell>
                <TableCell>{item.capital}</TableCell>
                <TableCell>{Object.values(item.languages).map((item: any) => (<Typography key={item}>{item}</Typography>))}</TableCell>
              </TableRow>
            ))} 
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default CountryTable;