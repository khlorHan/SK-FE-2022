import './Button.css';

import React from 'react';
import { useFetch } from '@/hooks';
import { Spinner } from '@/components';

// Stateless Component
const OriginButton = (
  { type = 'button', secondary = false, children, ...restProps },
  ref
) => {
  const { isLoading, data } = useFetch('https://randomuser.me/api');

  if (isLoading) {
    return <Spinner />;
  } else {
    console.log(data);
  }

  return (
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
};

// only check changed props
const Button = React.memo(React.forwardRef(OriginButton));

Button.displayName = 'Button';

export { Button };
