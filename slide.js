import React, { useState } from 'react';
import moment from 'moment';

const DateSlider = ({ minDate, maxDate, startDate, endDate }) => {
const [isMonthView, setIsMonthView] = useState(false);

const start = moment(startDate);
const end = moment(endDate);
const diffYears = end.diff(start, 'years');
const diffMonths = end.diff(start, 'months');

const handleToggleView = () => {
setIsMonthView(!isMonthView);
};

const handleChange = (event) => {
const value = event.target.value;
const newStartDate = isMonthView ? start.clone().add(value, 'months') : start.clone().add(value, 'years');
const newEndDate = isMonthView ? end.clone().add(value, 'months') : end.clone().add(value, 'years');
};

return (
    <div className="date-slider">
    <div className="date-slider__view-toggle">
    <button onClick={handleToggleView}>{isMonthView ? 'По годам' : 'По месяцам'}</button>
    </div>
    <div className="date-slider-container">
    <input type="range" min="0" max={isMonthView ? diffMonths : diffYears} onChange={handleChange} />
    </div>
    <div className="date-slider_labels">
    <div className="date-slider_label">{start.format(isMonthView ? 'MMM YYYY' : 'YYYY')}</div>
    <div className="date-slider_label">{end.format(isMonthView ? 'MMM YYYY' : 'YYYY')}</div>
    </div>
    </div>
    );
}; 
export default DateSlider; 