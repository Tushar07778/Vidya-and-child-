
import React, { useState } from 'react';
import { Heart, Users, Handshake, Building2, Send, CheckCircle, ArrowDown, Sparkles, Quote } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import PaymentModal from '../components/PaymentModal';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const GetInvolved: React.FC = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState<string | undefined>(undefined);
    const [volunteerData, setVolunteerData] = useState({
        name: '', email: '', phone: '', center: 'Sector 37, Noida',
        interest: 'Academic Teaching', message: ''
    });

    const handleVolunteerSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await addDoc(collection(db, 'volunteers'), {
                ...volunteerData,
                createdAt: serverTimestamp(),
            });
            setFormSubmitted(true);
            setVolunteerData({ name: '', email: '', phone: '', center: 'Sector 37, Noida', interest: 'Academic Teaching', message: '' });
            setTimeout(() => setFormSubmitted(false), 5000);
        } catch (err) {
            console.error('Error saving volunteer application:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDonateClick = (amount?: string) => {
        setSelectedAmount(amount);
        setIsPaymentOpen(true);
    };

    const scrollToContent = () => {
        const element = document.getElementById('ways-to-support');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Payment Modal */}
            <PaymentModal isOpen={isPaymentOpen} onClose={() => setIsPaymentOpen(false)} amount={selectedAmount} />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-teal-900 text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/friends.png"
                        alt="Join Our Mission - Make a Difference"
                        className="w-full h-full object-cover object-[center_15%] opacity-50 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-950/80 via-transparent to-transparent" />
                </div>

                <div className="absolute inset-0 opacity-20 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
                        <div className="inline-flex items-center gap-3 text-red-400 font-black uppercase text-xs tracking-[0.4em] mb-8">
                            <div className="w-12 h-1 bg-red-600" />
                            Join Our Mission
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
                            Make a <span className="text-red-500 inline-block animate-pulse">Difference</span>
                        </h1>
                        <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl mb-12">
                            Your support can transform lives. Join us in empowering first-generation learners to achieve their dreams.
                        </p>
                        <button
                            onClick={scrollToContent}
                            className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs hover:text-red-400 transition-colors"
                        >
                            Start Your Journey
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-red-400 group-hover:bg-red-400/10 transition-all">
                                <ArrowDown size={16} className="animate-bounce" />
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Ways to Help with Impact Stats */}
            <section id="ways-to-support" className="py-24 bg-cream relative">
                {/* Floating Impact Box */}
                <div className="container mx-auto px-4 -mt-10 relative z-20 mb-12">
                    <div className="bg-white rounded-[2rem] p-8 shadow-2xl shadow-teal-900/10 border border-white/50 backdrop-blur-sm grid md:grid-cols-3 gap-8 items-center">
                        <div className="text-center group">
                            <div className="mb-3 flex justify-center">
                                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                                    <Users size={28} />
                                </div>
                            </div>
                            <div className="text-4xl font-black text-teal-900 mb-1 group-hover:scale-110 transition-transform duration-300">500+</div>
                            <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-2">Active Volunteers</div>
                            <p className="text-slate-500 text-xs font-medium">Dedicating their time & skills</p>
                        </div>
                        <div className="md:border-x border-slate-100 text-center group">
                            <div className="mb-3 flex justify-center">
                                <div className="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                    <CheckCircle size={28} />
                                </div>
                            </div>
                            <div className="text-4xl font-black text-teal-900 mb-1 group-hover:scale-110 transition-transform duration-300">100%</div>
                            <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-2">Direct Impact</div>
                            <p className="text-slate-500 text-xs font-medium">Reaching students who need it most</p>
                        </div>
                        <div className="text-center group">
                            <div className="mb-3 flex justify-center">
                                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                                    <Building2 size={28} />
                                </div>
                            </div>
                            <div className="text-4xl font-black text-teal-900 mb-1 group-hover:scale-110 transition-transform duration-300">5</div>
                            <div className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-2">Learning Centers</div>
                            <p className="text-slate-500 text-xs font-medium">Safe spaces for holistic growth</p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Ways to Support"
                        subtitle="Choose how you'd like to contribute to our mission"
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                        <div onClick={() => handleDonateClick()} className="cursor-pointer p-10 bg-white rounded-[2.5rem] border border-beige/50 hover:border-red-200 hover:bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group text-center shadow-sm">
                            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center text-red-600 mb-8 mx-auto group-hover:scale-110 transition-transform shadow-lg border border-red-50">
                                <Heart size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-teal-900 mb-4">Donate</h3>
                            <p className="text-slate-600 font-medium mb-6">
                                Financial support helps us provide quality education and resources
                            </p>
                            <div className="text-xs font-black text-slate-600 bg-beige px-4 py-2 rounded-full inline-block border border-beige/50">
                                80G TAX BENEFIT
                            </div>
                        </div>

                        <div className="p-10 bg-white rounded-[2.5rem] border border-beige/50 hover:border-red-200 hover:bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group text-center shadow-sm cursor-pointer">
                            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center text-red-600 mb-8 mx-auto group-hover:scale-110 transition-transform shadow-lg border border-red-50">
                                <Users size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-teal-900 mb-4">Volunteer</h3>
                            <p className="text-slate-600 font-medium mb-6">
                                Share your time and skills to mentor and teach our students
                            </p>
                            <div className="text-xs font-black text-slate-600 bg-beige px-4 py-2 rounded-full inline-block border border-beige/50">
                                FLEXIBLE HOURS
                            </div>
                        </div>

                        <div className="p-10 bg-white rounded-[2.5rem] border border-beige/50 hover:border-red-200 hover:bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group text-center shadow-sm cursor-pointer">
                            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center text-red-600 mb-8 mx-auto group-hover:scale-110 transition-transform shadow-lg border border-red-50">
                                <Handshake size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-teal-900 mb-4">Partner</h3>
                            <p className="text-slate-600 font-medium mb-6">
                                Collaborate with us through program partnerships and sponsorships
                            </p>
                            <div className="text-xs font-black text-slate-600 bg-beige px-4 py-2 rounded-full inline-block border border-beige/50">
                                LONG-TERM IMPACT
                            </div>
                        </div>

                        <div className="p-10 bg-white rounded-[2.5rem] border border-beige/50 hover:border-red-200 hover:bg-white hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group text-center shadow-sm cursor-pointer">
                            <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center text-red-600 mb-8 mx-auto group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-lg border border-red-50">
                                <Building2 size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-teal-900 mb-4">CSR</h3>
                            <p className="text-slate-600 font-medium mb-6">
                                Corporate Social Responsibility programs aligned with education
                            </p>
                            <div className="text-xs font-black text-slate-600 bg-beige px-4 py-2 rounded-full inline-block border border-beige/50 group-hover:bg-red-50 group-hover:text-red-700 transition-colors">
                                CUSTOM PROGRAMS
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            {/* Testimonial Section */}
            <section className="py-24 bg-teal-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[120px]" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Quote size={64} className="text-red-500/30 mx-auto mb-8 animate-bounce delay-700" />
                        <h3 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8">
                            "Volunteering here didn't just change the students' lives; <span className="text-red-400">it changed mine.</span> Seeing the spark in their eyes is the greatest reward."
                        </h3>
                        <div className="inline-flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xl">
                                S
                            </div>
                            <div className="text-left">
                                <div className="text-white font-bold text-lg">Sneha Kapoor</div>
                                <div className="text-teal-300 text-xs font-bold uppercase tracking-widest">Math Volunteer, 2 Years</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation Section */}
            {/* Donation Section */}
            <section className="py-32 bg-beige">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-black text-teal-900 mb-6 tracking-tight">
                                Support Through <span className="text-red-600">Donations</span>
                            </h2>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
                                Every contribution makes a difference. All donations are eligible for 80G tax benefits under the Jayaprakash Narayan Memorial Trust.
                            </p>
                        </div>

                        <div className="bg-white p-8 md:p-16 rounded-[4rem] border border-white shadow-2xl">
                            {/* Predefined Amounts */}
                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                {[
                                    { value: "5000", label: "Supporter", desc: "Supports one student for a month" },
                                    { value: "25000", label: "Champion", desc: "Supports one student for six months" },
                                    { value: "60000", label: "Patron", desc: "Supports one student for a year" }
                                ].map((item) => (
                                    <div
                                        key={item.value}
                                        onClick={() => {
                                            setSelectedAmount(item.value);
                                            // Clear custom amount when a preset is selected, optional preference
                                        }}
                                        className={`cursor-pointer text-center p-8 rounded-[2rem] border-2 transition-all group ${selectedAmount === item.value
                                            ? 'bg-red-50 border-red-200 scale-105 shadow-xl'
                                            : 'bg-beige/50 border-transparent hover:bg-beige hover:scale-105'
                                            }`}
                                    >
                                        <div className={`text-3xl font-black mb-2 transition-transform ${selectedAmount === item.value ? 'text-red-600 scale-110' : 'text-slate-400 group-hover:text-red-500'}`}>
                                            ₹{parseInt(item.value).toLocaleString()}
                                        </div>
                                        <div className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">{item.label}</div>
                                        <p className="text-slate-500 font-medium text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Custom Amount Input */}
                            <div className="max-w-xl mx-auto mb-12">
                                <label className="block text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                                    Or Enter Custom Amount
                                </label>
                                <div className="relative">
                                    <span className="absolute left-8 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-400">₹</span>
                                    <input
                                        type="number"
                                        placeholder="Other Amount"
                                        value={selectedAmount && !["5000", "25000", "60000"].includes(selectedAmount) ? selectedAmount : ''}
                                        onChange={(e) => setSelectedAmount(e.target.value)}
                                        className="w-full pl-16 pr-8 py-6 bg-white border-2 border-slate-200 rounded-[2rem] outline-none focus:border-red-600 focus:bg-white focus:ring-4 focus:ring-red-100 transition-all font-black text-3xl text-teal-900 placeholder:text-slate-400 text-center"
                                    />
                                </div>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={() => {
                                        if (selectedAmount) {
                                            setIsPaymentOpen(true);
                                        } else {
                                            // Optionally alert user to select amount
                                            alert("Please select or enter a donation amount.");
                                        }
                                    }}
                                    disabled={!selectedAmount}
                                    className={`bg-red-600 hover:bg-red-700 text-white px-16 py-6 rounded-full font-black text-2xl transition-all shadow-2xl shadow-red-200 inline-flex items-center gap-4 ${!selectedAmount ? 'opacity-50 cursor-not-allowed grayscale' : 'active:scale-95'}`}
                                >
                                    <Heart size={28} fill="currentColor" />
                                    Donate {selectedAmount ? `₹${parseInt(selectedAmount).toLocaleString()}` : 'Now'}
                                </button>
                                <p className="text-slate-500 font-medium text-sm mt-6">
                                    Secure payment • 80G Tax Benefit • FCRA Registered
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Volunteer Form */}
            {/* Volunteer Form */}
            <section className="py-32 bg-cream">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-black text-teal-900 mb-6 tracking-tight">
                                Become a <span className="text-red-600">Volunteer</span>
                            </h2>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                Share your skills and time to make a lasting impact on young lives
                            </p>
                        </div>

                        <div className={`bg-white p-16 rounded-[4rem] border border-white shadow-2xl ${formSubmitted ? 'min-h-[600px] flex items-center justify-center' : ''}`}>
                            {formSubmitted ? (
                                <div className="text-center animate-in zoom-in duration-500">
                                    <div className="w-28 h-28 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-100/50">
                                        <CheckCircle size={56} />
                                    </div>
                                    <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Application Received!</h3>
                                    <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-md mx-auto">
                                        Thank you for your interest in volunteering. Our team will contact you within 2-3 business days.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleVolunteerSubmit} className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name *</label>
                                            <input required type="text" placeholder="Your Full Name" value={volunteerData.name} onChange={e => setVolunteerData(p => ({ ...p, name: e.target.value }))} className="w-full px-8 py-5 bg-white border border-slate-200 rounded-[1.5rem] outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600 transition-all font-bold placeholder:text-slate-400 text-slate-900" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email Address *</label>
                                            <input required type="email" placeholder="name@example.com" value={volunteerData.email} onChange={e => setVolunteerData(p => ({ ...p, email: e.target.value }))} className="w-full px-8 py-5 bg-white border border-slate-200 rounded-[1.5rem] outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600 transition-all font-bold placeholder:text-slate-400 text-slate-900" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Phone Number *</label>
                                            <input required type="tel" placeholder="+91 XXXXX XXXXX" value={volunteerData.phone} onChange={e => setVolunteerData(p => ({ ...p, phone: e.target.value }))} className="w-full px-8 py-5 bg-white border border-slate-200 rounded-[1.5rem] outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600 transition-all font-bold placeholder:text-slate-400 text-slate-900" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Preferred Center</label>
                                            <select value={volunteerData.center} onChange={e => setVolunteerData(p => ({ ...p, center: e.target.value }))} className="w-full px-8 py-5 bg-white border border-slate-200 rounded-[1.5rem] outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600 transition-all font-bold appearance-none text-slate-900">
                                                <option>Sector 37, Noida</option>
                                                <option>Sector 128, Noida</option>
                                                <option>Barola, Noida</option>
                                                <option>Khoda, Noida</option>
                                                <option>Siwan, Bihar</option>
                                                <option>Any Center</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Areas of Interest</label>
                                        <select value={volunteerData.interest} onChange={e => setVolunteerData(p => ({ ...p, interest: e.target.value }))} className="w-full px-8 py-5 bg-white border border-slate-200 rounded-[1.5rem] outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600 transition-all font-bold appearance-none text-slate-900">
                                            <option>Academic Teaching</option>
                                            <option>Life Skills Training</option>
                                            <option>Arts &amp; Performing Arts</option>
                                            <option>Career Counseling</option>
                                            <option>Computer Training</option>
                                            <option>Administrative Support</option>
                                            <option>Event Organization</option>
                                        </select>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Tell us about yourself *</label>
                                        <textarea required rows={5} placeholder="Share your background, skills, and why you'd like to volunteer..." value={volunteerData.message} onChange={e => setVolunteerData(p => ({ ...p, message: e.target.value }))} className="w-full px-8 py-5 bg-white border border-slate-200 rounded-[1.5rem] outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600 transition-all font-bold resize-none placeholder:text-slate-400 text-slate-900"></textarea>
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-6 rounded-[1.5rem] font-black text-2xl transition-all shadow-2xl shadow-red-100 flex items-center justify-center gap-4 active:scale-95">
                                        {isSubmitting ? 'Submitting...' : 'Submit Application'} <Send size={24} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default GetInvolved;
