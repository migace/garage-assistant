import { SHORT_CAR_DESCRIPTION_LENGTH } from '../../constants';

export const getCar = (car) => `${car.make} ${car.model} (${car.year})`;
export const getDescription = (description) => (
  description < SHORT_CAR_DESCRIPTION_LENGTH 
    ? description 
    : `${description.slice(0, SHORT_CAR_DESCRIPTION_LENGTH)}...`
);