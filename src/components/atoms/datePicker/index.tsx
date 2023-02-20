import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';
import { CalendarContainer, StyledBg, StyledWrapper } from './datePicker-styles';

interface DatePickerProps {
  selectRange: boolean;
  onChange: any;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const DatePickerModal: React.FC<DatePickerProps> = ({
  selectRange,
  onChange,
  isModalOpen,
  setIsModalOpen
}) => {
  const close = useCallback(() => setIsModalOpen(false), []);

  const handleEscape = useCallback(
    (event: any) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  useEffect(() => {
    if (isModalOpen) document.addEventListener('keydown', handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isModalOpen]);

  if (!isModalOpen) return null;
  return ReactDOM.createPortal(
    <>
      <StyledBg onClick={close} />
      <StyledWrapper>
        <button onClick={close}>x</button>
        <CalendarContainer>
          <Calendar
            onChange={onChange}
            selectRange={selectRange}
            calendarType="US"
            maxDate={new Date()}
          />
        </CalendarContainer>
      </StyledWrapper>
    </>,
    document.getElementById('portal') as HTMLElement
  );
};

export default DatePickerModal;
