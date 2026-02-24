
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle, Instagram, Linkedin, Youtube } from 'lucide-react';
import { CENTERS } from '../constants';
import Card from '../components/Card';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const Contact: React.FC = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', interest: 'Volunteering', message: '' });

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await addDoc(collection(db, 'inquiries'), {
                ...formData,
                createdAt: serverTimestamp(),
            });
            setFormSubmitted(true);
            setFormData({ name: '', email: '', interest: 'Volunteering', message: '' });
            setTimeout(() => setFormSubmitted(false), 5000);
        } catch (err) {
            console.error('Error saving inquiry:', err);
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="bg-white">
            {/* Contact Hero */}
            <section className="bg-teal-900 text-white relative overflow-hidden flex items-center min-h-screen">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/contact.jpg"
                        alt="Contact Vidya & Child"
                        className="w-full h-full object-cover object-center opacity-50 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/60 to-teal-950/30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-950/80 via-transparent to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
                            Let's <span className="text-red-500">Connect.</span>
                        </h1>
                        <p className="text-2xl text-slate-300 font-medium leading-relaxed max-w-2xl">
                            Building a brighter future starts with a conversation. Reach out to our team in Noida or Bihar.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-cream">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-24">
                        {/* Left Column: Info & Centers */}
                        <div>
                            <div className="mb-24">
                                <h2 className="text-4xl font-black text-teal-900 mb-12 tracking-tighter">Reach Us Directly</h2>
                                <div className="space-y-12">
                                    <div className="flex gap-8 group">
                                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm border border-beige">
                                            <Mail size={40} />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Write to us</h4>
                                            <p className="text-3xl font-black text-teal-900 tracking-tight">info@vidyaandchild.org</p>
                                            <p className="text-slate-500 mt-2 font-medium">Available 24/7 for your inquiries.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-8 group">
                                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm border border-beige">
                                            <Phone size={40} />
                                        </div>
                                        <div>
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Speak with us</h4>
                                            <p className="text-3xl font-black text-teal-900 tracking-tight">+91 120 422 6128</p>
                                            <p className="text-slate-500 mt-2 font-medium">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                                        </div>
                                    </div>

                                    {/* Social Media Links */}
                                    <div className="pt-8 border-t border-beige/20">
                                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Follow Our Journey</h4>
                                        <div className="flex gap-6">
                                            <a href="https://www.instagram.com/vidyachild/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-600 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg border border-beige/50">
                                                <Instagram size={28} />
                                            </a>
                                            <a href="https://www.linkedin.com/company/vidya-child/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-600 hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg border border-beige/50">
                                                <Linkedin size={28} />
                                            </a>
                                            <a href="https://www.youtube.com/@vidyachild5135" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-600 hover:bg-red-600 hover:text-white transition-all hover:-translate-y-1 shadow-sm hover:shadow-lg border border-beige/50">
                                                <Youtube size={28} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-4xl font-black text-teal-900 mb-12 tracking-tighter">Our Presence</h2>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {CENTERS.map((center) => (
                                        <Card key={center.id} className="p-10 border-beige/50 bg-white hover:border-red-200 group transition-all">
                                            <MapPin size={28} className="text-red-600 mb-6" />
                                            <h4 className="text-2xl font-black text-teal-900 mb-3 tracking-tight">{center.name}</h4>
                                            <p className="text-slate-500 mb-6 font-medium">{center.location}</p>
                                            <span className="text-[10px] font-black uppercase tracking-widest bg-beige text-teal-900 px-4 py-2 rounded-full border border-beige-200">
                                                {center.type}
                                            </span>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Inquiry Form */}
                        <div className="relative">
                            <div className="">
                                <img
                                    src="/centre.jpg"
                                    alt="Our Center"
                                    className="w-full h-80 object-cover rounded-[3rem] shadow-2xl relative z-0"
                                />
                                <div className={`p-12 md:p-20 rounded-[4rem] bg-white border border-white shadow-2xl relative z-10 mt-8 overflow-hidden ${formSubmitted ? 'min-h-[600px] flex items-center justify-center' : ''}`}>
                                    {formSubmitted ? (
                                        <div className="text-center animate-in zoom-in duration-500">
                                            <div className="w-28 h-28 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-100/50">
                                                <CheckCircle size={56} />
                                            </div>
                                            <h3 className="text-4xl font-black text-teal-900 mb-6 tracking-tight">Message Sent!</h3>
                                            <p className="text-slate-500 text-xl font-medium leading-relaxed">
                                                Thank you for reaching out. We'll be in touch soon.
                                            </p>
                                            <button onClick={() => setFormSubmitted(false)} className="mt-12 text-red-600 font-black text-lg flex items-center gap-3 mx-auto hover:gap-5 transition-all">
                                                Send Another Inquiry <ArrowRight size={24} />
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="mb-10 text-center">
                                                <h3 className="text-5xl font-black text-teal-900 mb-4 tracking-tighter">Inquiry Form</h3>
                                                <p className="text-slate-500 text-lg font-medium">How can we work together for the children?</p>
                                            </div>
                                            <form onSubmit={handleFormSubmit} className="space-y-8">
                                                <div className="grid sm:grid-cols-2 gap-8">
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Your Name</label>
                                                        <input required type="text" placeholder="Your Full Name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full px-8 py-5 bg-white border border-slate-200 rounded-[1.5rem] outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600 transition-all font-bold placeholder:text-slate-400 text-slate-900" />
                                                    </div>
                                                    <div className="space-y-3">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                                                        <input required type="email" placeholder="name@example.com" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full px-8 py-5 bg-white border border-slate-200 rounded-[1.5rem] outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600 transition-all font-bold placeholder:text-slate-400 text-slate-900" />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">I am interested in</label>
                                                    <select value={formData.interest} onChange={e => setFormData(p => ({ ...p, interest: e.target.value }))} className="w-full px-8 py-5 bg-white border border-slate-200 rounded-[1.5rem] outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600 transition-all font-bold appearance-none text-slate-900">
                                                        <option>Volunteering</option>
                                                        <option>Donating</option>
                                                        <option>Program Partnership</option>
                                                        <option>General Inquiry</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Your Message</label>
                                                    <textarea required rows={5} placeholder="Tell us how you'd like to help..." value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} className="w-full px-8 py-5 bg-white border border-slate-200 rounded-[1.5rem] outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600 transition-all font-bold resize-none placeholder:text-slate-400 text-slate-900"></textarea>
                                                </div>
                                                <button type="submit" disabled={isSubmitting} className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-6 rounded-[1.5rem] font-black text-2xl transition-all shadow-2xl shadow-red-100 flex items-center justify-center gap-4 active:scale-95">
                                                    {isSubmitting ? 'Sending...' : 'Submit Message'} <Send size={24} />
                                                </button>
                                            </form>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Google Map Section */}
            <section className="h-[500px] w-full relative z-0">
                <iframe
                    src="https://maps.google.com/maps?q=Vidya%20and%20Child%20Sector%2037%20Noida&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Vidya & Child Main Center"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
