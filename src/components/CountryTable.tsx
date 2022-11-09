import React, { useEffect } from "react";
import { Country } from '../types/country';
import {
    Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material";
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
              <TableCell>Languages</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries.map((item) => (
              <TableRow key={item.name.official}>
                <TableCell>
                    <img src={item.flags.png} alt="" width="60em" />
                </TableCell>
                <TableCell>{item.name.official}</TableCell>
                <TableCell>{Object.keys(item.currencies)}</TableCell>
                <TableCell>{item.capital}</TableCell>
                <TableCell>{Object.keys(item.languages)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default CountryTable;