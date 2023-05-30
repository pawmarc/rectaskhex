import React from 'react';
import PropTypes from 'prop-types';

const buttonClasses =
  'mt-4 px-3 mr-0 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600';

export default function Button({ children, disabled, otherClasses }) {
  return (
    <div className="flex items-end ">
      <button
        disabled={disabled}
        className={
          otherClasses ? `${buttonClasses} ${otherClasses}` : buttonClasses
        }
        type="submit"
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  otherClasses: PropTypes.string,
};
