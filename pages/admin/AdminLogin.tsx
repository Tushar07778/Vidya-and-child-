
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, ArrowRight, AlertCircle } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const AdminLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin/dashboard');
        } catch {
            setError('Invalid email or password');
            setPassword('');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/40 via-transparent to-transparent animate-pulse" />
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3rem] w-full max-w-md shadow-2xl relative z-10">
                <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-red-900/50">
                        <ShieldCheck size={40} />
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tight mb-2">Admin Portal</h1>
                    <p className="text-slate-400 font-medium">Restricted Access Only</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 pl-4">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => { setError(''); setEmail(e.target.value); }}
                                className="w-full pl-16 pr-8 py-5 bg-black/20 border border-white/10 rounded-[1.5rem] text-white placeholder-slate-600 outline-none focus:border-red-500/50 focus:bg-black/40 transition-all font-bold"
                                placeholder="admin@vidyaandchild.org"
                                autoFocus
                            />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 pl-4">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => { setError(''); setPassword(e.target.value); }}
                                className="w-full pl-16 pr-8 py-5 bg-black/20 border border-white/10 rounded-[1.5rem] text-white placeholder-slate-600 outline-none focus:border-red-500/50 focus:bg-black/40 transition-all font-bold tracking-widest"
                                placeholder="••••••••"
                            />
                        </div>
                        {error && (
                            <div className="flex items-center gap-2 text-red-400 text-xs font-bold pl-4 animate-in slide-in-from-left-2">
                                <AlertCircle size={12} /> {error}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white py-5 rounded-[1.5rem] font-black text-lg transition-all shadow-xl shadow-red-900/20 flex items-center justify-center gap-3 active:scale-95 group"
                    >
                        {isLoading ? 'Signing in...' : 'Enter Dashboard'} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <div className="mt-10 text-center">
                    <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest">
                        Vidya & Child • Secure System
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
