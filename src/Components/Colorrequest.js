// import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { Typography } from "@mui/material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import Button from '@mui/material/Button';
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

// function createData(name, StatusCode, RequestId, ProductTypeCode, RequestName, RequestType, Details) {
//     return {
//         name,
//         StatusCode,
//         RequestId,
//         ProductTypeCode,
//         RequestName,
//         RequestType,
//         Details,
//         history: [
//             {
//                 RequestedDate: '10/19/2023',
//                 CompletionDate: '11/04/2023',
//                 ErrorDetails: 'IncompleteInformation, Need X data',
//             },
//         ],
//     };
// }


// function Row(props) {
//     const { row } = props;
//     const [open, setOpen] = React.useState(false);

//     return (
//         <React.Fragment>
//             <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>

//                 <TableCell component="th" scope="row">
//                     {row.name}
//                 </TableCell>
//                 <TableCell align="right">{row.Statuscode}</TableCell>
//                 <TableCell align="right">{row.RequestId}</TableCell>
//                 <TableCell align="right">{row.ProductTypeCode}</TableCell>
//                 <TableCell align="right">{row.RequestName}</TableCell>
//                 <TableCell align="right">{row.RequestType}</TableCell>
//                 <TableCell align="right">{row.Details}
//                     <IconButton
//                         aria-label="expand row"
//                         size="small"
//                         onClick={() => setOpen(!open)}
//                     >
//                         {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                     </IconButton>
//                 </TableCell>
//             </TableRow>
//             <TableRow>
//                 <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
//                     <Collapse in={open} timeout="auto" unmountOnExit>
//                         <Box sx={{ margin: 1 }}>
//                             <Table size="small" aria-label="purchases">
//                                 <TableHead>
//                                     <TableRow>
//                                         <ErrorOutlineIcon />
//                                         <TableCell align="left">RequestedDate:</TableCell>
//                                         <TableCell align="left">CompletionDate:</TableCell>
//                                         <TableCell align="left">ErrorDetails:</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {row.history.map((historyRow) => (
//                                         <TableRow key={historyRow.RequestedDate}>
//                                             <TableCell component="th" scope="row">
//                                                 {historyRow.date}
//                                             </TableCell>
//                                             <TableCell component="th" scope="row" align="left">{historyRow.RequestedDate}</TableCell>
//                                             <TableCell align="left">{historyRow.CompletionDate}</TableCell>
//                                             <TableCell align="left">{historyRow.ErrorDetails}</TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </Box>
//                     </Collapse>
//                 </TableCell>
//             </TableRow>
//         </React.Fragment>
//     );
// }
// Row.propTypes = {
//     row: PropTypes.shape({
//         StatusCode: PropTypes.string.isRequired,
//         RequestId: PropTypes.number.isRequired,
//         ProductTypeCode: PropTypes.number.isRequired,
//         RequestName: PropTypes.string.isRequired,
//         RequestType: PropTypes.string.isRequired,
//         Details: PropTypes.string.isRequired,
//         history: PropTypes.arrayOf(
//             PropTypes.shape({
//                 RequestedDate: PropTypes.number.isRequired,
//                 CompletionDate: PropTypes.number.isRequired,
//                 ErrorDetails: PropTypes.string.isRequired,
//             }),
//         ).isRequired,
//     })
// }

// const rows = [
//     createData("Publishing Field", 90, 87, 67, "sghdfsjfdg", "hgsffkr", "More"),
//     createData("Completed", 90, 56, 45, "sudyugf", "jhfgfdf", "More"),
//     createData("On Hold", 16, 78, 5, "usgfg", "hjfgd", "More"),
//     createData("New Request", 3.7, 45, 45, "dhgjdfh", "dsgd", "More"),
//     createData("In Development", 16.0, 89, 12, "jgfurhdvh", "gdfdsd", "More"),

// ];

// export default function CollapsibleTable() {
//     return (
//         <TableContainer component={Paper}>
//             <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <Typography variant="h4" color="black">
//                     Color Requests
//                 </Typography>

//                 <Button variant="contained" disableElevation>
//                     MAKE NEW REQUEST
//                 </Button>
//             </Box>
//             <Table aria-label="collapsible table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell />
//                         <TableCell>StatusCode</TableCell>
//                         <TableCell align="right">RequestId</TableCell>
//                         <TableCell align="right">ProductTypeCode</TableCell>
//                         <TableCell align="right">RequestName</TableCell>
//                         <TableCell align="right">RequestType</TableCell>
//                         <TableCell align="right">Details</TableCell>

//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <Row key={row.name} row={row} />
//                     ))}
//                 </TableBody>

//             </Table>
//         </TableContainer>
//     );
// }


