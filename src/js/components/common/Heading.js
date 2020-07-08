import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {

  let Tag;
  if (props.hLevel > 0 && props.hLevel < 7) {
    Tag = 'h' + props.hLevel;
  } else {
    Tag = 'h4';
  }

  return (
    <Tag className={props.baseClass + '-heading'}>
      {props.children}
    </Tag>
  );

}

Heading.propTypes = {
  hLevel: PropTypes.number,
  children: PropTypes.string.isRequired,
  baseClass: PropTypes.string.isRequired
}

export default Heading;