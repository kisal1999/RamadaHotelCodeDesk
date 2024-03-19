import React, { useState } from 'react';

import './Booking.css';

import { Grid, Select, MenuItem, Button } from '@material-ui/core'

import DateRangeIcon from '@material-ui/icons/DateRange';
import SearchIcon from "@material-ui/icons/Search";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";


const Booking = () => {

    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedOptionAdult, setSelectedOptioAdultn] = useState('Adult');

    const formatInputValue = () => {
        if (!selectedDay) return '';
        return `Day: ${selectedDay.day}`;
    };

    return (
        <Grid container >
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={6} >
                <Grid container xs={12} spacing={5} className='bookingOverlay'>
                    <Grid item xs={3} md>
                        <Select
                            value={selectedOptionAdult}
                            // onChange={handleChange}
                            displayEmpty
                            className="dropdown"
                        >
                            <MenuItem value="adult1">1</MenuItem>
                            <MenuItem value="adult2">2</MenuItem>
                            <MenuItem value="adult3">3</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={3} md>
                        <Select
                            // value={selectedOption}
                            // onChange={handleChange}
                            displayEmpty
                            className="dropdown"
                        >
                            <MenuItem value="" disabled>
                                Select an option
                            </MenuItem>
                            <MenuItem value="option1">Option 1</MenuItem>
                            <MenuItem value="option2">Option 2</MenuItem>
                            <MenuItem value="option3">Option 3</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={3} md>
                        <DatePicker
                            value={selectedDay}
                            onChange={setSelectedDay}
                            inputPlaceholder="Check In"
                            formatInputText={formatInputValue}
                            inputClassName="my-custom-input"
                            shouldHighlightWeekends
                        />
                    </Grid>
                    <Grid item xs={3} md>
                        <DatePicker
                            value={selectedDay}
                            onChange={setSelectedDay}
                            inputPlaceholder="Check Out"
                            formatInputText={formatInputValue}
                            inputClassName="my-custom-input"
                            shouldHighlightWeekends
                        />
                        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                label="Select Date"
                                format="MM/dd/yyyy"
                                onChange={""}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton>
                                            <DateRangeIcon />
                                        </IconButton>
                                    ),
                                }}
                            />
                        </MuiPickersUtilsProvider> */}
                    </Grid>
                    <Grid item xs={3} md>
                        <Button variant="contained" color="primary" className='searchButton'>
                            <SearchIcon/>
                        </Button>
                    </Grid>
                </Grid>

            </Grid>

        </Grid>
    );
};

export default Booking;