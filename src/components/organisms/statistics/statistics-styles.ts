import styled from 'styled-components';
import { media } from '../../../globalStyles/mediaQueries';
import CalendarIcon from '../../../assets/icons/calendar-line.svg';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  ${media.mobile} {
    background-color: ${({ theme }) => theme.colors.lightest};
  }
  .recharts-responsive-container {
  }

  .recharts-legend-wrapper {
  }

  .recharts-default-legend {
  }

  .recharts-legend-item-text {
    color: black !important;
  }
`;

export const StyledIconList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media.desktop} {
    column-gap: 10rem;
  }
`;

export const StyledIconListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
`;

export const StyledTextContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const StyledCalendarIcon = styled.img.attrs({
  src: `${CalendarIcon}`
})`
  align-self: flex-start;
  grid-column: 1 / span 2;
  padding: 1.5rem;
  ${media.mobileS} {
    padding: 0.5rem 0rem 0.5rem 1.5rem;
  }
`;
