import Logincom from "../components/logincom";
import Logregback from "../components/logregback";

function PatientLogin(){
    return(
        <>
        <Logregback/>
        <Logincom designation='Patient Login' designation_id='Patient ID' linker={true}/>
        </>
    );
}

export default PatientLogin;