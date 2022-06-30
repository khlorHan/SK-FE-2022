import React from 'react';
import classNames from 'classnames';
import styles from './A11yHidden.module.css';

export const A11yHidden = ({
  as: Component,
  focusable,
  external,
  className: customClassName,
  style: customStyle,
  ...restProps
}) => {
  const classes = classNames(
    styles.a11yHidden,
    {
      [styles.focusable]: focusable,
    },
    customClassName
  );

  return (
    <Component
      className={classes}
      target={external && Component === 'a' ? '_blank' : null}
      rel={external && Component === 'a' ? 'noopener norefferer' : null}
      style={{
        fontSize: 24,
        ...customStyle,
      }}
      {...restProps}
    />
  );
};

A11yHidden.defaultProps = {
  as: 'span',
  focusable: false,
  external: false,
};
