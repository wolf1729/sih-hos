import '../CSSFiles/registerP.css';

function RegisterPatient() {
  return (
    <div className="containerR">
      <div className="registration-form">
        <h2 className="h12">Registration</h2>
        <form>
          <input className="form-input" type="text" name="name" placeholder="Name" />
          <input className="form-input" type="email" name="email" placeholder="Email ID" />
          <input className="form-input" type="phone_number" name="phone_number" placeholder="Phone number" />
          <select className="new" name="gender">
            <option value="">Please select one gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
          <input className="new2" type="date" name="Date_of_birth" placeholder="DOB" />
          <input className="form-input" type="password" name="password" placeholder="Password" />
          <input className="form-input" type="password" name="confirm_password" placeholder="Confirm Password" />
        </form>
        <button className="register-btn" type="submit">Register</button>
        <p className="link">Already have an account? <a href="patientLogin">Login</a></p>
      </div>
    </div>
  );
}

export default RegisterPatient;
