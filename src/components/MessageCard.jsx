import React from 'react'
import classes from './MessageCard.module.css'
const MessageCard = (props) => {
  return (
    <div className={classes.messageCard}>
      {props.body}
    </div>
  )
}

export default MessageCard