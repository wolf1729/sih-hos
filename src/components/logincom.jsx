/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../CSSFiles/logincom.css';
import { patientSignIn } from '../services/firebaseFunction';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Logincom({ designation, designation_id, linker }){

    const [LoginEmail, setLoginEmail] = useState("")
    const [LoginPassword, setLoginPassword] = useState("")
    const navigate = useNavigate();

    const patientlogin = async () => {
        try{
            await patientSignIn(LoginEmail, LoginPassword);
            console.log('login successful')
            navigate('/patientDashboard')
        }catch(error){
            console.log(`error occured : ${error}`)
        }
    }
    return(
        <>
        <div className="containerL">
            <div className="login-form">
                <h2 className="hlogin">{designation}</h2>
                <form>
                    <input className="form-input" type="text" name= 'doctor_id' placeholder={designation_id} onChange={(e) => setLoginEmail(e.target.value)}/>
                    <input className="form-input" type="LoginPassword" name="LoginPassword" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
                    <button className="login-btn" type="button" onClick={patientlogin}>Login</button>
                </form>           
                {linker === true ? (<p className="link">Dont have an account? <Link to="/patientReg">Register</Link></p>) : null}
            </div>
        </div>
        </>
    );
}

export default Logincom;