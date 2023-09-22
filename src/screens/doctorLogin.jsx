import Logincom from "../components/logincom";
import Logregback from "../components/logregback";

function DoctorLogin(){
    return(
        <>
        <Logregback/>
        <Logincom designation='Doctor Login' designation_id='Doctor ID'/>
        </>
    );
}

export default DoctorLogin;