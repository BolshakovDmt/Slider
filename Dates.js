import React, { useState } from 'react';
import DateSlider from './DateSlider';

const App = () => {
const [startDate, setStartDate] = useState('2022-01-01');
const [endDate, setEndDate] = useState('2022-12-31');

const handleStartDateChange = (event) => {
setStartDate(event.target.value);
};

const handleEndDateChange = (event) => {
setEndDate(event.target.value);
};

return (
<div className="app">
<div className="date-inputs">
<input type="date" value={startDate} onChange={handleStartDateChange} />
<input type="date" value={endDate} onChange={handleEndDateChange} />
</div>
<DateSlider minDate="2014-01-01" maxDate="2023-12-31" startDate={startDate} endDate={endDate} />
</div>
);
};
export default App;