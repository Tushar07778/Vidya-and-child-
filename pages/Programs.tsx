
import React, { useState } from 'react';
import { PROGRAMS } from '../constants';
import ProgramCard from '../components/ProgramCard';
import SectionHeading from '../components/SectionHeading';
import { Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const categories = [
        { id: 'all', label: 'All Programs', count: PROGRAMS.length },
        { id: 'academic', label: 'Academic', count: PROGRAMS.filter(p => p.category === 'academic').length },
        { id: 'support', label: 'Support', count: PROGRAMS.filter(p => p.category === 'support').length },
        { id: 'enrichment', label: 'Enrichment', count: PROGRAMS.filter(p => p.category === 'enrichment').length },
        { id: 'career', label: 'Career', count: PROGRAMS.filter(p => p.category === 'career').length }
    ];

    const filteredPrograms = selectedCategory === 'all'
        ? PROGRAMS
        : PROGRAMS.filter(p => p.category === selectedCategory);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-teal-900 text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/cricket.jpg"
                        alt="Vidya & Child Sports Program"
                        className="w-full h-full object-cover object-[center_20%] opacity-40 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/80 to-transparent" />
                </div>

                <div className="absolute inset-0 opacity-20 z-0">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-950 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3" />
                </div>
                {/* Decorative Pattern */}
                <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-3 text-red-400 font-black uppercase text-xs tracking-[0.4em] mb-8">
                            <div className="w-12 h-1 bg-red-600" />
                            Our Programs
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9]">
                            Holistic <span className="text-red-500">Education</span> Journey
                        </h1>
                        <p className="text-2xl text-slate-400 font-medium leading-relaxed max-w-3xl">
                            From Nursery to Career, we provide comprehensive support through 12 specialized programs designed for first-generation learners.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 bg-white border-b border-slate-100 sticky top-0 z-40 backdrop-blur-xl bg-white/80 supports-[backdrop-filter]:bg-white/60">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
                                <Filter size={20} />
                            </div>
                            <h3 className="text-lg font-black text-teal-900 uppercase tracking-widest">Filter Programs</h3>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 border ${selectedCategory === category.id
                                            ? 'bg-teal-900 text-white border-teal-900 shadow-lg shadow-teal-900/20 transform scale-105'
                                            : 'bg-white text-slate-500 border-slate-200 hover:border-teal-200 hover:text-teal-700 hover:bg-teal-50'
                                        }`}
                                >
                                    {category.label}
                                    <span className={`ml-2 px-2 py-0.5 rounded-full text-[10px] ${selectedCategory === category.id
                                            ? 'bg-white/20 text-white'
                                            : 'bg-slate-100 text-slate-500'
                                        }`}>
                                        {category.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Grid */}
            <section className="py-32 bg-beige">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-teal-900 mb-4">
                            {selectedCategory === 'all'
                                ? 'All Programs'
                                : `${categories.find(c => c.id === selectedCategory)?.label} Programs`}
                        </h2>
                        <p className="text-slate-600 font-medium text-lg">
                            Showing {filteredPrograms.length} program{filteredPrograms.length !== 1 ? 's' : ''}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {filteredPrograms.map((program) => (
                            <ProgramCard
                                key={program.id}
                                program={program}
                                showCategory={selectedCategory === 'all'}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-cream">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-black text-teal-900 mb-8 tracking-tight">
                            Ready to Make a <span className="text-red-600">Difference?</span>
                        </h2>
                        <p className="text-2xl text-slate-600 font-medium leading-relaxed mb-12">
                            Support our programs and help first-generation learners achieve their dreams.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link to="/get-involved" className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-full font-black text-xl transition-all shadow-2xl shadow-red-200 active:scale-95 inline-block">
                                Donate Now
                            </Link>
                            <Link to="/get-involved" className="bg-beige hover:bg-beige/80 text-teal-900 px-12 py-6 rounded-full font-black text-xl transition-all active:scale-95 inline-block">
                                Become a Volunteer
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;
