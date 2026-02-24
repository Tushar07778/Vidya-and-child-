import React, { useState, useEffect } from 'react';
import {
    Sun,
    ArrowRight,
    Target,
    Heart,
    Users,
    Sparkles,
    Quote,
    RefreshCcw,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROGRAMS, CENTERS } from '../constants';
import { generateSuccessStory } from '../services/geminiService';
import { SuccessStory } from '../types';
import SectionHeading from '../components/SectionHeading';
import ProgramCard from '../components/ProgramCard';
import CenterCard from '../components/CenterCard';

const Home: React.FC = () => {
    const [featuredStory, setFeaturedStory] = useState<SuccessStory | null>(null);
    const [loadingStory, setLoadingStory] = useState(false);

    // Enhanced proxying for images
    const proxy = (url: string) => `https://images.weserv.nl/?url=${encodeURIComponent(url)}`;
    const smilesImageUrl = "/hero-image.webp"; // Updated to local image
    const heroTablaUrl = "/tabla.jpg";
    const fallbackHeroUrl = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop";

    useEffect(() => {
        const initData = async () => {
            try {
                const story = await generateSuccessStory();
                setFeaturedStory(story);
            } catch (err) {
                console.error("Error initializing AI content", err);
            }
        };
        initData();
    }, []);

    const refreshStory = async () => {
        setLoadingStory(true);
        const story = await generateSuccessStory();
        if (story) setFeaturedStory(story);
        setLoadingStory(false);
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallback: string) => {
        const target = e.currentTarget;
        if (target.src === fallback) return;
        target.src = fallback;
    };

    return (
        <>
            {/* Enhanced Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-teal-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroTablaUrl}
                        className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
                        alt="Children of Vidya & Child"
                        onError={(e) => handleImageError(e, fallbackHeroUrl)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-950/90 via-teal-900/60 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-100 text-xs font-bold mb-8 backdrop-blur-sm">
                            <Sun size={14} className="text-red-500" />
                            <span className="tracking-widest uppercase">Empowering First-Generation Learners</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
                            Where <span className="text-red-500">Dreams</span> <br /> Find Their Voice.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-medium">
                            Vidya & Child is dedicated to bridging the educational gap for underprivileged children. Providing holistic support from Nursery to Career excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/get-involved" className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 active:scale-95">
                                Join Our Mission <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/get-involved" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/10 active:scale-95 text-center">
                                Donate Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Hero Decorative Stats */}
                <div className="absolute bottom-28 right-12 hidden xl:block animate-in fade-in slide-in-from-right-12 duration-1000 delay-500">
                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center gap-8 shadow-2xl">
                        <div className="text-center">
                            <div className="text-3xl font-black text-red-500">1700+</div>
                            <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Students</div>
                        </div>
                        <div className="w-px h-8 bg-slate-700" />
                        <div className="text-center">
                            <div className="text-3xl font-black text-white">5</div>
                            <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Centers</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Spotlight Section */}
            <section className="py-20 bg-cream border-b border-beige/20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12 items-center">
                        <div className="lg:col-span-1">
                            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                                <Target size={32} />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Our Core Mission</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                To support children from economically disadvantaged families who lack access to formal education, ensuring they achieve their full potential.
                            </p>
                        </div>
                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-red-100 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-red-500 transition-colors mb-6 shadow-sm">
                                    <Heart size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">Holistic Growth</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">Beyond textbooks, we focus on arts, life skills, and emotional intelligence.</p>
                            </div>
                            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-red-100 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 group-hover:text-red-500 transition-colors mb-6 shadow-sm">
                                    <Users size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">Parental Bond</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">Active engagement programs to help families support their child's learning journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-beige relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="relative group max-w-xl mx-auto">
                                <div className="absolute -inset-4 bg-red-600/5 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                                <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl border-8 border-white bg-white">
                                    <img
                                        src={smilesImageUrl}
                                        alt="Children learning"
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        onError={(e) => handleImageError(e, fallbackHeroUrl)}
                                    />
                                    <div className="absolute bottom-6 left-0 bg-red-600 py-4 px-8 shadow-xl">
                                        <p className="text-white font-bold italic text-lg md:text-xl">
                                            Identifying uniqueness in every child
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <div className="inline-flex items-center gap-3 text-red-600 font-bold uppercase text-xs tracking-[0.2em] mb-6">
                                <div className="w-8 h-0.5 bg-red-600" />
                                The Vidya Philosophy
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                                Potential is <br /><span className="text-red-600 underline decoration-red-600/20 underline-offset-8">Universal.</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed mb-10">
                                Opportunity is not. We bridge this gap by offering a nurturing environment where children from disadvantaged backgrounds can flourish.
                            </p>
                            <div className="flex gap-10">
                                <div>
                                    <div className="text-4xl font-black text-slate-900 mb-1">600+</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Careers Launched</div>
                                </div>
                                <div className="w-px h-16 bg-slate-200" />
                                <div>
                                    <div className="text-4xl font-black text-slate-900 mb-1">100%</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Holistic Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roadmap / Programs - Show first 6 programs */}
            <section id="programs" className="py-24 bg-cream">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <SectionHeading
                            title="The Educational Roadmap"
                            subtitle="From Nursery to Graduation and beyond, we provide comprehensive support through 12 specialized programs."
                        />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROGRAMS.slice(0, 6).map((program) => (
                            <ProgramCard key={program.id} program={program} showCategory={true} />
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            to="/programs"
                            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-red-200 active:scale-95 inline-flex items-center gap-2"
                        >
                            View All {PROGRAMS.length} Programs <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Centers Section */}
            <section className="py-24 bg-beige">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <SectionHeading
                            title="Our Centers"
                            subtitle="5 operational centers across Noida and Bihar serving diverse communities"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CENTERS.slice(0, 3).map((center) => (
                            <CenterCard key={center.id} center={center} />
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            to="/centers"
                            className="bg-teal-900 hover:bg-teal-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl active:scale-95 inline-flex items-center gap-2"
                        >
                            View All Centers <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Impact Story - Cinematic Design */}
            <section className="relative py-32 md:py-48 overflow-hidden bg-teal-900">
                {/* Background Image with Parallax-like feel */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={smilesImageUrl}
                        className="w-full h-full object-cover opacity-60"
                        alt="Smiles"
                        onError={(e) => handleImageError(e, fallbackHeroUrl)}
                    />
                    {/* Dark Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-teal-950/80 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        {/* Decorative Tag */}
                        <div className="inline-flex items-center gap-3 text-red-500 font-black uppercase text-xs tracking-[0.3em] mb-8 animate-in fade-in slide-in-from-left-8 duration-700">
                            <Sparkles size={16} />
                            Voices of Change
                        </div>

                        {/* Main Headline */}
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                            Real stories of <br />
                            <span className="text-red-500">determination</span> & success.
                        </h2>

                        {featuredStory && (
                            <div className={loadingStory ? 'opacity-20 transition-opacity' : 'opacity-100 transition-opacity duration-500'}>
                                {/* Quote */}
                                <div className="relative mb-12">
                                    <Quote size={80} className="absolute -top-10 -left-6 text-red-600/20 -z-10 transform -rotate-12" />
                                    <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed font-medium italic border-l-4 border-red-600 pl-8">
                                        "{featuredStory.story}"
                                    </p>
                                </div>

                                {/* Info & Action */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-8 md:gap-16">
                                    <div>
                                        <h3 className="text-3xl font-black text-white tracking-tight">
                                            {featuredStory.name}
                                        </h3>
                                        <p className="text-red-400 font-bold text-sm uppercase tracking-widest mt-1">
                                            Age {featuredStory.age} • Empowered Student
                                        </p>
                                    </div>

                                    <button
                                        onClick={refreshStory}
                                        className="inline-flex items-center gap-3 text-white hover:text-red-400 font-bold transition-all group group-hover:tracking-wide border-b border-transparent hover:border-red-400 pb-1"
                                    >
                                        <RefreshCcw size={18} className={`group-hover:rotate-180 transition-transform ${loadingStory ? 'animate-spin' : ''}`} />
                                        Read Another Story
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
