import React from 'react';
import { Bot, User } from 'lucide-react';
import HTMLRenderer from './HTMLRenderer';
import { motion } from 'framer-motion';

const MessageBubble = ({ message }) => {
    const isAI = message.role === 'ai';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex w-full gap-4 mb-6 ${isAI ? 'flex-row' : 'flex-row-reverse'}`}
        >
            {/* Avatar */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isAI ? 'bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.3)]' : 'bg-slate-700'
                }`}>
                {isAI ? <Bot size={18} className="text-white" /> : <User size={18} className="text-slate-300" />}
            </div>

            {/* Bubble */}
            <div className={`flex flex-col max-w-[85%] md:max-w-[75%] ${isAI ? 'items-start' : 'items-end'}`}>
                <div className={`relative px-6 py-4 rounded-2xl ${isAI
                        ? 'bg-slate-900/50 border border-slate-700/50 shadow-sm text-slate-200'
                        : 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                    }`}>
                    {isAI ? (
                        <HTMLRenderer htmlContent={message.content} />
                    ) : (
                        <p className="text-base leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    )}
                </div>
                <span className="text-[10px] text-slate-500 mt-2 px-1">
                    {message.timestamp}
                </span>
            </div>
        </motion.div>
    );
};

export default MessageBubble;
