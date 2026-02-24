
import React from 'react';
import { Target, Heart, Users, Award, TrendingUp, Globe } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-teal-900 text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/teachers.jpg"
                        alt="Vidya & Child Teachers"
                        className="w-full h-full object-cover object-[center_25%] opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/80 to-transparent" />
                </div>

                <div className="absolute inset-0 opacity-20 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/20 via-transparent to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-3 text-red-400 font-black uppercase text-xs tracking-[0.4em] mb-8">
                            <div className="w-12 h-1 bg-red-600" />
                            About Our Mission
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
                            Bridging the <span className="text-red-500">Educational Gap</span>
                        </h1>
                        <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl">
                            Since 1998, Vidya & Child has been empowering first-generation learners from economically disadvantaged families to achieve their full potential.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Objective & Beliefs */}
            <section className="py-24 bg-cream">
                <div className="container mx-auto px-4">

                    {/* Mission & Objective Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-24 max-w-6xl mx-auto">
                        {/* Mission Card */}
                        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-beige/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2 group-hover:bg-red-100 transition-colors" />
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <Target size={40} />
                                </div>
                                <h2 className="text-4xl font-black text-teal-900 mb-6 tracking-tight">Our Mission</h2>
                                <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                                    <p>
                                        Vidya & Child works with the mission to help bridge the gap for those children who need education and have no access to the facilities for learning, existing in our society.
                                    </p>
                                    <p>
                                        It works towards providing a learning environment which can lead to a strong educational foundation as well as help a child in identifying the uniqueness within.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Objective Card */}
                        <div className="bg-teal-900 text-white p-12 rounded-[2.5rem] shadow-lg relative overflow-hidden group">
                            {/* Abstract Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full opacity-20" />
                                <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full opacity-20" />
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-center">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-teal-300 mb-8 border border-white/20 group-hover:rotate-3 transition-transform duration-300">
                                    <Award size={40} />
                                </div>
                                <h2 className="text-4xl font-black mb-6 tracking-tight">Objective</h2>
                                <p className="text-xl text-teal-50 font-medium leading-relaxed">
                                    To develop a creative learning environment for children and help them merge with the mainstream of the society.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Beliefs Section */}
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-full text-amber-500 mb-6">
                                <Heart size={32} />
                            </div>
                            <h2 className="text-5xl font-black text-teal-900 mb-4 tracking-tight">Our Beliefs</h2>
                            <p className="text-xl text-slate-500 font-bold uppercase tracking-widest max-w-2xl mx-auto">
                                Purpose of education is to build a platform for a child
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { text: "To learn, grow and explore.", color: "bg-blue-50 text-blue-600" },
                                { text: "To become a self-aware individual with the ability to make his own right decisions in all facets of life.", color: "bg-green-50 text-green-600" },
                                { text: "To become aware of himself and his surroundings (family, friends, community and the world at large).", color: "bg-purple-50 text-purple-600" },
                                { text: "To continue learning and identify a career path of his interest area through which he can sustain himself and his family.", color: "bg-orange-50 text-orange-600" },
                                { text: "To enjoy the whole process and experience of learning.", color: "bg-pink-50 text-pink-600" }
                            ].map((belief, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-[2rem] border border-beige/50 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group">
                                    <div className={`w-3 h-3 rounded-full ${belief.color.split(' ')[1].replace('text', 'bg')} mb-6 group-hover:scale-150 transition-transform`} />
                                    <p className="text-lg text-slate-700 font-medium leading-relaxed">
                                        {belief.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Journey */}
            <section className="py-32 bg-teal-900 text-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-950 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3" />
                </div>

                {/* Decorative Pattern */}
                <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>


                <div className="container mx-auto px-4 relative z-10">
                    <SectionHeading
                        title="Our Journey"
                        subtitle="“A journey of a thousand miles begins with a single step”"
                        className="text-white"
                        isDark={true}
                    />

                    <div className="mt-20 max-w-4xl mx-auto">
                        <div className="relative border-l-2 border-teal-700/50 pl-12 space-y-16">
                            {/* Milestone 1 */}
                            <div className="relative group">
                                <span className="absolute -left-[57px] top-0 w-6 h-6 rounded-full bg-teal-500 ring-4 ring-teal-900 group-hover:bg-red-500 transition-colors duration-300"></span>
                                <h3 className="text-3xl font-bold text-white mb-4">1998: The Beginning</h3>
                                <p className="text-xl text-teal-100/80 leading-relaxed">
                                    Vidya & Child took this historical step in 1998 with the aim of making a difference in the lives of under-privileged children. Our first student was five-year old Tumpa, who went on to become a confident girl pursuing graduation in Fine Arts from New Delhi.
                                </p>
                            </div>

                            {/* Milestone 2 */}
                            <div className="relative group">
                                <span className="absolute -left-[57px] top-0 w-6 h-6 rounded-full bg-teal-500 ring-4 ring-teal-900 group-hover:bg-red-500 transition-colors duration-300"></span>
                                <h3 className="text-3xl font-bold text-white mb-4">Growing Impact</h3>
                                <p className="text-xl text-teal-100/80 leading-relaxed">
                                    Over the years, there was a manifold increase in the number of beneficiaries. Majority of them are first generation learners and have parents who are illiterate/semi-literate and work as domestic servants, industrial workers, rickshaw-pullers, street vendors, plumbers & carpenters.
                                </p>
                            </div>

                            {/* Milestone 3 */}
                            <div className="relative group">
                                <span className="absolute -left-[57px] top-0 w-6 h-6 rounded-full bg-teal-500 ring-4 ring-teal-900 group-hover:bg-red-500 transition-colors duration-300"></span>
                                <h3 className="text-3xl font-bold text-white mb-4">Commitment to Holistic Development</h3>
                                <p className="text-xl text-teal-100/80 leading-relaxed">
                                    Despite facing many challenges, Vidya & Child has always remained committed to diligently follow a process-driven, child-centric approach & endeavoured to provide education, encouragement as well as opportunities for holistic development of each child.
                                </p>
                            </div>

                            {/* Milestone 4 */}
                            <div className="relative group">
                                <span className="absolute -left-[57px] top-0 w-6 h-6 rounded-full bg-teal-500 ring-4 ring-teal-900 group-hover:bg-red-500 transition-colors duration-300"></span>
                                <h3 className="text-3xl font-bold text-white mb-4">Expanding Horizons</h3>
                                <p className="text-xl text-teal-100/80 leading-relaxed">
                                    Working across different communities through various centres, the Vidya & Child team has been working collaboratively to provide a creative learning environment. Financial & academic assistance has been further supported by counselling, Health Camps, Life Skills as well as Arts & Performing Arts Programmes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-32 bg-beige relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-soft-light opacity-50 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl text-teal-600 mb-8 shadow-md transform hover:-rotate-6 transition-transform duration-300">
                                <Users size={40} />
                            </div>
                            <h2 className="text-5xl font-black text-teal-900 mb-6 tracking-tight">Our Team</h2>
                            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
                                A diverse group of passionate individuals working together for a common cause.
                            </p>
                        </div>

                        <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl border border-white/50 space-y-12 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-teal-500"></div>

                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold text-teal-900">Unity in Diversity</h3>
                                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                                    Setting finest example of versatility and dynamism, our team comprises of very young talented people working in close cooperation with extremely experienced people, academicians, creative professionals, people from corporate sector, people from development sector, people from different parts of the country speaking different languages and having diverse backgrounds.
                                </p>
                                <p className="text-xl text-slate-700 leading-relaxed font-medium italic border-l-4 border-red-500 pl-6 py-2 bg-red-50 rounded-r-xl">
                                    "This kind of diversity has made us learn from and grow with each other."
                                </p>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div className="space-y-8">
                                <h3 className="text-3xl font-bold text-teal-900">Full Circle</h3>
                                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                                    We are also proud to have amongst us some of the children who studied with Vidya & Child right from their primary years and are now working with us after completing class XII. They continue to pursue their education through different institutes along with their job.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Who We Serve"
                        subtitle="We work with first-generation learners from socio-economically marginalized backgrounds"
                    />

                    <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-7xl mx-auto">
                        {/* Students Card */}
                        <div className="bg-cream p-10 rounded-[2.5rem] hover:bg-teal-900 group transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-red-600 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Users size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-teal-900 mb-4 group-hover:text-white transition-colors">Our Students</h3>
                                <p className="text-slate-600 font-medium leading-relaxed group-hover:text-teal-100 transition-colors">
                                    Children from families of domestic servants, rickshaw pullers, industrial workers, plumbers, and street vendors seeking educational opportunities.
                                </p>
                            </div>
                        </div>

                        {/* Approach Card */}
                        <div className="bg-cream p-10 rounded-[2.5rem] hover:bg-teal-900 group transition-all duration-500 relative overflow-hidden md:-mt-8">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-red-600 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <Award size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-teal-900 mb-4 group-hover:text-white transition-colors">Our Approach</h3>
                                <p className="text-slate-600 font-medium leading-relaxed group-hover:text-teal-100 transition-colors">
                                    Holistic education combining academics, life skills, performing arts, and career guidance from Nursery to graduation and beyond.
                                </p>
                            </div>
                        </div>

                        {/* Impact Card */}
                        <div className="bg-cream p-10 rounded-[2.5rem] hover:bg-teal-900 group transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-red-600 mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <TrendingUp size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-teal-900 mb-4 group-hover:text-white transition-colors">Our Impact</h3>
                                <p className="text-slate-600 font-medium leading-relaxed group-hover:text-teal-100 transition-colors">
                                    First-generation learners becoming engineers, teachers, artists, and professionals, breaking the cycle of poverty through education.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Registration & Trust Info */}
            <section className="py-32 bg-cream relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center text-red-600 mb-8 mx-auto transform rotate-12">
                                <Globe size={48} />
                            </div>
                            <h2 className="text-5xl font-black text-teal-900 mb-6 tracking-tight">Official Recognition</h2>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
                                Vidya & Child operates under the Jayaprakash Narayan Memorial Trust, with full legal recognition and certifications.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Board Registrations */}
                            <div className="p-12 bg-white rounded-[3rem] border border-beige/50 shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
                                        <Award size={24} />
                                    </div>
                                    <h4 className="text-2xl font-black text-teal-900">Board Registrations</h4>
                                </div>
                                <ul className="space-y-6">
                                    <li className="flex items-center gap-4 group">
                                        <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-bold text-sm group-hover:bg-red-600 group-hover:text-white transition-colors">1</span>
                                        <span className="text-lg text-slate-700 font-bold group-hover:text-teal-900 transition-colors">UP Board (3 centers in Noida)</span>
                                    </li>
                                    <li className="flex items-center gap-4 group">
                                        <span className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-bold text-sm group-hover:bg-red-600 group-hover:text-white transition-colors">2</span>
                                        <span className="text-lg text-slate-700 font-bold group-hover:text-teal-900 transition-colors">NIOS Board (1 center in Noida)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Tax Benefits */}
                            <div className="p-12 bg-white rounded-[3rem] border border-beige/50 shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
                                        <Heart size={24} />
                                    </div>
                                    <h4 className="text-2xl font-black text-teal-900">Tax Benefits</h4>
                                </div>
                                <ul className="space-y-6">
                                    <li className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-lg text-slate-700 font-bold group-hover:text-teal-900 transition-colors">80G Tax Exemption for Donors</span>
                                    </li>
                                    <li className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-lg text-slate-700 font-bold group-hover:text-teal-900 transition-colors">FCRA Registered NGO</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
