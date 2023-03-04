import React from 'react';
import { StyledButton } from './button-styles';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type, className, disabled }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick} type={type} className={className}>
      {children}
    </StyledButton>
  );
};
export default Button;
