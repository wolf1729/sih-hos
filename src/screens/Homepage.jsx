import BottomSide from "../components/HomepageBottomSide";
import MiddlePart from "../components/HomepageMiddlepart";
import HomepageNavbar from "../components/HomepageNavbar";

function Homepage(){
    return(
        <>
        <HomepageNavbar/>
        <MiddlePart/>
        <BottomSide/>
        </>
    );
}

export default Homepage;