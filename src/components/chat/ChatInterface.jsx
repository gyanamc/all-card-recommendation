import React, { useState, useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import InputBar from './InputBar';
import { MOCK_RESPONSE, INITIAL_MESSAGE } from '../../mock_data';

const ChatInterface = () => {
    const [messages, setMessages] = useState([INITIAL_MESSAGE]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (text) => {
        // Add User Message
        const userMsg = {
            role: 'user',
            content: text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, userMsg]);
        setIsLoading(true);

        // Simulate Network Delay and AI Response
        setTimeout(() => {
            const aiMsg = {
                role: 'ai',
                content: MOCK_RESPONSE.html, // In real app, this comes from backend fetch
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, aiMsg]);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="flex flex-col h-screen w-full max-w-5xl mx-auto md:px-6 relative">
            {/* Scrollable Message Area */}
            <div className="flex-1 overflow-y-auto px-4 pt-20 md:pt-8 pb-32 scroll-smooth">
                <div className="space-y-6">
                    {messages.map((msg, index) => (
                        <MessageBubble key={index} message={msg} />
                    ))}

                    {isLoading && (
                        <div className="flex gap-4 items-start animate-fade-in">
                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                            </div>
                            <div className="bg-slate-900/50 rounded-2xl px-6 py-4 border border-slate-700/50 flex items-center gap-1">
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input Area */}
            <InputBar onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatInterface;
