import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import {
  Heart,
  Instagram,
  Twitter,
  Facebook,
  ShieldCheck,
  Mail,
  Phone,
  Home as HomeIcon,
  Users,
  BookOpen,
  MapPin,
  Handshake
} from 'lucide-react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import Centers from './pages/Centers';
import GetInvolved from './pages/GetInvolved';
import Contributors from './pages/Contributors';
import Contact from './pages/Contact';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  if (user === undefined) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/admin" replace />;
  }
  return <>{children}</>;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      {/* Dynamic Header - Hidden on Admin Routes */}
      {!isAdminRoute && (
        <header className="sticky top-0 z-50 transition-all duration-500 border-b bg-white/80 backdrop-blur-md border-slate-200 shadow-sm supports-[backdrop-filter]:bg-white/60">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
              <div className="p-1.5 rounded-xl shadow-sm border bg-white border-slate-100 group-hover:shadow-md transition-shadow">
                <img
                  src="/logo.webp"
                  alt="Vidya & Child"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="h-8 w-px hidden sm:block bg-slate-200" />
              <div className="hidden md:block text-left text-slate-900">
                <div className="font-black text-lg tracking-tighter leading-none">VIDYA & CHILD</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">Shaping Futures</div>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-1 bg-cream/50 p-1.5 rounded-full border border-beige/50 backdrop-blur-sm">
              {[
                { path: '/', label: 'Home', icon: HomeIcon },
                { path: '/about', label: 'About', icon: Users },
                { path: '/programs', label: 'Programs', icon: BookOpen },
                { path: '/centers', label: 'Centers', icon: MapPin },
                { path: '/get-involved', label: 'Get Involved', icon: Heart },
                { path: '/contributors', label: 'Contributors', icon: Handshake },
                { path: '/contact', label: 'Contact', icon: Phone }
              ].map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-xs uppercase tracking-wide transition-all duration-300 group relative overflow-hidden ${isActive(path)
                    ? 'bg-red-600 text-white shadow-md shadow-red-200'
                    : 'text-slate-600 hover:bg-white hover:text-red-600 hover:shadow-sm'
                    }`}
                >
                  <Icon size={14} className={`relative z-10 transition-transform duration-300 ${isActive(path) ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span className="relative z-10">{label}</span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/get-involved" className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-xl active:scale-95 border border-slate-800">
                <Heart size={14} className="text-red-500 fill-current animate-pulse" />
                <span>Donate</span>
              </Link>
              <button
                className="xl:hidden p-2.5 rounded-full transition-colors bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="flex flex-col gap-1.5 w-5">
                  <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Mobile Menu Overlay */}
      {
        !isAdminRoute && (
          <div className={`fixed inset-0 z-40 bg-cream/95 backdrop-blur-xl transition-all duration-500 xl:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex flex-col h-full pt-32 pb-12 px-8">
              <nav className="flex flex-col gap-6">
                {[
                  { path: '/', label: 'Home', icon: HomeIcon },
                  { path: '/about', label: 'About Us', icon: Users },
                  { path: '/programs', label: 'Programs', icon: BookOpen },
                  { path: '/centers', label: 'Centers', icon: MapPin },
                  { path: '/get-involved', label: 'Get Involved', icon: Heart },
                  { path: '/contributors', label: 'Contributors', icon: Handshake },
                  { path: '/contact', label: 'Contact', icon: Phone }
                ].map(({ path, label, icon: Icon }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-3xl font-black tracking-tight flex items-center gap-4 transition-colors ${isActive(path) ? 'text-red-600' : 'text-slate-300 hover:text-slate-900'}`}
                  >
                    <Icon size={28} className={isActive(path) ? 'text-red-600' : 'text-slate-300'} />
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto">
                <Link
                  to="/get-involved"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xl uppercase tracking-widest flex items-center justify-center gap-4 shadow-xl active:scale-95 transition-all"
                >
                  <span>Donate Now</span>
                  <Heart className="fill-red-500 text-red-500 animate-pulse" />
                </Link>
                <div className="mt-12 text-center">
                  <p className="text-slate-400 font-medium text-sm">© 2024 Vidya & Child</p>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {/* Footer - Hidden on Admin Routes */}
      {
        !isAdminRoute && (
          <footer className="bg-teal-900 text-white pt-32 pb-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
                <div className="lg:col-span-1">
                  <div className="bg-white p-4 rounded-[1.5rem] inline-flex mb-10 shadow-xl">
                    <img
                      src="/logo.webp"
                      alt="Vidya & Child - विद्या एवं चाइल्ड"
                      className="h-14 w-auto object-contain"
                    />
                  </div>
                  <p className="text-teal-100/70 text-lg leading-relaxed font-medium mb-12">
                    A non-profit education organization working with children from economically disadvantaged families.
                  </p>
                  <div className="flex gap-6">
                    <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-red-600 transition-all"><Instagram size={28} /></a>
                    <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-red-500 transition-all"><Twitter size={28} /></a>
                    <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-red-800 transition-all"><Facebook size={28} /></a>
                  </div>
                </div>

                <div>
                  <h4 className="font-black text-red-400 mb-10 text-xs uppercase tracking-[0.4em]">Get in Touch</h4>
                  <ul className="space-y-8">
                    <li className="flex items-center gap-6 group">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-all"><Mail size={24} /></div>
                      <span className="font-black text-lg text-teal-50">info@vidyaandchild.org</span>
                    </li>
                    <li className="flex items-center gap-6 group">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-red-600 transition-all"><Phone size={24} /></div>
                      <span className="font-black text-lg text-teal-50">+91 120 422 6128</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-black text-red-400 mb-10 text-xs uppercase tracking-[0.4em]">Quick Menu</h4>
                  <ul className="space-y-6 font-black text-lg">
                    <li><Link to="/" className="text-teal-100/70 hover:text-white transition-colors">Home</Link></li>
                    <li><Link to="/about" className="text-teal-100/70 hover:text-white transition-colors">About Us</Link></li>
                    <li><Link to="/programs" className="text-teal-100/70 hover:text-white transition-colors">Programs</Link></li>
                    <li><Link to="/centers" className="text-teal-100/70 hover:text-white transition-colors">Centers</Link></li>
                    <li><Link to="/get-involved" className="text-teal-100/70 hover:text-white transition-colors">Get Involved</Link></li>
                    <li><Link to="/contributors" className="text-teal-100/70 hover:text-white transition-colors">Contributors</Link></li>
                    <li><Link to="/contact" className="text-teal-100/70 hover:text-white transition-colors">Contact</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-black text-red-400 mb-10 text-xs uppercase tracking-[0.4em]">Our Mission</h4>
                  <p className="text-teal-100/70 text-sm leading-relaxed font-bold">
                    Vidya & Child is part of the Jayaprakash Narayan Memorial Trust. Every donation is eligible for 80G tax benefits.
                  </p>
                  <div className="mt-10 p-6 border border-white/10 rounded-3xl bg-white/5 flex items-center gap-6">
                    <ShieldCheck className="text-red-500" size={32} />
                    <div>
                      <div className="font-black text-sm text-white">FCRA Reg.</div>
                      <div className="text-[10px] text-teal-200/50 font-black uppercase">Verified NGO</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-end items-center gap-10 text-[10px] text-teal-200/50 font-black uppercase tracking-[0.3em]">
                <div className="flex gap-12">
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                  <Link to="/admin" className="hover:text-white transition-colors">Admin Login</Link>
                </div>
              </div>
            </div>
          </footer>
        )
      }
    </div >
  );
};

export default App;