// // -----------------------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import { Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton } from '@mui/material';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
// import Collapse from "@mui/material/Collapse";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import WarningAmberIcon from '@mui/icons-material/WarningAmber';
// import PropTypes from "prop-types";


// const Colorrequest = () => {
//     const [data, setData] = useState([]);
//     const [openRowIndex, setOpenRowIndex] = useState(null);

//     useEffect(() => {
//         fetch("https://localhost:7258/api/Color")
//             .then((resp) => resp.json())
//             .then((resp) => {
//                 console.log(resp);
//                 setData(resp);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     const toggleRow = (index) => {
//         if (openRowIndex === index) {
//             setOpenRowIndex(null);
//         } else {
//             setOpenRowIndex(index);
//         }
//     };

//     function getStatusIcon(statusCode) {
//         switch (statusCode) {
//             case 'Publishing Failed':
//                 return <ErrorOutlineIcon style={{ color: 'red' }} />;
//             case 'Completed':
//                 return <CheckCircleOutlineIcon style={{ color: 'green' }} />;
//             case 'On Hold':
//                 return <WarningAmberIcon style={{ color: 'orange' }} />;
//             default:
//                 return null;
//         }
//     }

//     function getStatusTextColor(statusCode) {
//         switch (statusCode) {
//             case 'Publishing Failed':
//                 return 'red';
//             case 'Completed':
//                 return 'green';
//             case 'On Hold':
//                 return 'orange';
//             default:
//                 return 'black'; // Default color if none of the conditions match
//         }
//     }

//     function Row(props) {
//         const { row } = props;
//         return {
//             history: [
//                 {
//                     date: '2020-01-05',
//                     customerId: '11091700',
//                     amount: 3,
//                 },
//                 {
//                     date: '2020-01-02',
//                     customerId: 'Anonymous',
//                     amount: 1,
//                 },
//             ],
//         }
//     }
//     Row.propTypes = {
//         history: PropTypes.arrayOf(
//             PropTypes.shape({
//                 RequestedDate: PropTypes.number.isRequired,
//                 CompletionDate: PropTypes.number.isRequired,
//                 ErrorDetails: PropTypes.string.isRequired,
//             }),
//         ).isRequired,
//     }

//     return (
//         <Paper >
//             <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <Typography variant="h4" color="black">
//                     Color Requests
//                 </Typography>
//                 <Button variant="contained" disableElevation>
//                     MAKE NEW REQUEST
//                 </Button>
//             </Box>
//             <Table>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell align="right">statusCode</TableCell>
//                         <TableCell align="right">requestId</TableCell>
//                         <TableCell align="right">productTypeCode</TableCell>
//                         <TableCell align="right">requestType</TableCell>
//                         <TableCell align="right">requestName</TableCell>
//                         <TableCell align="right">details</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {data.map((row, index) => (
//                         <>
//                             <TableRow key={row.statusCode}>

//                                 {/* {index === 0? (
//                                         <>
//                                         <ErrorOutlineIcon style={{color : 'red'}} /> <span style={{color : 'red'}}>{row.statusCode}</span>
//                                         </>
//                                     ) : (
//                                         row.statusCode
//                                     )}
//                                    */}
//                                 <TableCell align="right">
//                                     {getStatusIcon(row.statusCode)}{' '}
//                                     <span style={{ color: getStatusTextColor(row.statusCode) }}>
//                                         {row.statusCode}
//                                     </span>
//                                 </TableCell>

//                                 <TableCell align="right">{row.requestId}</TableCell>
//                                 <TableCell align="right">{row.productTypeCode}</TableCell>
//                                 <TableCell align="right">{row.requestType}</TableCell>
//                                 <TableCell align="right">{row.requestName}</TableCell>
//                                 <TableCell align="right">
//                                     {row.details}
//                                     <IconButton
//                                         aria-label="expand row"
//                                         size="small"
//                                         onClick={() => toggleRow(0)}
//                                     >
//                                         {openRowIndex === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                                     </IconButton>
//                                 </TableCell>
//                             </TableRow>
//                             <TableRow>
//                                 <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
//                                     <Collapse in={openRowIndex === index} timeout="auto" unmountOnExit>
//                                         <Box sx={{ margin: 1 }}>
//                                             <Table size="small" aria-label="purchases">
//                                                 <TableHead>
//                                                     <TableRow>
//                                                         <TableCell align="left">RequestedDate:</TableCell>
//                                                         <TableCell align="left">CompletionDate:</TableCell>
//                                                         <TableCell align="left">ErrorDetails:</TableCell>
//                                                     </TableRow>
//                                                 </TableHead>
//                                                 <TableBody>
//                                                     {row.history.map((historyRow) => (
//                                                         <TableRow key={historyRow.RequestedDate}>
//                                                             <TableCell component="th" scope="row"> {historyRow.date}</TableCell>
//                                                             <TableCell component="th" scope="row" align="left">{historyRow.RequestedDate}</TableCell>
//                                                             <TableCell align="left">{historyRow.CompletionDate}</TableCell>
//                                                             <TableCell align="left">{historyRow.ErrorDetails}</TableCell>
//                                                         </TableRow>
//                                                     ))}
//                                                 </TableBody>
//                                             </Table>
//                                         </Box>
//                                     </Collapse>
//                                 </TableCell>
//                             </TableRow>
//                         </>
//                     ))
//                     }
//                 </TableBody>
//             </Table>
//         </Paper>
//     );
// };

