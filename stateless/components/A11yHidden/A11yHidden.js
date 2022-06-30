import React from 'react';
import classNames from 'classnames';
// import '../../styles/A11yHidden.css';

export const A11yHidden = ({ as: Component, focusable, ...restProps }) => {
  const classes = classNames('a11yHidden', { focusable });

  return <Component className={classes} {...restProps} />;
};

A11yHidden.defaultProps = {
  as: 'span',
  focusable: false,
};
