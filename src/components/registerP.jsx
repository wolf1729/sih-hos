import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSSFiles/registerP.css';
import { createPatientAccount } from '../services/firebaseFunction';
import PatientDashboard from '../screens/patientDashboard';

function RegisterPatient() {

  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  const registerButtonFunction = async () => {
    try{
      await createPatientAccount(email, password);
      console.log('acount created')
      return <Link to="/patientDashboard"></Link>
    }catch(error){
      console.log(`error occured : ${error}`)
    }
  }

  return (
    <div className="containerR">
      <div className="registration-form">
        <h2 className="h12">Registration</h2>
        <form>
          <input className="form-input" type="text" name="name" placeholder="Name" />
          <input className="form-input" type="email" name="email" placeholder="Email ID" onChange={(e) => setEmail(e.target.value)}/>
          <input className="form-input" type="phone_number" name="phone_number" placeholder="Phone number" />
          <select className="new" name="gender">
            <option value="">Please select one gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
          <input className="new2" type="date" name="Date_of_birth" placeholder="DOB" />
          <input className="form-input" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <input className="form-input" type="password" name="confirm_password" placeholder="Confirm Password" />
        </form>
        <button className="register-btn" type="submit" onClick={registerButtonFunction} >Register</button>
        <p className="link">Already have an account? <Link to="/patientLogin">Login</Link></p>
      </div>
    </div>
  );
}

export default RegisterPatient;
