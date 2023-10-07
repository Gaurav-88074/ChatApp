import React from 'react'
import classes from './MessageSenderCard.module.css'
const MessageSenderCard = (props) => {
    return (
        <div className={classes.messageSenderCard}>
            <section className={classes.left}>

            </section>
            <section className={classes.right}>
                {props.body}
            </section>
        </div>
    )
}

export default MessageSenderCard