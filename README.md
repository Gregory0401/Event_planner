import React, { useState } from 'react'; import s from './Dropdown.module.css';

export const DropdownPriority = ({ handleSelectedPriority, value2 }) => { const
[selectedValue, setSelectedValue] = useState('showAll');

const handleChange = event => { setSelectedValue(event.target.value);
handleSelectedPriority(event.target.value); };

return ( <> <div className={s.container}> <label className={s.label}></label>
<select
          onChange={handleChange}
          value={selectedValue}
          className={s.select}
        > <option value="showAll" className={s.option}> Sort by </option>
<option value="showAll" className={s.option}> Show all </option>
<option value="high" className={s.option}> High </option>
<option value="medium" className={s.option}> Medium </option>
<option value="low" className={s.option}> Low </option> </select> </div> </> );
};

export default DropdownPriority;
