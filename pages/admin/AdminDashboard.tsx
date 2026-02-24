
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    BookOpen,
    Users,
    Sparkles,
    LogOut,
    Search,
    Plus,
    MoreHorizontal,
    TrendingUp,
    CheckCircle,
    XCircle,
    MessageSquare
} from 'lucide-react';
import { PROGRAMS, IMPACT_STATS, TESTIMONIALS } from '../../constants';

const AdminDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'overview' | 'programs' | 'stories' | 'inquiries' | 'users'>('overview');

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/admin');
    };

    // Mock Data for "Recent Inquiries"
    const recentInquiries = [
        { id: 1, name: "Rahul Sharma", email: "rahul@example.com", type: "Volunteer", status: "New", date: "2 mins ago" },
        { id: 2, name: "Priya Singh", email: "priya@example.com", type: "Donation", status: "Read", date: "1 hour ago" },
        { id: 3, name: "Corporate Sol", email: "contact@corpsol.com", type: "CSR", status: "Replied", date: "5 hours ago" },
    ];

    // Mock Data for "User Management"
    const usersList = [
        { id: 1, name: "Admin User", email: "admin@vidyachild.org", role: "Super Admin", status: "Active", lastActive: "Now" },
        { id: 2, name: "Sarah Jenkins", email: "sarah@vidyachild.org", role: "Editor", status: "Active", lastActive: "2 hours ago" },
        { id: 3, name: "Mike Ross", email: "mike@vidyachild.org", role: "Viewer", status: "Inactive", lastActive: "3 days ago" },
        { id: 4, name: "Priya Patel", email: "priya.p@vidyachild.org", role: "Editor", status: "Active", lastActive: "5 hours ago" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'overview':
                return (
                    <div className="space-y-8 animate-in fade-in duration-500">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {IMPACT_STATS.map((stat, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-red-600">
                                            <TrendingUp size={24} />
                                        </div>
                                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">{stat.label}</div>
                                    </div>
                                    <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                                </div>
                            ))}
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Recent Activity */}
                            <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-xl font-black text-slate-900">Recent Inquiries</h3>
                                    <button className="text-sm font-bold text-red-600 hover:text-red-700">View All</button>
                                </div>
                                <div className="space-y-4">
                                    {recentInquiries.map((inquiry) => (
                                        <div key={inquiry.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors cursor-pointer group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-black text-slate-900 border border-slate-100">
                                                    {inquiry.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900">{inquiry.name}</div>
                                                    <div className="text-xs font-medium text-slate-500">{inquiry.type} • {inquiry.date}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${inquiry.status === 'New' ? 'bg-green-100 text-green-600' :
                                                    inquiry.status === 'Replied' ? 'bg-blue-100 text-blue-600' : 'bg-slate-200 text-slate-600'
                                                    }`}>
                                                    {inquiry.status}
                                                </span>
                                                <MoreHorizontal size={16} className="text-slate-400 group-hover:text-slate-600" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="bg-slate-950 p-8 rounded-[2.5rem] text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 blur-[80px] opacity-40"></div>
                                <h3 className="text-xl font-black mb-8 relative z-10">Quick Actions</h3>
                                <div className="space-y-4 relative z-10">
                                    <button className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center gap-4 transition-all">
                                        <Plus size={20} />
                                        <span className="font-bold">Add New Program</span>
                                    </button>
                                    <button className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center gap-4 transition-all">
                                        <Sparkles size={20} />
                                        <span className="font-bold">Generate Story</span>
                                    </button>
                                    <button className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center gap-4 transition-all">
                                        <MessageSquare size={20} />
                                        <span className="font-bold">Broadcast Message</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'programs':
                return (
                    <div className="animate-in fade-in duration-500">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Manage Programs</h2>
                                <p className="text-slate-500 font-medium">Overview of all active educational initiatives.</p>
                            </div>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-red-100 active:scale-95">
                                <Plus size={20} /> Add New Program
                            </button>
                        </div>
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {PROGRAMS.map((program) => (
                                <div key={program.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] -mr-8 -mt-8 transition-colors group-hover:bg-red-50"></div>
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:text-red-600 transition-colors">
                                                {/* Dynamic Icon Rendering (Simplified for now) */}
                                                <BookOpen size={24} />
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all"><LayoutDashboard size={14} /></button>
                                                <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-all"><LogOut size={14} /></button>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-3 ${program.category === 'academic' ? 'bg-blue-50 text-blue-600' :
                                                program.category === 'support' ? 'bg-green-50 text-green-600' :
                                                    'bg-purple-50 text-purple-600'
                                                }`}>
                                                {program.category || "General"}
                                            </span>
                                            <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight group-hover:text-red-600 transition-colors">{program.title}</h3>
                                            <p className="text-sm text-slate-500 font-medium line-clamp-2 leading-relaxed">{program.description}</p>
                                        </div>

                                        <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                                <Users size={14} />
                                                <span>120 Students</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                                <div className="flex -space-x-2">
                                                    <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>
                                                    <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
                                                    <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white text-[8px] flex items-center justify-center text-white">+5</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'stories':
                return (
                    <div className="animate-in fade-in duration-500">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Success Stories</h2>
                                <p className="text-slate-500 font-medium">Inspiring journeys from our students and community.</p>
                            </div>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-red-100 active:scale-95">
                                <Plus size={20} /> Add New Story
                            </button>
                        </div>
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {TESTIMONIALS.map((story, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all group flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={story.imageUrl}
                                                alt={story.author}
                                                className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                                            />
                                            <div>
                                                <h3 className="font-black text-slate-900">{story.author}</h3>
                                                <p className="text-xs font-bold text-red-600 uppercase tracking-wider">{story.role}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all"><LayoutDashboard size={14} /></button>
                                            <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-all"><LogOut size={14} /></button>
                                        </div>
                                    </div>

                                    <div className="relative mb-6 flex-grow">
                                        <Sparkles className="absolute -top-2 -left-2 text-yellow-400 opacity-50" size={24} />
                                        <p className="text-slate-600 font-medium leading-relaxed italic pl-6 relative z-10">"{story.quote}"</p>
                                    </div>

                                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-slate-400">
                                        <span>Featured Story</span>
                                        <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full">Published</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );

            case 'users':
                return (
                    <div className="animate-in fade-in duration-500">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-black text-slate-900 tracking-tight">User Management</h2>
                                <p className="text-slate-500 font-medium">Manage access and roles for the admin panel.</p>
                            </div>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-red-100 active:scale-95">
                                <Plus size={20} /> Add New User
                            </button>
                        </div>

                        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-100 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                        <th className="p-6 pl-8">User</th>
                                        <th className="p-6">Role</th>
                                        <th className="p-6">Status</th>
                                        <th className="p-6">Last Active</th>
                                        <th className="p-6 text-right pr-8">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersList.map((user) => (
                                        <tr key={user.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors group">
                                            <td className="p-6 pl-8">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 border border-white shadow-sm">
                                                        {user.name.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-900">{user.name}</div>
                                                        <div className="text-xs font-medium text-slate-400">{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-6">
                                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${user.role === 'Super Admin' ? 'bg-purple-50 text-purple-600' :
                                                    user.role === 'Editor' ? 'bg-blue-50 text-blue-600' :
                                                        'bg-slate-100 text-slate-600'
                                                    }`}>
                                                    {user.role === 'Super Admin' && <Sparkles size={10} />}
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="p-6">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'bg-slate-300'}`}></div>
                                                    <span className={`text-xs font-bold ${user.status === 'Active' ? 'text-green-600' : 'text-slate-400'}`}>
                                                        {user.status}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-6 text-sm font-medium text-slate-500">
                                                {user.lastActive}
                                            </td>
                                            <td className="p-6 pr-8 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all"><MoreHorizontal size={14} /></button>
                                                    <button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-600 transition-all"><LogOut size={14} /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );

            default:
                return <div className="p-8 text-center text-slate-500 font-medium">Module Under Development</div>;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex font-sans">
            {/* Sidebar */}
            <aside className="fixed left-0 top-0 h-screen w-20 lg:w-72 bg-white border-r border-slate-200 z-50 flex flex-col p-4 lg:p-6 transition-all duration-300">
                <div className="flex items-center gap-3 mb-12 px-2">
                    <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-100 flex-shrink-0">
                        <LayoutDashboard size={20} />
                    </div>
                    <span className="font-black text-lg tracking-tight text-slate-900 hidden lg:block">Admin<span className="text-red-600">Panel</span></span>
                </div>

                <nav className="space-y-2 flex-grow">
                    {[
                        { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
                        { id: 'programs', icon: BookOpen, label: 'Programs' },
                        { id: 'stories', icon: Sparkles, label: 'Success Stories' },
                        { id: 'inquiries', icon: MessageSquare, label: 'Inquiries' },
                        { id: 'users', icon: Users, label: 'User Mgmt' },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id as any)}
                            className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all font-bold ${activeTab === item.id
                                ? 'bg-slate-900 text-white shadow-xl shadow-slate-200'
                                : 'text-slate-500 hover:bg-slate-50 hover:text-red-600'
                                }`}
                        >
                            <item.icon size={22} className={activeTab === item.id ? 'text-red-500' : ''} />
                            <span className="hidden lg:block">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-4 p-4 rounded-2xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-all font-bold mt-auto"
                >
                    <LogOut size={22} />
                    <span className="hidden lg:block">Logout</span>
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-20 lg:ml-72 p-6 lg:p-12">
                {/* Header */}
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Welcome back, Admin</h1>
                        <p className="text-slate-500 font-medium">Here's what's happening today.</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center bg-white border border-slate-200 px-4 py-3 rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-red-100 transition-all">
                            <Search size={20} className="text-slate-400 mr-3" />
                            <input type="text" placeholder="Search..." className="bg-transparent outline-none font-bold text-slate-700 placeholder-slate-400 w-48" />
                        </div>
                        <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-black shadow-lg">
                            AD
                        </div>
                    </div>
                </header>

                {renderContent()}

                {/* Admin Footer */}
                <footer className="mt-12 pt-8 border-t border-slate-200 flex justify-end items-center text-sm font-medium text-slate-400">
                    <div className="flex gap-6">
                        <span>Admin Console v1.0</span>
                        <a href="#" className="hover:text-slate-600 transition-colors">Support</a>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default AdminDashboard;
