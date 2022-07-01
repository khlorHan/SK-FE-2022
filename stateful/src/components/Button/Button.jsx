import './Button.css';

import React from 'react';

// Stateless Component
const OriginButton = (
  { type = 'button', secondary = false, children, ...restProps },
  ref
) => (
  <button
    ref={ref}
    type={type}
    className={`button button--rounded button--${
      !secondary ? 'primary' : 'secondary'
    }`}
    {...restProps}
  >
    {children}
  </button>
);

// only check changed props
const Button = React.memo(React.forwardRef(OriginButton));

Button.displayName = 'Button';

export { Button };
