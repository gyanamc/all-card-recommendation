import React from 'react';
import { LayoutDashboard, MessageSquareText, CreditCard, Layers, Info, Mail } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { icon: LayoutDashboard, label: 'Home' },
        { icon: MessageSquareText, label: 'AI Advisor', active: true },
        { icon: CreditCard, label: 'Compare Cards' },
        { icon: Layers, label: 'Categories' },
        { icon: Info, label: 'About' },
        { icon: Mail, label: 'Contact' },
    ];

    return (
        <aside className="fixed left-0 top-0 h-full w-64 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col z-20">
            <div className="p-6 border-b border-slate-800">
                <h1 className="text-xl font-display font-bold text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                        G
                    </div>
                    Gyanam AI
                </h1>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${item.active
                                ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                                : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                            }`}
                    >
                        <item.icon className={`w-5 h-5 ${item.active ? 'text-blue-400' : 'text-slate-500 group-hover:text-white'}`} />
                        <span className="font-medium">{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <p className="text-xs text-slate-400 mb-2">Pro Plan Active</p>
                    <div className="w-full bg-slate-700 rounded-full h-1.5 mb-2">
                        <div className="bg-blue-500 h-1.5 rounded-full w-3/4"></div>
                    </div>
                    <p className="text-[10px] text-slate-500">2,450 / 5,000 credits used</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
