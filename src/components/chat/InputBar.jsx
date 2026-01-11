import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';

const InputBar = ({ onSendMessage }) => {
    const [input, setInput] = useState('');
    const textareaRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSendMessage(input);
        setInput('');
        if (textareaRef.current) textareaRef.current.style.height = 'auto'; // Reset height
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    // Auto-resize textarea
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [input]);

    return (
        <div className="fixed bottom-0 md:left-64 right-0 p-4 md:p-6 bg-slate-950/80 backdrop-blur-xl border-t border-slate-800 z-10">
            <div className="max-w-4xl mx-auto relative">
                <form onSubmit={handleSubmit} className="relative flex items-end gap-2 bg-slate-900/80 border border-slate-700/50 rounded-2xl p-2 shadow-2xl shadow-slate-900/50 focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/20 transition-all duration-300">

                    <button type="button" className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors">
                        <Paperclip size={20} />
                    </button>

                    <textarea
                        ref={textareaRef}
                        rows={1}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask about cards, rewards, or fees..."
                        className="w-full bg-transparent text-white placeholder-slate-500 text-sm md:text-base p-3 focus:outline-none resize-none max-h-32 scrollbar-hide"
                        style={{ minHeight: '44px' }}
                    />

                    <div className="flex items-center gap-1">
                        <button type="button" className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors md:hidden">
                            <Mic size={20} />
                        </button>
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            className="p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_10px_rgba(37,99,235,0.2)] hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-200"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </form>
                <div className="text-center mt-2">
                    <span className="text-[10px] text-slate-600">AI can make mistakes. Verify important financial details.</span>
                </div>
            </div>
        </div>
    );
};

export default InputBar;
