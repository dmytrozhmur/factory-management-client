import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link, useLocation } from 'react-router-dom';

const columns = [
  { id: 'pname', label: 'Name'},
  { id: 'gaid', label: 'Global Admin Id'},
  { id: 'pemail', label: 'Email'},
  { id: 'phn', label: 'Phone' }
];

export default function ProfileDashboard() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  var row;
  if (useLocation().pathname == "/factory/profile") {
    row = {
      pname: "Nya",
      gaid: "US15AIIB45810015641605005116",
      pemail: "nya@gmail.com",
      phn: "0957475847"
    };
  } else {
    row = {
      pname: "Tanya",
      gaid: "UA145810013441605005116",
      pemail: "tanya@gmail.com",
      phn: "06074877389"
    };
  }
  

  console.log(useLocation());
  return (
    <>
        <div className='dashboard'>
            <h1 style={{ color: 'blue', marginBottom: '50px', marginTop: 0 }}>My Profile</h1>
            <Paper className='factoriestable' sx={{ width: '80vh', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </TableCell>
                                );
                                })}
                            </TableRow>
                    </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
        <div>
            <Link to='./update' className='createButton' style={{ width: '15%', textAlign: 'center', backgroundColor: 'blue', color: 'white', border: 'none', padding: '5px 5px', cursor: 'pointer', borderRadius: '4px' }}>
                Change info
            </Link>
        </div>
    </>
  );
}