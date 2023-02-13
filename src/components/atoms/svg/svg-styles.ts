import styled from 'styled-components';

export const SvgContainer = styled.div<{
  height?: number;
  width?: number;
  fill?: string;
}>`
  & circle {
    fill: ${(props) => (props.fill ? '#FDB827' : '#FF817F')};
  }
`;
