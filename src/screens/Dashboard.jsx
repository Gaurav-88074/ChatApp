import React from 'react'
import classes from './Dashboard.module.css'
import Chat from './Chat'
const Dashboard = () => {
    return (
            <main className={classes.dashboard}>
                <Chat/>
            </main>
    )
}

export default Dashboard