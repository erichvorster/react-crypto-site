import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import millify from "millify";
import { Link } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function TopPerformers({ topCryptos }) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 900, minWidth: 700 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="right">Icon</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topCryptos.slice(0, 10).map((crypto) => (
            <TableRow
              key={crypto.uuid}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <Link key={crypto.uuid} to={`/crypto/${crypto.uuid}`}></Link>
              <TableCell component="th" scope="row">
                {crypto.rank}
              </TableCell>
              <TableCell align="right">
                <Box
                  component="img"
                  sx={{
                    maxHeight: { xs: 30, md: 30 },
                    maxWidth: { xs: 30, md: 30 },
                  }}
                  src={crypto.iconUrl}
                ></Box>
              </TableCell>
              <TableCell align="right">{crypto?.name}</TableCell>
              <TableCell align="right">{millify(crypto?.price)}</TableCell>
              <TableCell align="right">{crypto?.symbol}</TableCell>
              <TableCell align="right">{crypto?.change}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TopPerformers;
