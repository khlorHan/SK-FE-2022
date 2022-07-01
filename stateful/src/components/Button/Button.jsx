import './Button.css';

import React from 'react';

// Stateless Component
const OriginButton = ({ type, secondary, children, ...restProps }, ref) => (
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

OriginButton.defaultProps = {
  type: 'button',
  secondary: false,
};

// HOC 고차 컴포넌트 패턴을 사용해 외부에서 전달된 ref를 OriginButton 컴포넌트에 공급
const Button = React.forwardRef(OriginButton);

Button.displayName = 'Button';

export { Button };
