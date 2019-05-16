import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
  <button type="button" onClick={onClick} style={{ background: '#911' }}>
    {children}
  </button>
);

Button.defaultProps = {
  children: 'Salvar',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default Button;
