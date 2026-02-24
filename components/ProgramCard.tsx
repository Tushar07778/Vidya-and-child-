
import React, { useState } from 'react';
import { Program } from '../types';
import ProgramDetailsModal from './ProgramDetailsModal';
import { IconMap } from '../constants';
import Card from './Card';

interface ProgramCardProps {
    program: Program;
    className?: string;
    showCategory?: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
    program,
    className = '',
    showCategory = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const Icon = IconMap[program.icon];

    const categoryColors = {
        academic: 'bg-beige text-teal-900 border-beige',
        support: 'bg-beige text-teal-900 border-beige',
        enrichment: 'bg-beige text-teal-900 border-beige',
        career: 'bg-beige text-teal-900 border-beige'
    };

    const categoryLabels = {
        academic: 'Academic',
        support: 'Support',
        enrichment: 'Enrichment',
        career: 'Career'
    };

    return (
        <>
            <Card className={`p-10 text-left group bg-white border border-slate-100 hover:border-red-100 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500 rounded-[2.5rem] relative overflow-hidden ${className}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    <div className="w-20 h-20 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-10 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-sm">
                        <Icon size={32} />
                    </div>

                    <div className="flex items-start justify-between gap-4 mb-6">
                        <h3 className="text-2xl font-black text-teal-900 group-hover:text-red-600 transition-colors tracking-tight flex-1 leading-tight">
                            {program.title}
                        </h3>
                        {showCategory && (
                            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-slate-100 bg-slate-50 text-slate-500`}>
                                {categoryLabels[program.category]}
                            </span>
                        )}
                    </div>

                    {program.ageRange && (
                        <div className="mb-6 inline-block">
                            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-lg">
                                {program.ageRange}
                            </span>
                        </div>
                    )}

                    <p className="text-slate-600 mb-10 leading-relaxed font-medium text-base">
                        {program.description}
                    </p>

                    <ul className="space-y-4 mb-10">
                        {program.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-slate-700 font-semibold text-sm">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                                <span className="leading-relaxed">{detail}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="w-full py-4 border border-slate-200 rounded-xl text-slate-600 font-bold text-base hover:bg-teal-900 hover:text-white hover:border-teal-900 transition-all duration-300 shadow-sm hover:shadow-lg hover:translate-y-[-2px] flex items-center justify-center gap-2 group/btn"
                    >
                        Learn More
                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </Card>
            <ProgramDetailsModal
                program={program}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};

export default ProgramCard;
