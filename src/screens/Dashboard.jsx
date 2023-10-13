import React, { useState, useEffect } from 'react'
import classes from './Dashboard.module.css'
import Chat from './Chat'
import Login from '../pages/Login';
import { useNavigate, Navigate } from "react-router-dom";
import functions from '../utils/Auth';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import Header from '../components/Header';
const Dashboard = () => {
    // const obj = functions();
    // useEffect(() => {
    //     obj.checkUserStatus();
    // }, [])

    const user = useSelector((state) => state.authSliceReducer.user);
    // #--------------------
    const navigate = useNavigate();
    //--------------------------------
    return (
        user
            ?
            <>
                <Header />
                <main className={classes.dashboard}>
                    <Chat />
                </main>
            </>
            :
            <Navigate to='/login' />
    )
}

export default Dashboard