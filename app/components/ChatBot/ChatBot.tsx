'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ChatBot.module.css';

// Define TypeScript interfaces
interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Remove the unused AIResponse interface

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi there! I\'m your portfolio assistant. Ask me anything about the portfolio owner\'s skills, experience, or projects!' }
  ]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.filter(msg => msg.role !== 'system').concat(userMessage),
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to get response: ${response.status} ${errorText}`);
      }

      const rawData = await response.text();
      let messageContent: string;
      
      try {
        const jsonData = JSON.parse(rawData);
        if (jsonData.kwargs && jsonData.kwargs.content) {
          messageContent = jsonData.kwargs.content;
        } else if (jsonData.content) {
          messageContent = jsonData.content;
        } else if (typeof jsonData === 'string') {
          messageContent = jsonData;
        } else {
          messageContent = JSON.stringify(jsonData);
        }
      } catch {
        messageContent = rawData;
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: messageContent }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : String(error)}. Please try again later.` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      {isOpen && (
        <div className={styles.chatbotWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerContent}>
              <h3>Portfolio Assistant</h3>
              <p>Ask me about skills, projects, and experience</p>
            </div>
            <button 
              className={styles.closeButton}
              onClick={toggleChatbot}
              aria-label="Close chatbot"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className={styles.messagesContainer}>
            {messages.filter(msg => msg.role !== 'system').map((message, index) => (
              <div 
                key={index} 
                className={`${styles.message} ${message.role === 'user' ? styles.userMessage : styles.assistantMessage}`}
              >
                {message.role === 'assistant' && (
                  <div className={styles.avatar}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8V12L15 15"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                )}
                <div className={styles.messageContent}>
                  {message.content}
                  {message.role === 'assistant' && (
                    <div className={styles.messageTime}>
                      {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={`${styles.message} ${styles.assistantMessage}`}>
                <div className={styles.avatar}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8V12L15 15"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </div>
                <div className={styles.messageContent}>
                  <div className={styles.loadingDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className={styles.chatInput}
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className={styles.sendButton}
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
      <button 
        className={`${styles.chatbotButton} ${isOpen ? styles.hidden : ''}`}
        onClick={toggleChatbot}
        aria-label="Open chatbot"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  );
}