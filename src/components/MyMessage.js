import React, { useEffect, useRef } from 'react';

const MyMessage=({message})=> {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
      }
    
      useEffect(scrollToBottom, [message]);
    if(message?.attachments?.length>0){
        return(
            <img 
            src={message.attachments[0].file}
            alt={"message-attchment"}
            className='message-image'
            style={{float:'right'}}

            />
        )
            }
    return (
        <div className='message' style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'#9999FF'}}>
            {message.text}
            <div ref={messagesEndRef} />
        </div>
    );
}

export default MyMessage;