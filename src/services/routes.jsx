import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from '../screens/Homepage'
import DoctorLogin from "../screens/doctorLogin";
import PatientLogin from "../screens/patientLogin";
import PatientRegistration from "../screens/patientRegistration";
import PatientDashboard from "../screens/patientDashboard";

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
        },
        {
            path: "/patientDashboard",
            element: <PatientDashboard />
        }
    ]);

    return <RouterProvider router={router} />
}

export default Router;