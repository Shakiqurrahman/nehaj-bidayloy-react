import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/features/userSlice";

const AdminRoute = ({ children }) => {
    const { user, accessToken } = useSelector((state) => state.user);
    const isAdmin = user?.role === "ADMIN";

    const token = accessToken || localStorage.getItem("accessToken");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (isAdmin === null) {
            return <div>Loading...</div>;
        }
        if (!isAdmin && !token) {
            dispatch(logout());
            navigate("/");
        }
    }, [isAdmin, navigate, dispatch, token]);

    return children;
};

export default AdminRoute;
