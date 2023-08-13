import * as yup from 'yup';

const date = new Date()
const y = date.getFullYear()

export const basicSchema = yup.object().shape({
  day: yup
    .number()
    .integer('Must be a valid day')
    .positive("Must be a valid day")
    .max(31, "Must be a valid day")
    .required("This field is required"),
  month: yup
  .number()
  .integer('Must be a valid month')
  .positive("Must be a valid month")
  .max(12, "Must be a valid month")
  .required("This field is required"),
  year: yup
  .number()
  .integer('Must be a valid year')
  .positive("Must be a valid year")
  .max(y , "Must be a valid year")
  .required("This field is year"),
});