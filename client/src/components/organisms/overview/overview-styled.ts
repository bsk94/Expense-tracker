import styled from 'styled-components';
import { media } from '../../../globalStyles/mediaQueries';
import CalendarIcon from '../../../assets/icons/calendar-line.svg';

export const StyledOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.mobile} {
    background-color: ${({ theme }) => theme.colors.lightest};
  }
`;

export const StyledCalendarIcon = styled.img.attrs({
  src: `${CalendarIcon}`
})`
  align-self: flex-start;
  margin-top: 0.2rem;
`;
