import { useContext } from "react";
import { AuthContext } from "../Provoder/AuthProvider";

const useAuth = () => {
    const auth=useContext(AuthContext)
    return auth
};

export default useAuth;