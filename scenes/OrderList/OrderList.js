import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import useSWR from "swr";

import { OrderService } from "../../services/OrderService";
import { useStyles } from './OrderList.styles';

import {
  formatCar,
  formatCompletedStatus,
  formatDate,
  formatDescription,
} from "../../utils";

const columns = [
  { id: 'startDate', label: 'Start Date', minWidth: 170, format: formatDate },
  { id: 'endDate', label: 'End Date', minWidth: 100, format: formatDate },
  { id: 'car', label: 'Car', minWidth: 170, align: 'right', format: formatCar },
  { id: 'client', label: 'Client', minWidth: 170, align: 'right', format: (value) => value.name },
  { id: 'description', label: 'Description', minWidth: 170, align: 'right', format: formatDescription },
  { id: 'completed', label: 'Completed', minWidth: 170, align: 'center', format: formatCompletedStatus },
];

const orderService = new OrderService();

export const OrderList = ({ removeAction }) => {
  const { data: { orders } = {}, error } = useSWR('/api/orders', orderService.getAll);
  const classes = useStyles();

  if (!orders) {
    return (
      <div className={classes.circularWrapper}>
        <CircularProgress disableShrink />
      </div>
    );
  } else {
    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
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
              {orders.map((order) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={order.id}>
                  {columns.map((column) => {
                    const value = order[column.id];

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
};
