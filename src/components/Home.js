import React, { useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';

const Home = (props) => {
   if(!localStorage.getItem('username')){
    return <LoginForm />
  }
  return (
    <ChatEngine
      height="100vh"
      projectID="654a9464-87be-4ba6-b047-e81cc32ac1b1"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={chatProps=><ChatFeed {... chatProps}/>}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}

    />
  );
}

export default Home;