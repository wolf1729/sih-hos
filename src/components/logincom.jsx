/* eslint-disable react/prop-types */
import '../CSSFiles/logincom.css'

function Logincom({ designation, designation_id }){
    return(
        <>
        <div className="containerL">
            <div className="login-form">
                <h2 className="hlogin">{designation}</h2>
                <form>
                    <input className="form-input" type="text" name= 'doctor_id' placeholder={designation_id} />
                    <input className="form-input" type="password" name="password" placeholder="Password" />
                    <button className="login-btn" type="submit">Login</button>
                </form>           
                <p className="link">dont have account?<a href="#">Register</a></p>
            </div>
        </div>
        </>
    );
}

export default Logincom;