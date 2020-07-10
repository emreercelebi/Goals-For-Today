import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const IconButton = (props) => {

  const acceptableSizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive'];
  const size = props.size && acceptableSizes.includes(props.size) ? props.size : 'big';

  return (
    <button className={props.baseClass + '-' + 'button'} type='button' onClick={props.onClick}>
      <Icon name={props.icon} size={size} />
    </button>
  );
}

IconButton.propTypes = {
  baseClass: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default IconButton;