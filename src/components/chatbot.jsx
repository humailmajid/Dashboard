import React from 'react';
import logo from '../Assests/logo.png';

const chatbot = () => {
  return (
    <div>
      <df-messenger
        intent="WELCOME"
        chat-title="Support"
        chat-icon={logo} // Note: Use lowercase 'chat-icon' instead of 'Chat-icon'
        agent-id="aeaf4699-90fb-4b7b-9910-f10e2e43a597"
        language-code="en"
        // Add inline styling to change the color
        style={{
          '--df-messenger-send-icon': '#FFFFFF', // Send icon color
          '--df-messenger-send-button': '#274C75', // Send button background color
          '--df-messenger-user-message-background': '#274C75', // User message background color
          '--df-messenger-font-color': '#000000', // Font color (black)
          '--df-messenger-chat-background-color': '#274C75', // Chat background color
          '--df-messenger-color': '#FFFF00' // Top bar color (yellow)
        }}
      ></df-messenger>
    </div>
  );
};

export default chatbot;
