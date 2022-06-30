import './Button.css';

// Stateless Component
export const Button = ({
  type = 'button',
  secondary = false,
  children,
  ...restProps
}) => (
  <button
    type={type}
    className={`button button--rounded button--${
      !secondary ? 'primary' : 'secondary'
    }`}
    {...restProps}
  >
    {children}
  </button>
);
