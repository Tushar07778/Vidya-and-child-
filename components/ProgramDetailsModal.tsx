import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Program } from '../types';

interface ProgramDetailsModalProps {
    program: Program;
    isOpen: boolean;
    onClose: () => void;
}

const ProgramDetailsModal: React.FC<ProgramDetailsModalProps> = ({ program, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !program.detailedContent) return null;

    const { detailedContent } = program;

    const modalContent = (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-teal-950/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="p-6 sm:p-8 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                    <h2 className="text-3xl sm:text-4xl font-black text-teal-900 tracking-tight">
                        {program.title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X size={28} />
                    </button>
                </div>

                <div className="overflow-y-auto p-6 sm:p-8">
                    {/* Images Grid */}
                    {detailedContent.images && detailedContent.images.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {detailedContent.images.map((img, idx) => (
                                <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                                    <img
                                        src={img}
                                        alt={`${program.title} ${idx + 1}`}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Content Box */}
                    <div className="border-2 border-slate-200 rounded-2xl p-6 sm:p-8 bg-slate-50/50">
                        {/* Objective & Scope */}
                        <div className="space-y-4 mb-8">
                            <div>
                                <span className="font-black text-lg text-teal-900 border-b-2 border-red-200 inline-block mb-1">Objective:</span>
                                <p className="text-lg text-slate-700 font-medium leading-relaxed">
                                    {detailedContent.objective}
                                </p>
                            </div>
                            <div>
                                <span className="font-black text-lg text-teal-900 border-b-2 border-red-200 inline-block mb-1">Scope:</span>
                                <p className="text-lg text-slate-700 font-medium">
                                    {detailedContent.scope}
                                </p>
                            </div>
                        </div>

                        {/* Key Features */}
                        <div>
                            <h3 className="text-2xl font-black text-teal-900 mb-6 underline decoration-red-300 decoration-4 underline-offset-4">
                                Key Features of School Programme:
                            </h3>
                            <ul className="space-y-4">
                                {detailedContent.keyFeatures.map((feature, idx) => {
                                    // Split only on the first instance of ' - ', ' – ', ' — '
                                    const separatorRegex = /\s[-–—]\s/;
                                    const match = feature.match(separatorRegex);

                                    if (match && match.index !== undefined) {
                                        const title = feature.substring(0, match.index).trim();
                                        const desc = feature.substring(match.index + match[0].length).trim();

                                        return (
                                            <li key={idx} className="flex gap-3 text-slate-700">
                                                <div className="w-2 h-2 mt-2.5 bg-red-500 rounded-full flex-shrink-0" />
                                                <span className="text-lg leading-relaxed">
                                                    <span className="font-bold text-teal-800 border-b border-dotted border-teal-300">{title}</span>
                                                    <span className="mx-1 text-slate-400">—</span>
                                                    {desc}
                                                </span>
                                            </li>
                                        );
                                    }

                                    return (
                                        <li key={idx} className="flex gap-3 text-slate-700">
                                            <div className="w-2 h-2 mt-2.5 bg-red-500 rounded-full flex-shrink-0" />
                                            <span className="text-lg leading-relaxed font-bold text-teal-800">
                                                {feature}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default ProgramDetailsModal;
