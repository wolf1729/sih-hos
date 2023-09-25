import '../CSSFiles/bottomSide.css';
import { Link } from 'react-router-dom';

function BottomSide(){
    return(
        <>
        <div className="one">
            <h1>Easy and Quick Scheduling</h1>
        </div>
        <div className="two">
            <h1>Check your Appointments with Ease</h1>
        </div>
        <div>
            <ul className="sizing">
                <li className="size11">
                    <img className="size1" src="../public/patient.png"/>
                </li>
                <li className="size22">
                    <img className="size1" src="../public/doctor.png"/>
                </li>
            </ul>
        </div>
        <div>
            <ul className="name">
                <li className="name1">Patient</li>
                <li className="name2">Doctor</li>
            </ul>
        </div>
        <div>
            <ul className="sign-in">
                <li className="sign1"><Link to='/patientLogin'>Login/Sign in</Link></li>
                <li className="sign2"><Link to='/doctorLogin'>Login</Link></li>
            </ul>
        </div>
        <div className="footer">
            <a href="#"><img className="logo2" src="telephone-call.png"/> Tel:123-456-7890</a>
        </div>
        </>
    );
}

export default BottomSide;