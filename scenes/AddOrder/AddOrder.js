import range from "lodash/range";
import moment from "moment";
import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputAdornment from "@material-ui/core/InputAdornment";
import DateFnsUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import clsx from "clsx";
import useSWR from "swr";

import { ClientService } from "services/ClientService";
import { CarService } from "services/CarService";

import { useStyles } from "./AddOrder.styles";

const clientService = new ClientService();
const carService = new CarService();

export const AddOrder = () => {
  const { data: { clients } = {}, error } = useSWR(
    "/api/clients",
    clientService.getAll
  );
  const { data: { cars } = {} } = useSWR("/api/cars", carService.getAll);
  const classes = useStyles();
  const [clientId, setClientId] = useState("");
  const [carManufacturer, setCarManufacturer] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carYear, setCarYear] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(moment());
  const [description, setDescription] = useState("");

  const disabledCarModelField = !carManufacturer;

  const handleCarManufacturerChange = ({ target: { value } }) =>
    setCarManufacturer(value);
  const handleCarModelChange = ({ target: { value } }) => setCarModel(value);
  const handleCarYearChange = ({ target: { value } }) => setCarYear(value);
  const handleClientIdChange = ({ target: { value } }) => setClientId(value);
  const handleDescriptionChange = ({ target: { value } }) =>
    setDescription(value);
  const handleStartDateChange = (date) => setStartDate(date);
  const handleEndDateChange = (date) => setEndDate(date);

  return (
    <Paper className={classes.root}>
      <form noValidate autoComplete="off">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={1}
        >
          <Grid container spacing={4}>
            <Grid item sm={4}>
              <FormControl
                className={clsx(classes.formControl, classes.selectWrapper)}
                fullWidth
              >
                <InputLabel id="demo-simple-select-label" shrink>
                  Car manufacturer
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={carManufacturer}
                  onChange={handleCarManufacturerChange}
                >
                  {cars &&
                    Object.keys(cars).map((car) => (
                      <MenuItem key={car} value={car}>
                        {car}
                      </MenuItem>
                    ))}
                </Select>
                {!cars && (
                  <CircularProgress
                    size={24}
                    className={classes.selectProgress}
                  />
                )}
              </FormControl>
            </Grid>
            <Grid item sm={4}>
              <FormControl className={classes.selectWrapper} fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  shrink
                  disabled={disabledCarModelField}
                >
                  Car model
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={carModel}
                  onChange={handleCarModelChange}
                  disabled={disabledCarModelField}
                >
                  {carManufacturer &&
                    cars[carManufacturer].map((model) => (
                      <MenuItem key={model} value={model}>
                        {model}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={4}>
              <FormControl className={classes.selectWrapper} fullWidth>
                <InputLabel id="demo-simple-select-label" shrink>
                  Car's production date
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={carYear}
                  onChange={handleCarYearChange}
                >
                  {range(moment().year(), moment().year() - 31).map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item sm={4}>
              <FormControl
                className={clsx(classes.formControl, classes.selectWrapper)}
                fullWidth
              >
                <InputLabel id="demo-simple-select-label">Client</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={clientId}
                  onChange={handleClientIdChange}
                >
                  {clients &&
                    clients.map((client) => (
                      <MenuItem key={client.id} value={client.id}>
                        {client.name}
                      </MenuItem>
                    ))}
                </Select>
                {!clients && (
                  <CircularProgress
                    size={24}
                    className={classes.selectProgress}
                  />
                )}
              </FormControl>
            </Grid>
            <Grid item sm={4}>
              <TextField
                id="standard-helperText"
                label="Phone"
                defaultValue=""
                helperText="Do not enter the first zero"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+48</InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid item sm={4}>
                <FormControl
                  className={clsx(classes.formControl, classes.selectWrapper)}
                  fullWidth
                >
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="DD/MM/YYYY"
                    margin="normal"
                    id="date-picker-inline"
                    label="Start date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    disablePast
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item sm={4}>
                <FormControl
                  className={clsx(classes.formControl, classes.selectWrapper)}
                  fullWidth
                >
                  <KeyboardDatePicker
                    disableToolbar
                    disablePast
                    variant="inline"
                    format="DD/MM/YYYY"
                    margin="normal"
                    id="date-picker-inline"
                    label="End date"
                    value={endDate}
                    onChange={handleEndDateChange}                    
                    minDate={startDate}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </FormControl>
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid container spacing={4}>
            <Grid item sm={12}>
              <FormControl
                className={clsx(classes.formControl, classes.selectWrapper)}
                fullWidth
              >
                <TextField
                  id="standard-multiline-flexible"
                  label="Description"
                  multiline
                  rowsMax={4}
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={4} justify="flex-end">
            <Grid item>
              <Button variant="contained" color="primary">
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};
