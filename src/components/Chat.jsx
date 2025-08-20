import React, { useState, useEffect, useRef } from 'react';

const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        text: 'Hey! I am Itihas Ask Me Anything ... ❤️',
        sender: 'bot',
      },
    ]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim() === '' || isLoading) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // बैकएंड API को कॉल करें
      // const response = await fetch('http://localhost:3000/chat', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ userInput: input, sessionId: sessionId }),
      // });
      
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput: input, sessionId })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botResponse = { text: data.reply, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botResponse]);

    } catch (error) {
      console.error('Error fetching data:', error);
      const errorResponse = { text: 'Oops! Kuch gadbad ho gayi. Please try again.', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* <Link to="/" className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
        <span>Join now →</span>
        <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
      </Link> */}
      <div data-theme="valentine" className="min-h-screen flex flex-col items-center justify-center p-4 bg-base-200">

        <div className="card w-full max-w-lg shadow-xl bg-base-100">
          <div className="card-body p-0">
            {/* Header */}
            <div className="p-4 bg-primary text-primary-content text-center rounded-t-2xl">
              <h1 className="text-2xl font-bold">HAPPY BIRTHDAY POONAM</h1>
              <p className="text-sm opacity-80">Itihas ❤️ Poonam's Story</p>
            </div>

            {/* Chat Messages */}
            <div className="p-4 h-96 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`chat ${msg.sender === 'user' ? 'chat-end' : 'chat-start'}`}>
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="avatar" src={msg.sender === 'user' ? `/savvy.jpeg` : `/iti.jpeg`} />
                    </div>
                  </div>
                  <div className={`chat-bubble ${msg.sender === 'user' ? 'chat-bubble-primary' : ''}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {/* लोडिंग इंडिकेटर */}
              {isLoading && (
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img alt="avatar" src={`/iti.jpeg`} />
                    </div>
                  </div>
                  <div className="chat-bubble">
                    <span className="loading loading-dots loading-md"></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Form */}
            <div className="p-4 border-t border-base-300">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="input input-bordered w-full"
                  disabled={isLoading}
                />
                <button type="submit" className="btn btn-primary" disabled={isLoading}>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;