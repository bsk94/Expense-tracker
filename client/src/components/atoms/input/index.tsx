import React, { HTMLInputTypeAttribute } from 'react';
import { StyledInput, StyledContainer, StyledLabel, StyledInputIcon } from './input-styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children: string;
  onToggle?: (event: React.MouseEvent<HTMLInputElement>) => void;
  isPassowrdIcon?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  children,
  onToggle,
  isPassowrdIcon,
  className
}) => {
  return (
    <StyledContainer>
      {isPassowrdIcon ? <StyledInputIcon onClick={onToggle} className={className} /> : null}

      <StyledInput
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        id={name}
      />
      <StyledLabel htmlFor={name}>{children}</StyledLabel>
    </StyledContainer>
  );
};

export default Input;
