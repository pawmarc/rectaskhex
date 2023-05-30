import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string('Must be a text value').required('Dish name is required'),
  preparation_time: Yup.string('Must be a string').required(
    'Preparation time is required'
  ),
  // * CONDITIONAL TYPE
  type: Yup.string()
    .oneOf(['Pizza', 'Soup', 'Sandwich'], 'Invalid meal type')
    .required('Type is required'),
  // * IS TYPE OF PIZZA:
  no_of_slices: Yup.number('Must be a number').when('type', {
    is: (type) => type === 'Pizza',
    then: () =>
      Yup.number('Must be a number')
        .required('Number of slices is required')
        .positive('Must be a positive number'),
  }),
  diameter: Yup.number('Must be a decimal number').when('type', {
    is: (type) => type === 'Pizza',
    then: () =>
      Yup.number('Must be a decimal number')
        .positive('Must be a positive number')
        .required('Diameter is required'),
  }),
  // * IS TYPE OF SOUP:
  spiciness_scale: Yup.number('Must be a number from 1 to 10')
    .min(1, 'Min spiciness is 1')
    .max(10, 'Max spiciness is 10')
    .when('type', {
      is: (type) => type === 'Soup',
      then: () =>
        Yup.number('Must be a number from 1 to 10')
          .min(1, 'Min spiciness is 1')
          .max(10, 'Max spiciness is 10')
          .required('required'),
    }),
  // * IS TYPE OF SANDWICH:
  slices_of_bread: Yup.number('Must be a number').when('type', {
    is: (type) => type === 'Sandwich',
    then: () =>
      Yup.number('Must be a number')
        .positive('Must be a positive number')
        .required('required'),
  }),
});
