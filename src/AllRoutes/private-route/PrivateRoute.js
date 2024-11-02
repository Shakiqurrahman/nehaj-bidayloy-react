import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import { logout } from "../../Redux/features/userSlice";

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.user);

    useEffect(() => {
        if (!token) {
            // dispatch(logout());
            // Redirect to another page if token is not present
            navigate("/join", { state: { from: location }, replace: true });
        }
    }, [token, navigate]);

    return children;
};

export default PrivateRoute;
