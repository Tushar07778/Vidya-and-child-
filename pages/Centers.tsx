
import React from 'react';
import { CENTERS } from '../constants';
import CenterCard from '../components/CenterCard';
import SectionHeading from '../components/SectionHeading';
import { MapPin, Phone, Mail } from 'lucide-react';

const Centers: React.FC = () => {
    const noidaCenters = CENTERS.filter(c => c.city === 'Noida');
    const biharCenters = CENTERS.filter(c => c.city === 'Bihar');

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-teal-900 text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/centre.jpg"
                        alt="Vidya & Child Center"
                        className="w-full h-full object-cover object-center opacity-50 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-950/80 via-transparent to-transparent" />
                </div>

                <div className="absolute inset-0 opacity-20 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-3 text-red-400 font-black uppercase text-xs tracking-[0.4em] mb-8">
                            <div className="w-12 h-1 bg-red-600" />
                            Our Presence
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
                            5 Centers <span className="text-red-500">Across</span> India
                        </h1>
                        <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl">
                            Serving communities in Noida and Bihar with dedicated learning centers offering specialized programs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Noida Centers */}
            <section className="py-32 bg-cream">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Noida Centers"
                        subtitle="Four operational centers across Noida serving diverse communities"
                    />

                    <div className="grid md:grid-cols-2 gap-12 mt-20">
                        {noidaCenters.map((center) => (
                            <CenterCard key={center.id} center={center} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bihar Centers */}
            <section className="py-32 bg-beige">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Bihar Centers"
                        subtitle="Extending our reach to rural communities in Bihar"
                    />

                    <div className="grid md:grid-cols-2 gap-12 mt-20">
                        {biharCenters.map((center) => (
                            <CenterCard key={center.id} center={center} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-32 bg-cream">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-5xl font-black text-teal-900 mb-6 tracking-tight">Visit Us</h2>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">
                                All centers are open Monday to Saturday. Contact us for visiting hours and directions.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-10 bg-white rounded-[2.5rem] border border-beige/50 shadow-sm">
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 mx-auto shadow-sm">
                                    <MapPin size={32} />
                                </div>
                                <h4 className="text-lg font-black text-teal-900 mb-2">Main Office</h4>
                                <p className="text-slate-600 font-medium text-sm">Sector 37, Noida</p>
                            </div>

                            <div className="text-center p-10 bg-white rounded-[2.5rem] border border-beige/50 shadow-sm">
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 mx-auto shadow-sm">
                                    <Phone size={32} />
                                </div>
                                <h4 className="text-lg font-black text-teal-900 mb-2">Call Us</h4>
                                <p className="text-slate-600 font-medium text-sm">+91 120 422 6128</p>
                            </div>

                            <div className="text-center p-10 bg-white rounded-[2.5rem] border border-beige/50 shadow-sm">
                                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 mx-auto shadow-sm">
                                    <Mail size={32} />
                                </div>
                                <h4 className="text-lg font-black text-teal-900 mb-2">Email Us</h4>
                                <p className="text-slate-600 font-medium text-sm">info@vidyaandchild.org</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Centers;
