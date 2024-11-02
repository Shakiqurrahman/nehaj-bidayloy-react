import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  // const { user } = useSelector((state) => state.user);
  // const isAuthorized = ["ADMIN", "SUPER_ADMIN"].includes(user?.role);  
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const token = Cookies.get('authToken');
  //   if (!isAuthorized || !token) {
  //     dispatch(logout());
  //     navigate("/not-found");
  //   }
  // }, [isAuthorized, navigate, dispatch]);

  // return children;
};

export default AdminRoute;
