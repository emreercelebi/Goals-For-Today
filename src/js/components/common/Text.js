import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => {

  const modifiers = props.modifiers ? ` ${props.modifiers}` : '';

  return (
    <p className={props.baseClass + '-text' + modifiers}>
      {props.children}
    </p>
  );

}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  baseClass: PropTypes.string.isRequired
}

export default Text;