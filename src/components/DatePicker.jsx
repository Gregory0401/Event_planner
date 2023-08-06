import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import css from './DatePicker.module.css';

// Function to reformat day names to show in first three letters
const formatWeekdayName = day => format(day, 'EEE');

export const DatePicker = ({
  startDate,
  onSelect,
  onClose,
  onSave,
  onDayClick,
}) => {
  return (
    <>
      <DayPicker
        selected={startDate}
        mode="single"
        onSelect={onSelect}
        formatters={{ formatWeekdayName }}
      />

      <div className={css.actions}>
        <button type="button" className={css.cancelBtn} onClick={onClose}>
          Cancel
        </button>
        <button type="button" className={css.selectBtn} onClick={onSave}>
          Choose date
        </button>
      </div>
    </>
  );
};
