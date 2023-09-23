import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from '../screens/Homepage'
import DoctorLogin from "../screens/doctorLogin";
import PatientLogin from "../screens/patientLogin";
import PatientRegistration from "../screens/patientRegistration";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />
        },
        {
            path: "/doctorLogin",
            element: <DoctorLogin />
        },
        {
            path: "/patientLogin",
            element: <PatientLogin />
        },
        {
            path: "/patientReg",
            element: <PatientRegistration />
        }
    ]);

    return <RouterProvider router={router} />
}

export default Router;