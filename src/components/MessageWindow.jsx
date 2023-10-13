import React, { useEffect } from 'react'
import classes from './MesssageWindow.module.css'
import MessageCard from './MessageCard'
import MessageRecieverCard from './MessageRecieverCard'
import MessageSenderCard from './MessageSenderCard'
import {dummyMessage as messages} from '../constants/messages'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { messageSliceActions } from '../toolkit/MessageSlice';
import { fetchMessage } from '../api/GET';
import { useCallback } from 'react'
const MessageWindow = () => {
  const user = useCallback(
    useSelector((state) => state.authSliceReducer.user)
  )
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMessage().then((obj)=>{
      const messages = obj.documents;
      dispatch(messageSliceActions.insertMessages(messages))
    });
  }, [])
  
  // const  = 1;
  const messagesArray = useSelector(state => state.messageSliceReducer.messagesArray);
  console.log(messagesArray);
  const chatRender = (obj)=>{
    // console.log(obj);
    if(obj.user_id!=user.$id){
      return <MessageRecieverCard key={obj.$id} body={obj.body}/>
    }
    else{
      return <MessageSenderCard key={obj.$id} body={obj.body}/>
    }
  }
  return (
    <div className={classes.messageWindow} >
        {
          messagesArray.length!==0
          &&
          messagesArray.map(chatRender)
        }
    </div>
  )
}

export default MessageWindow