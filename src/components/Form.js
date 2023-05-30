import { BiUserCircle } from 'react-icons/bi';
import { useFormik } from 'formik';

import { useState } from 'react';
import { Button, Input, Select } from '.';
import { schema } from '../schemas/validationSchema';

export default function Form() {
  const [error, setError] = useState(false);
  const [successMsg, setsuccessMsg] = useState(false);

  const onChange = (vals) => {
    console.log(vals);
  };
  const onSubmit = async (vals) => {
    const typeLower = vals.type.toLowerCase();

    const dto = {
      name: vals.name,
      preparation_time: vals.preparation_time,
      type: typeLower,
    };

    switch (vals.type) {
      case 'Pizza':
        dto.no_of_slices = vals.no_of_slices;
        dto.diameter = vals.diameter;
        break;
      case 'Soup':
        dto.spiciness_scale = vals.spiciness_scale;
        break;
      default:
        dto.slices_of_bread = vals.slices_of_bread;
    }

    console.log(dto);

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    };

    try {
      const response = await fetch(
        `https://proxy.jsart.pl/hex-api`,
        config
      ).then((res) => {
        setsuccessMsg(true);
      });
    } catch (error) {
      setError(true);
      console.error(`Error ocurred: `, error);
    }
  };

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    touched,
    values,
    errors,
  } = useFormik({
    initialValues: {
      name: '',
      preparation_time: '01:00:00',
      type: 'Pizza',
      no_of_slices: '',
      diameter: '',
      spiciness_scale: '',
      slices_of_bread: '',
    },
    validationSchema: schema,
    onSubmit,
    onChange,
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={values.name || ''}
        label="Dish name"
        type="text"
        name="name"
        id="name"
        required
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && errors.name}
      />
      <Input
        value={values.preparation_time || '00:00:00'}
        label="Preparation time"
        type="time"
        name="preparation_time"
        id="preparation_time"
        required
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.preparation_time && errors.preparation_time}
        step={1}
        min="00:00:00"
        max="11:59:59"
        pattern="[0-9]{2}:[0-9]{2}:[0-9]{2}"
      />

      <Select
        value={values.type || ''}
        label="Type of dish"
        name="type"
        id="type"
        required
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.type && errors.type}
        otherClasses={touched.type && errors.type ? 'ring-2 ring-red-500' : ''}
        options={['Pizza', 'Soup', 'Sandwich']}
      />
      {values.type === 'Pizza' ? (
        <>
          <Input
            value={values.no_of_slices || '0'}
            label="Number of slices"
            type="number"
            name="no_of_slices"
            id="no_of_slices"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.no_of_slices && errors.no_of_slices}
            step={1}
          />
          <Input
            value={values.diameter || '0'}
            label="Diameter"
            type="number"
            name="diameter"
            id="diameter"
            required
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.diameter && errors.diameter}
            step={0.1}
          />
        </>
      ) : (
        ''
      )}
      {values.type === 'Soup' ? (
        <Input
          value={values.spiciness_scale || '0'}
          label="Spiciness scale"
          type="number"
          name="spiciness_scale"
          id="spiciness_scale"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.spiciness_scale && errors.spiciness_scale}
          otherClasses={
            touched.spiciness_scale && errors.spiciness_scale
              ? 'ring-2 ring-red-500'
              : ''
          }
          step={1}
          min="1"
          max="10"
        />
      ) : (
        ''
      )}
      {values.type === 'Sandwich' ? (
        <Input
          value={values.slices_of_bread || '0'}
          label="Slices of bread"
          type="number"
          name="slices_of_bread"
          id="slices_of_bread"
          required
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.slices_of_bread && errors.slices_of_bread}
          otherClasses={
            touched.slices_of_bread && errors.slices_of_bread
              ? 'ring-2 ring-red-500'
              : ''
          }
          step={1}
          min="1"
        />
      ) : (
        ''
      )}

      <Button
        disabled={isSubmitting}
        otherClasses={isSubmitting ? 'bg-red-500/50 hover:bg-red-500/50' : ''}
      >
        Submit
      </Button>
      {error ? (
        <div
          className="p-4 mt-4 text-orange-700 bg-orange-100 border-l-4 border-orange-500"
          role="alert"
        >
          <p className="font-bold">Unsuccessful</p>
          <p>Something not ideal might be happening.</p>
        </div>
      ) : (
        ''
      )}
      {successMsg ? (
        <div
          className="p-4 mt-4 text-green-700 bg-orange-100 border-l-4 border-green-500"
          role="alert"
        >
          <p className="font-bold">Dish sent successfully!</p>
          <p>Bon apetit!</p>
        </div>
      ) : (
        ''
      )}
    </form>
  );
}
