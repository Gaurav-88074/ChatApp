import { account } from "../AppwriteConfig";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import { authSliceActions } from "../toolkit/AuthSlice";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useCallback } from "react";

const Auth = () => {
    const navigate = useNavigate();

    const user = useSelector((state) => state.authSliceReducer.user);
    const dispatch = useDispatch();
    const loginUser = async (userInfo) => {
        // setLoading(true);

        // console.log("userInfo", userInfo);

        try {
            let response = await account.createEmailSession(
                userInfo.email,
                userInfo.password
            );
            let accountDetails = await account.get();
            dispatch(authSliceActions.setUser(accountDetails));
            navigate("/");
        } catch (error) {
            console.error(error);
        }
        // setLoading(false);
    };

    const logoutUser = async () => {
        await account.deleteSession("current");
        dispatch(authSliceActions.deleteUser());
    };

    const registerUser = async (userInfo) => {
        // setLoading(true);

        try {
            let response = await account.create(
                ID.unique(),
                userInfo.email,
                userInfo.password1,
                userInfo.name
            );

            await account.createEmailSession(userInfo.email, userInfo.password1);
            let accountDetails = await account.get();
            dispatch(authSliceActions.setUser(accountDetails));
            navigate("/");
        } catch (error) {
            console.error(error);
        }

        // setLoading(false);
    };

    const checkUserStatus = async () => {
        // console.log(user);
        try {
            let accountDetails = await account.get();
            // console.log(accountDetails);
            dispatch(authSliceActions.setUser(accountDetails));
        } catch (error) {
            console.log(error);
            navigate("/login");
        }
        // setLoading(false);
    };

    return {
        user,
        loginUser,
        logoutUser,
        registerUser,
        checkUserStatus
    };

};

export default Auth;