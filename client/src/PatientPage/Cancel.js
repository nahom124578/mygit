import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import './New.css';
export default function Cancel() {
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
            <label>Appointment Number</label>
            <div className='name-input'>
                <input type = 'text' id = 'city'></input>
            </div>
            <label>Appointment Date</label>
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