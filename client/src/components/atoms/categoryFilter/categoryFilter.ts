import styled from 'styled-components';
import SelectIcon from '../../../assets/icons/select-icon.svg';

export const StyledSelectContainer = styled.ul`
  position: absolute;
  width: 18rem;
  border: 1px solid ${({ theme }) => theme.colors.midGreen};
  border-radius: 5px;
  right: -1.8rem;
  top: 35px;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem 0.5rem;

  :before {
    content: '';
    position: absolute;
    top: -0.7rem;
    right: 2.5rem;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    border-left: 1px solid ${({ theme }) => theme.colors.midGreen};
    border-top: 1px solid ${({ theme }) => theme.colors.midGreen};
    transform: rotate(45deg);
  }
`;

export const StyledItemList = styled.li`
  padding: 1rem;

  :hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.neonOrange};
    cursor: pointer;
  }
`;

export const StyledSelectIcon = styled.img.attrs({
  src: `${SelectIcon}`
})``;

export const StyledContainer = styled.div`
  position: relative;
`;
