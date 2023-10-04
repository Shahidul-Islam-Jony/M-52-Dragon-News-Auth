import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    // console.log(location.pathname);


    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>; //set spinner
    }

    if (user) {
        return children; // private router er vitore jei component rakhbo seitai er children.see Routes component... return childern means calling News component because News component is children of Private route.
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>  // location er vitore state name key thake sei key er value set korte. fole jodi ei state ba path er news a user click kore ebong user login kora na thake tobe user login page a jabe ebong user login korle state thakar karone login howar por auto ei page a chole ashbe. see login route.
};

export default PrivateRoute;