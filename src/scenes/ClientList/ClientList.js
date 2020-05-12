import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CircularProgress from '@material-ui/core/CircularProgress';
import useSWR from "swr";

import { ClientService } from "services/ClientService";
import { formatCompletedStatus } from "../../utils";

import { useStyles } from "./ClientList.styles";

const columns = [
  { id: "name", label: "Name", minWidth: 170, format: (value) => value },
  { id: "phone", label: "Phone", minWidth: 100, format: (value) => value },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "right",
    format: (value) => value,
  },
  {
    id: "regular",
    label: "Regular",
    minWidth: 170,
    align: "center",
    format: formatCompletedStatus,
  },
];

const clientService = new ClientService();

export const ClientList = () => {
  const { data: { clients } = {}, error } = useSWR('/api/clients', clientService.getAll);
  const classes = useStyles();

  if (!clients) {
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
              {clients.map((client) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={client.id}>
                    {columns.map((column) => {
                      const value = client[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }

  return (
    <Table className="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Regular</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            <td>{client.id}</td>
            <td>{client.name}</td>
            <td>{client.phone}</td>
            <td>{client.email}</td>
            <td>
              <span className="icon">
                {client.regular ? (
                  <FontAwesomeIcon className="has-text-success" icon="check" />
                ) : (
                  <FontAwesomeIcon
                    className="has-text-grey-light"
                    icon="times"
                  />
                )}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
