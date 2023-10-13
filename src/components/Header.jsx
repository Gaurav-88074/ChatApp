import React from 'react'
import classes from './Header.module.css'
import { useNavigate } from 'react-router-dom';
import functions from '../utils/Auth';
import { useSelector } from 'react-redux';
const Header = () => {
    const obj = functions();
    const user = useSelector((state) => state.authSliceReducer.user);
    //---------------------------------------------
    const navigate = useNavigate();
    const loginHandler = () => {
        // navigate("/login");
    }
    const signupHandler = () => {
        // navigate("/signup");
    }
    const logoutHandler = () => {
        // console.log("it happend");
        obj.logoutUser();
        // navigate("/logout");
    }
    return (
        <header className={classes.homePageHeader}>
            <nav className={classes.hphs1}>

            </nav>
            <nav className={classes.hphs2}>
                {/* <div className={classes.navItems}>
        Home
      </div> */}
            </nav>
            <nav className={classes.hphs3}>
                {/* <button
                    className={classes.hphAuthSection}
                    onClick={loginHandler}
                >
                    login
                </button>
                <button
                    className={classes.hphAuthSection}
                    onClick={signupHandler}
                >
                    sign-up
                </button> */}
                {
                    user 
                    &&
                    <button
                        className={classes.hphAuthSection}
                        onClick={logoutHandler}
                    >
                        logout
                    </button>
                }
            </nav>
        </header>
    )
}

export default Header