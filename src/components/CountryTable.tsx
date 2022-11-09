import React, { useEffect } from "react";
import { Country } from '../types/country';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCountries } from "../redux/reducers/countries";

interface CountryTableProps {
    countries: Country[];
}

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
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((item) => (
              <TableRow key={item.name.official}>
                <TableCell>
                    <img src={item.flags.png} alt="flag" width="60em" />
                </TableCell>
                <TableCell>{item.name.official}</TableCell>
                <TableCell>{Object.keys(item.currencies)}</TableCell>
                <TableCell>{item.capital}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default CountryTable;