import React, { HTMLInputTypeAttribute } from 'react';
import { StyledInput, StyledContainer } from './input-styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, name, value, onChange, placeholder }) => {
  return (
    <StyledContainer>
      <StyledInput
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledContainer>
  );
};

export default Input;
