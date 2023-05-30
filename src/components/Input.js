import React from 'react';
import PropTypes from 'prop-types';

const labelClasses = 'block text-sm font-medium leading-6 text-gray-900';

const inputClasses =
  'block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

export default function Input({
  value,
  type,
  id,
  name,
  label,
  required,
  onChange,
  onBlur,
  error,
  min,
  max,
  otherClasses,
  pattern,
  step,
}) {
  return (
    <div className="sm:col-span-2 sm:col-start-1">
      <label className={labelClasses} htmlFor={id}>
        {label}
      </label>
      <div className="mt-2">
        <input
          className={
            otherClasses ? `${otherClasses} ${inputClasses}` : inputClasses
          }
          value={value}
          name={name}
          id={id}
          type={type}
          onChange={onChange}
          required={required}
          onBlur={onBlur}
          step={step}
          min={min}
          max={max}
          pattern={pattern}
        />
      </div>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  step: PropTypes.number,
  min: PropTypes.string,
  max: PropTypes.string,
  otherClasses: PropTypes.string,
  pattern: PropTypes.string,
};

Input.defaultProp = {
  required: false,
  options: null,
};
