import React from 'react';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
            <Sidebar />

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 w-full z-20 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 p-4 flex items-center justify-between">
                <h1 className="text-lg font-display font-bold text-white flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs">G</div>
                    Gyanam AI
                </h1>
                {/* Simple Menu Icon Placeholder */}
                <button className="text-slate-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                </button>
            </div>

            <main className="md:ml-64 min-h-screen flex flex-col relative transition-all duration-300">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
