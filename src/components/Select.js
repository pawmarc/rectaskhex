import React from 'react';
import PropTypes from 'prop-types';

const labelClasses = 'block text-sm font-medium leading-6 text-gray-900';
const selectClasses =
  'block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

export default function Select({
  value,
  id,
  name,
  required,
  onChange,
  onBlur,
  error,
  options,
  label,
  otherClasses,
}) {
  return (
    <div className="sm:col-span-2 sm:col-start-1">
      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
      <select
        className={
          otherClasses ? `${otherClasses} ${selectClasses}` : selectClasses
        }
        value={value}
        id={id}
        name={name}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options.map((option, key) => (
          <option key={`option-${key}`} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}

Select.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  otherClasses: PropTypes.string,
};
