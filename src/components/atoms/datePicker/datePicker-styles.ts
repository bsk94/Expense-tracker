import styled from 'styled-components';

export const StyledBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0.5em;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  button {
    border: 0;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
  }
  P {
    font-size: 2rem;
    margin: 0rem 2rem 2rem 2rem;
  }
`;

export const CalendarContainer = styled.div`
  .react-calendar {
    max-width: 45rem;
    height: 35rem;
    background-color: ${({ theme }) => theme.colors.white};
    font-family: Arial, Helvetica, sans-serif;
  }
  .react-calendar__navigation button {
    color: ${({ theme }) => theme.colors.neonOrange};
    min-width: 4rem;
    background: none;
    font-size: 2.2rem;
    margin-top: 1rem;
    border: none;
  }
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    height: 5rem;
  }
  .react-calendar__month-view {
    background: none;
  }
  .react-calendar__month-view__weekdays {
    font-weight: bold;
    height: 3rem;
    display: flex;
    align-items: center;
  }
  .react-calendar__month-view__weekdays__weekday {
    display: flex;
    justify-content: center;
  }
  .react-calendar__tile {
    border: none;
    height: 4.5rem;
    background: none;
    font-size: 1.5rem;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: ${({ theme }) => theme.colors.midGreen};
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  abbr[title] {
    text-decoration: none;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: ${({ theme }) => theme.colors.neonOrange};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.neonOrange};
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: ${({ theme }) => theme.colors.neonOrange};
    border-radius: 6px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: ${({ theme }) => theme.colors.neonOrange};
  }
  .react-calendar__tile--active {
    background: ${({ theme }) => theme.colors.neonOrange};
    border-radius: 6px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${({ theme }) => theme.colors.neonOrange};
    color: ${({ theme }) => theme.colors.white};
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }
  .react-calendar__tile--range {
    background: ${({ theme }) => theme.colors.lightest};
    color: ${({ theme }) => theme.colors.neonOrange};
  }
  .react-calendar__tile--rangeStart {
    background: ${({ theme }) => theme.colors.neonOrange};
    color: ${({ theme }) => theme.colors.white};
  }
  .react-calendar__tile--rangeEnd {
    background: ${({ theme }) => theme.colors.neonOrange};
    color: ${({ theme }) => theme.colors.white};
  }
`;
