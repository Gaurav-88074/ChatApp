import React from 'react'
import classes from './MessageRecieverCard.module.css'
const MessageRecieverCard = (props) => {
  return (
    <div className={classes.messageRecieverCard}>
      <section className={classes.left}>

      </section>
      <section className={classes.right}>
          <section className={classes.userName}>
            {props.userName}
          </section>
          <section className={classes.body}>
            {props.body}
          </section>
      </section>
    </div>
  )
}

export default MessageRecieverCard