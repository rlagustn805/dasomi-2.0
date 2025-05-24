import { buttonSizes, buttonVariants } from './button.style';
import { ButtonProps } from './button.types';

const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  children,
  ...props
}: ButtonProps) => {
  const base =
    'rounded font-semibold transition-colors duration-200 hover:cursor-pointer';

  return (
    <button
      disabled={disabled || isLoading}
      className={`${className} ${base} ${buttonVariants[variant]} ${
        buttonSizes[size]
      } ${disabled ? 'opacity-50' : ''}`}
      {...props}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
