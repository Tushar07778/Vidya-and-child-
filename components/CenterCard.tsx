
import React from 'react';
import { MapPin } from 'lucide-react';
import { Center } from '../types';
import Card from './Card';

interface CenterCardProps {
    center: Center;
    className?: string;
}

const CenterCard: React.FC<CenterCardProps> = ({ center, className = '' }) => {
    return (
        <Card className={`p-10 border-beige/50 hover:border-red-200 group transition-all bg-white shadow-sm ${className}`}>
            <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 flex-shrink-0 shadow-sm border border-red-100/50">
                    <MapPin size={28} />
                </div>
                <div className="flex-1">
                    <h4 className="text-2xl font-black text-teal-900 mb-2 tracking-tight group-hover:text-red-600 transition-colors">
                        {center.name}
                    </h4>
                    <p className="text-slate-600 font-medium text-sm">{center.location}</p>
                    <p className="text-slate-400 font-medium text-xs mt-1">{center.area}</p>
                </div>
            </div>

            <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest bg-beige text-teal-900 px-4 py-2 rounded-full border border-beige-200 inline-block">
                    {center.type}
                </span>
            </div>

            <div className="space-y-3">
                <h5 className="text-xs font-black uppercase tracking-wider text-teal-500">Programs Offered</h5>
                <div className="flex flex-wrap gap-2">
                    {center.programs.map((program, idx) => (
                        <span
                            key={idx}
                            className="text-xs font-bold bg-beige text-teal-900 px-3 py-1.5 rounded-lg border border-beige"
                        >
                            {program}
                        </span>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default CenterCard;
