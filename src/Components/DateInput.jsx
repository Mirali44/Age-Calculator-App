import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';



function DateInput({addDate}) {
  const onSubmit = async (values, actions) => {

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    addDate(values.day,values.month,values.year)
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        day: '',
        month: '',
        year: '',
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  //   console.log(formik);
  return (
    
    <form className='inputs' onSubmit={handleSubmit}>
      <div className="inputDiv">
        <label className={errors.day ? 'error' : ''}>DAY</label>
        <input
          type="string"
          value={values.day}
          onChange={handleChange}
          id="day"
          placeholder="DD"
          className={errors.day ? 'input-error' : 'day'}
        />
        {errors.day && <p className="error">{errors.day}</p>}
      </div>
      <div className="inputDiv">
        <label className={errors.day ? 'error' : ''}>MONTH</label>
        <input
          type="string"
          value={values.month}
          onChange={handleChange}
          id="month"
          placeholder="MM"
          className={errors.month ? 'input-error' : 'month'}
        />
        {errors.month && <p className="error">{errors.month}</p>}
      </div>
      <div className="inputDiv">
        <label className={errors.day ? 'error' : ''}>YEAR</label>
        <input
          type="string"
          value={values.year}
          onChange={handleChange}
          id="year"
          placeholder="YYYY"
          className={errors.year ? 'input-error' : 'year'}
        />
        {errors.year && <p className="error">{errors.year}</p>}
      </div>
      
      <button disabled={isSubmitting} type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
      </button>
    </form>
    
  );
}

export default DateInput;
