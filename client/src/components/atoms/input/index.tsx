import React, { HTMLInputTypeAttribute } from 'react';
import { StyledInput, StyledContainer, StyledLabel } from './input-styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  children: string;
}

const Input: React.FC<InputProps> = ({ type, name, value, onChange, placeholder, children }) => {
  return (
    <StyledContainer>
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
