import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { Building2, Globe, Handshake, Heart, Award, Users } from 'lucide-react';

const Contributors: React.FC = () => {
    const corporatePartners = [
        "ATS Infrastructure Pvt Ltd.",
        "Axis Bank Foundation",
        "Cadence Design Systems India Pvt.Ltd.",
        "Egelhof Controls India Pvt. Ltd",
        "Genpact India",
        "HCL Technologies Foundation",
        "HDFC Bank",
        "Head Strong Service India Pvt. Ltd.",
        "Maitri Trust",
        "Mentor Graphics (India) Pvt. Ltd.",
        "Royal Bank of Scotland",
        "Tata Consultancy Services",
        "TRENT Ltd",
        "XL India Business Services Pvt. Ltd.",
        "Young Hospitech Pvt Ltd."
    ];

    const institutionalPartners = [
        "Asha Jyothi",
        "British High Commission",
        "Caring Hand for Children",
        "Charities Aid Foundation India",
        "Concern India Foundation",
        "Essel Social Welfare Foundation",
        "Hope Hall Foundation School",
        "Smile Foundation",
        "TechMahindra Foundation",
        "YouthReach"
    ];

    const grantSupporters = [
        "Credibility Alliance",
        "GiveIndia",
        "Guidestar India",
        "Help Your NGO",
        "Letz Change Foundation"
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-28 text-white overflow-hidden flex items-center justify-center min-h-[500px]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/APA-Day.jpg"
                        alt="Vidya & Child Contributors"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-teal-900/80 backdrop-blur-[2px]" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-3 text-red-400 font-black uppercase text-xs tracking-[0.4em] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="w-8 h-1 bg-red-600" />
                        Gratitude
                        <div className="w-8 h-1 bg-red-600" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        Our <span className="text-red-500">Contributors</span>
                    </h1>
                    <p className="text-xl text-teal-100/90 font-medium max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        We are deeply grateful to our partners for their unwavering support and commitment to empowering children through education.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-20">
                {/* Corporate Partners */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                            <Building2 size={24} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-teal-900">Corporate Partners</h2>
                            <p className="text-slate-500 font-medium text-sm">Driving change through CSR initiatives</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {corporatePartners.map((partner, index) => (
                            <div key={index} className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-red-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-red-400 group-hover:scale-150 transition-transform" />
                                    <span className="font-bold text-slate-700 group-hover:text-teal-900 transition-colors">{partner}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Institutional Partners */}
                <div className="mb-24">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                            <Handshake size={24} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-teal-900">Institutional Partners</h2>
                            <p className="text-slate-500 font-medium text-sm">Collaborating for a better future</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {institutionalPartners.map((partner, index) => (
                            <div key={index} className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-teal-400 group-hover:scale-150 transition-transform" />
                                    <span className="font-bold text-slate-700 group-hover:text-teal-900 transition-colors">{partner}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Grant Supporters */}
                <div>
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                            <Award size={24} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-teal-900">Grant Supporters</h2>
                            <p className="text-slate-500 font-medium text-sm">Supporting our mission through grants</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {grantSupporters.map((partner, index) => (
                            <div key={index} className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-amber-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 w-2 h-2 rounded-full bg-amber-400 group-hover:scale-150 transition-transform" />
                                    <span className="font-bold text-slate-700 group-hover:text-teal-900 transition-colors">{partner}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contributors;
