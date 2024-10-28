
import React from 'react'
import { values } from './RegistrationForm';
const SubmittedForm = () => {
 return (
 <div className='submitted_container'>
 <h3 className='heading'>Submitted Form</h3>
 <p className='data'>Name : {values.name}</p>
 <p className='data'>Email : {values.email}</p>
 <p className='data'>Phone : {values.phone}</p>
 <p className='data'>Passport : {values.passport}</p>
 <p className='data'>Travel Date: {values.travel}</p>
 <p className='data'>Return data: {values.return}</p>
 <p className='data'>Destination: {values.destination}</p>
 <p className='data'>Reason : {values.reason}</p>
 </div>
 )
}
export default SubmittedForm;
