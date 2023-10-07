import React from 'react'
import classes from './Chat.module.css';
import MessageInputSection from '../components/MessageInputSection';
import MessageWindow from '../components/MessageWindow';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { messageSliceActions } from '../toolkit/MessageSlice';
//---------------------------------
import { Client, Account, ID, Databases } from "appwrite";
const PROJECT_ID = "652115655d5afd906c81";
const DATABASE_ID = "65211579dd1887d97a10";
const COLLECTION_ID = "65211584beb44656c3ad";
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);
// const databases = new Databases(client);
//---------------------------------
const Chat = () => {
  const user_id = '1';
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = client.subscribe(`databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`,
      (response) => {
        // console.log("Realtime");
        // Callback will be executed on changes for all documents
        // console.log(response.payload);
        const messageObj = response.payload;
        if(messageObj.user_id!=user_id){
          dispatch(messageSliceActions.insertMessage(messageObj))
        }
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className={classes.chat}>
        <MessageWindow/>
        <MessageInputSection/>
    </div>
  )
}

export default Chat