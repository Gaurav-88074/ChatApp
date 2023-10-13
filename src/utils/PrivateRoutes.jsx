import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const PrivateRoutes = () => {
    // console.log("getting into private routes");
    const user = useSelector((state) => state.authSliceReducer.user);
    return user ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoutes