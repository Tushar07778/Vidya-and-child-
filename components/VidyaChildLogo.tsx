import React from 'react';

const VidyaChildLogo: React.FC<{ className?: string }> = ({ className = "h-14" }) => {
    return (
        <svg
            viewBox="0 0 500 120"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background */}
            <rect width="500" height="120" fill="white" rx="10" />

            {/* Colorful Children Figures - More detailed */}
            {/* Child 1 - Purple */}
            <circle cx="35" cy="35" r="10" fill="#9333ea" />
            <ellipse cx="35" cy="50" rx="12" ry="15" fill="#9333ea" />
            <circle cx="32" cy="34" r="2" fill="white" />
            <circle cx="38" cy="34" r="2" fill="white" />
            <path d="M 30 38 Q 35 40 40 38" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <line x1="23" y1="48" x2="18" y2="65" stroke="#9333ea" strokeWidth="4" strokeLinecap="round" />
            <line x1="47" y1="48" x2="52" y2="65" stroke="#9333ea" strokeWidth="4" strokeLinecap="round" />
            <line x1="28" y1="62" x2="23" y2="75" stroke="#9333ea" strokeWidth="4" strokeLinecap="round" />
            <line x1="42" y1="62" x2="47" y2="75" stroke="#9333ea" strokeWidth="4" strokeLinecap="round" />

            {/* Child 2 - Green */}
            <circle cx="70" cy="35" r="10" fill="#16a34a" />
            <ellipse cx="70" cy="50" rx="12" ry="15" fill="#16a34a" />
            <circle cx="67" cy="34" r="2" fill="white" />
            <circle cx="73" cy="34" r="2" fill="white" />
            <path d="M 65 38 Q 70 40 75 38" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <line x1="58" y1="48" x2="53" y2="65" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />
            <line x1="82" y1="48" x2="87" y2="65" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />
            <line x1="63" y1="62" x2="58" y2="75" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />
            <line x1="77" y1="62" x2="82" y2="75" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />

            {/* Child 3 - Yellow */}
            <circle cx="105" cy="35" r="10" fill="#eab308" />
            <ellipse cx="105" cy="50" rx="12" ry="15" fill="#eab308" />
            <circle cx="102" cy="34" r="2" fill="white" />
            <circle cx="108" cy="34" r="2" fill="white" />
            <path d="M 100 38 Q 105 40 110 38" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <line x1="93" y1="48" x2="88" y2="65" stroke="#eab308" strokeWidth="4" strokeLinecap="round" />
            <line x1="117" y1="48" x2="122" y2="65" stroke="#eab308" strokeWidth="4" strokeLinecap="round" />
            <line x1="98" y1="62" x2="93" y2="75" stroke="#eab308" strokeWidth="4" strokeLinecap="round" />
            <line x1="112" y1="62" x2="117" y2="75" stroke="#eab308" strokeWidth="4" strokeLinecap="round" />

            {/* Child 4 - Red */}
            <circle cx="140" cy="35" r="10" fill="#dc2626" />
            <ellipse cx="140" cy="50" rx="12" ry="15" fill="#dc2626" />
            <circle cx="137" cy="34" r="2" fill="white" />
            <circle cx="143" cy="34" r="2" fill="white" />
            <path d="M 135 38 Q 140 40 145 38" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <line x1="128" y1="48" x2="123" y2="65" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
            <line x1="152" y1="48" x2="157" y2="65" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
            <line x1="133" y1="62" x2="128" y2="75" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
            <line x1="147" y1="62" x2="152" y2="75" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />

            {/* Text: Vidya & Child - Styled like the image */}
            <text x="180" y="50" fontFamily="'Arial Black', Arial, sans-serif" fontSize="32" fontWeight="bold" fill="#dc2626">
                Vidya & Child
            </text>

            {/* Tagline - Full version */}
            <text x="180" y="75" fontFamily="Arial, sans-serif" fontSize="11" fill="#64748b" fontStyle="italic">
                Exploring the Uniqueness in Every Child
            </text>
        </svg>
    );
};

export default VidyaChildLogo;