// export default Colorrequest;


import React, { useState, useEffect } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Collapse,
  Box,
  Typography,
  Button,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const Colorrequest = () => {
  const [data, setData] = useState([]);
  const [openRowIndex, setOpenRowIndex] = useState(null);

  useEffect(() => {
    fetch('https://localhost:7258/api/Color')
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleRow = (index) => {
    if (openRowIndex === index) {
      setOpenRowIndex(null);
    } else {
      setOpenRowIndex(index);
    }
  };

  function getStatusIcon(statusCode) {
    switch (statusCode) {
      case 'Publishing Failed':
        return <ErrorOutlineIcon style={{ color: 'red' }} />;
      case 'Completed':
        return <CheckCircleOutlineIcon style={{ color: 'green' }} />;
      case 'On Hold':
        return <WarningAmberIcon style={{ color: 'orange' }} />;
      default:
        return null;
    }
  }

  function getStatusTextColor(statusCode) {
    switch (statusCode) {
      case 'Publishing Failed':
        return 'red';
      case 'Completed':
        return 'green';
      case 'On Hold':
        return 'orange';
      default:
        return 'black'; // Default color if none of the conditions match
    }
  }

  // Sample history data for each row
  const historyData = [
    {
      requestedDate: '2023-09-29',
      completionDate: '2023-10-05',
      errorDetails: 'Incomplete information Need X data',
    },
    {
      requestedDate: '2023-09-15',
      completionDate: '2023-09-20',
      errorDetails: 'No Errors',
    },
    {
        requestedDate: '2023-09-15',
        completionDate: '2023-09-20',
        errorDetails: 'No Errors On Hold',
    },
    {
        requestedDate: '2023-09-15',
        completionDate: '2023-09-20',
        errorDetails: 'No Errors',
    },
    {
        requestedDate: '2023-09-15',
        completionDate: '2023-09-20',
        errorDetails: 'No Errors',
    },
    {
        requestedDate: '2023-09-15',
        completionDate: '2023-09-20',
        errorDetails: 'No Errors',
    },
    
  ];

  return (
    <Paper>
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4" color="black">
          Color Requests
        </Typography>
        <Button variant="contained" disableElevation>
          MAKE NEW REQUEST
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">statusCode</TableCell>
            <TableCell align="right">requestId</TableCell>
            <TableCell align="right">productTypeCode</TableCell>
            <TableCell align="right">requestType</TableCell>
            <TableCell align="right">requestName</TableCell>
            <TableCell align="right">details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <React.Fragment key={row.statusCode}>
              <TableRow>
                <TableCell align="right">
                  {getStatusIcon(row.statusCode)}{' '}
                  <span style={{ color: getStatusTextColor(row.statusCode) }}>
                    {row.statusCode}
                  </span>
                </TableCell>
                <TableCell align="right">{row.requestId}</TableCell>
                <TableCell align="right">{row.productTypeCode}</TableCell>
                <TableCell align="right">{row.requestType}</TableCell>
                <TableCell align="right">{row.requestName}</TableCell>
                <TableCell align="right">
                  {row.details}
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => toggleRow(index)}
                  >
                    {openRowIndex === index ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </IconButton>
                </TableCell>
              </TableRow>
              {openRowIndex === index && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <Collapse in={openRowIndex === index}>
                      <Box sx={{ margin: 1 }}>
                        <Typography variant="h6">History Data</Typography>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Requested Date:</TableCell>
                              <TableCell>Completion Date:</TableCell>
                              <TableCell>Error Details:</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {historyData[index] && (
                              <TableRow>
                                <TableCell>
                                  {historyData[index].requestedDate}
                                </TableCell>
                                <TableCell>
                                  {historyData[index].completionDate}
                                </TableCell>
                                <TableCell>
                                  {historyData[index].errorDetails}
                                </TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Colorrequest;

