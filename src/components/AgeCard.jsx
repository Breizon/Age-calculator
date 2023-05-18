import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {FaBirthdayCake} from 'react-icons/fa'

const AgeCard = ({onCalculate, birthday}) => {

    /*------------ Formulario/Form -------------------- */
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleDay = (e) => {
        setDay(e.target.value)
    };

    const handleMonth = (e) => {
        setMonth(e.target.value)
    };

    const handleYear = (e) => {
        setYear(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const birthday = new Date(`${year}-${month}-${day}`)
        onCalculate(birthday)
    }

    /*--------------------- Demostracion del resultado --------------------- */

    const calculateAge = () => {
        if (birthday) {
            const today = new Date();
            const diff = today - birthday;
            const ageInSeconds = new Date(diff);
            const years = Math.abs(ageInSeconds.getUTCFullYear() - 1970);
            const months = Math.abs(ageInSeconds.getUTCMonth());
            const days = Math.abs(ageInSeconds.getUTCDate() - 1);
            return {years, months, days}
        }
        return null
    }

    const age = calculateAge()

  return (
    <body>
        <div className="card">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <div className="block">
                            <label htmlFor='day'>Day</label>
                            <input type="number" id='day' placeholder='DD' value={day} onChange={handleDay} required />
                            <small></small>
                        </div>
                        <div className="block">
                            <label htmlFor='month'>Month</label>
                            <input type="number" id='month' placeholder='MM' value={month} onChange={handleMonth} required />
                            <small></small>
                        </div>
                        <div className="block">
                            <label htmlFor='year'>Year</label>
                            <input type="number" id='year' placeholder='YYYY' value={year} onChange={handleYear} required />
                            <small></small>
                        </div>
                    </div>
                    <div className="submit_block">
                        <hr />
                        <button className='submit_btn' type='submit'><FaBirthdayCake className='icon'/></button>
                    </div>
                </form>
                <div className="output">
                    {age !== null ? (
                    <div>
                        <h1><span id='YY'>{age.years}</span>years</h1>
                        <h1><span id='MM'>{age.months}</span>months</h1>
                        <h1><span id='DD'>{age.days}</span>days</h1>
                    </div>
                    ) : (
                    <div>
                        <h1><span id='YY'>--</span>years</h1>
                        <h1><span id='MM'>--</span>months</h1>
                        <h1><span id='DD'>--</span>days</h1>
                    </div>
        )}
    </div>
            </div>  
        </div>
    </body>
  )
}

export default AgeCard