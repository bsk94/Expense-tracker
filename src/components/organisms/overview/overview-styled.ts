import styled from 'styled-components';
import { media } from '../../../globalStyles/mediaQueries';

export const StyledOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.mobile} {
    background-color: ${({ theme }) => theme.colors.lightest};
  }
`;
