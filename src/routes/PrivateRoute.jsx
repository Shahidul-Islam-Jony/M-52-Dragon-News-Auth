import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);


    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>; //set spinner
    }

    if (user) {
        return children; // private router er vitore jei component rakhbo seitai er children.see Routes component... return childern means calling News component because News component is children of Private route.
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;