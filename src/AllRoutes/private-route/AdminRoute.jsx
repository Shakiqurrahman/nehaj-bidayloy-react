import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { user, token } = useSelector((state) => state.user);
    const isAdmin = user?.role === "ADMIN";
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        // const token = Cookies.get("authToken");
        if (!isAdmin) {
            // dispatch(logout());
            navigate("/not-found");
        }
    }, [isAdmin, navigate, dispatch]);

    return children;
};

export default AdminRoute;
