import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from '../screens/Homepage'
import DoctorLogin from "../screens/doctorLogin";
import PatientLogin from "../screens/patientLogin";

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
        }
    ]);

    return <RouterProvider router={router} />
}

export default Router;