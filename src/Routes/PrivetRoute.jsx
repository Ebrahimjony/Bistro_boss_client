import { useContext } from "react";
import { AuthContext } from "../Provoder/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
    const location=useLocation();

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        <progress class="progress w-56" value="10" max="100"></progress>
    }

    if (user) {
        return children;
    }
    return (<Navigate to='/login' state={{from:location}} replace></Navigate>)
};

export default PrivetRoute;