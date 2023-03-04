import styled from 'styled-components';

export const SvgContainer = styled.div<{
  height?: number;
  width?: number;
  fill?: string;
}>`
  & circle {
    fill: ${(props) => (props.fill ? '#FDB827' : '#FF817F')};
  }

  & svg {
    height: ${(props) => (props.height ? `${props.height}px` : '100%')};
    width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  }
`;
