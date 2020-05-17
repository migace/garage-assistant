import moment from "moment";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import { SHORT_CAR_DESCRIPTION_LENGTH } from "./constants";

export const formatCar = (car) =>
  `${car.manufacturer} ${car.model} (${car.year})`;

export const formatDescription = (description) =>
  description < SHORT_CAR_DESCRIPTION_LENGTH
    ? description
    : `${description.slice(0, SHORT_CAR_DESCRIPTION_LENGTH)}...`;

export const formatDate = (date) => moment(date).format("MM/DD/YY");

export const formatCompletedStatus = (value) =>
  value ? <CheckIcon color="primary" /> : <CloseIcon color="secondary" />;
