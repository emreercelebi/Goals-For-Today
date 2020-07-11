import React from 'react';

const Link = (props) => {

  const modifiers = props.modifiers ? ` ${props.modifiers}` : '';
  const classes = `${props.baseClass}-link${modifiers}`;

  return (
    <a className={classes} href={props.href}>
      {props.children}
    </a>
  );
}

export default Link;
