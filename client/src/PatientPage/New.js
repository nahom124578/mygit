import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import './New.css';
export default function New() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
        setName(value);
        } else if (name === 'email') {
        setEmail(value);
        }
    };

    const dateoptions = Array.from({ length: 31 }, (_, i) => (
        <option key={i + 1} value={i + 1}>
          {i + 1}
        </option>
    ));

    const months = [ 'January','February','March','April','May', 'June','July','August',
        'September','October', 'November','December'];

    const years = Array.from({ length: 27 }, (_, i) => 2024 + i); // Years from 2024 to 2050

    return (
        <div className="new-main">
            <label> Name </label>
            <div className='name-input'>
                <input type = 'text' id = 'first_name' placeholder='First Name'></input>
                <input type = 'text' id = 'middle_name' placeholder='Middle Name'></input>
                <input type = 'text' id = 'last_name' placeholder='Last Name'></input>
            </div>
            <label> Date of Birth </label>
            <div className='name-input'>
                <select id="date" name="dropdown">
                    <option>Day</option>
                    {dateoptions}
                </select>
                <select id="date" name="dropdown">
                    <option>Month</option>
                    {months.map((month, index) => (
                        <option key={index} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
                <select id="date" name="dropdown">
                    <option value="">Year</option>
                    {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                    ))}
                </select>
            </div>
            <label>Phone Number</label>
            <div className='name-input'>
                <input type = 'text' id = 'phone_number'></input>
                <select id="dropdown" name="dropdown">
                    <option value="">Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
            <div className='address'>
                <label>Street Address</label>
                <input type = 'text' id = 'addess_one'></input>
                <label>Street Address line 2</label>
                <input type = 'text' id = 'address_two'></input>
            </div>
            <label>City</label>
            <div className='name-input'>
                <input type = 'text' id = 'city'></input>
                <input type = 'text' id = 'state' placeholder='state/province'></input>
            </div>
            <label>Email</label>
            <div className='name-input'>
                <input type = 'email' id = 'email' placeholder= 'eg: myname@example.com'></input>
            </div>
            <label>Have you ever visited our hospital before?</label>
            <div className='check'>
                <label>Yes</label>
                <input type='radio' id = 'yes' name = 'yes-no'></input>
                <label>No</label>
                <input type = "radio" id = 'no' name = 'yes-no'></input>
            </div>
            <label>What department would you like to get an appointment from?</label>
            <div className='name-input'>
                <select id="dropdown">
                    <option value="">Department</option>
                    <option>medicine</option>
                    <option>gynaecology</option>
                    <option>obstatrics</option>
                    <option>paediatrics</option>
                    <option>eye</option>
                </select>
            </div>
            <label>Preferred Appointment Date</label>
            <div className='name-input'>
                <ReactDatePicker />
            </div>
            <div className='but-cont'>
                <button className='new-cancel'>
                    Submit
                </button>
            </div>
        </div>
    )
}