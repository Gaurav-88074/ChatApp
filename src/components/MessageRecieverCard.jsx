import React from 'react'
import classes from './MessageRecieverCard.module.css'
const MessageRecieverCard = (props) => {
  return (
    <div className={classes.messageRecieverCard}>
        <section className={classes.left}>
            
        </section>
        <section className={classes.right}>
            {props.body}
        </section>
    </div>
  )
}

export default MessageRecieverCard