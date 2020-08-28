import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import dateFormat from 'dateformat'

const DateInput = ({ date, setDate }) => {
    const [value] = useState(new Date())

    const HandleChangeDates = date => {
        const formatedDate = dateFormat(date, 'isoDate')
        setDate(formatedDate)
    }



    return (
        <div>
            Select a Date:
            <Calendar
                onChange={HandleChangeDates}
                value={value}
                maxDate={value}

            />

        </div>
    )
};

export default DateInput;