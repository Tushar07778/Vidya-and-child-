
import React from 'react';
import { X, Copy, CheckCircle, Smartphone, CreditCard } from 'lucide-react';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    amount?: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, amount }) => {
    const [copied, setCopied] = React.useState(false);
    const upiId = "donations@vidyaandchild.org"; // Replace with actual UPI ID

    // Dynamic QR Code URL
    // Construct the UPI URI
    const cleanAmount = amount ? amount.replace(/[^0-9.]/g, '') : '';
    const upiUri = `upi://pay?pa=${upiId}&pn=VidyaAndChild&cu=INR${cleanAmount ? `&am=${cleanAmount}` : ''}`;
    // Encode the URI for the QR code API
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiUri)}`;


    if (!isOpen) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(upiId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in duration-300">
                {/* Header */}
                <div className="bg-slate-50 p-6 flex items-center justify-between border-b border-slate-100">
                    <div>
                        <h3 className="text-xl font-black text-slate-900">Make a Donation</h3>
                        {amount && <p className="text-slate-500 text-sm font-medium">Amount: <span className="text-red-600">{amount}</span></p>}
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all shadow-sm border border-slate-200"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                    <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-lg inline-block mb-8 relative group">
                        <img
                            src={qrCodeUrl}
                            alt="Scan to Pay"
                            className="w-48 h-48 object-contain mix-blend-multiply"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-3xl">
                            <span className="text-sm font-black text-slate-900">Scan with any UPI App</span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between gap-4">
                            <div className="text-left overflow-hidden">
                                <div className="text-[10px] uppercase font-black text-slate-400 tracking-wider mb-1">UPI ID</div>
                                <div className="font-bold text-slate-700 truncate text-sm sm:text-base">{upiId}</div>
                            </div>
                            <button
                                onClick={handleCopy}
                                className={`p-3 rounded-xl transition-all ${copied ? 'bg-green-100 text-green-600' : 'bg-white text-slate-400 hover:text-red-600 shadow-sm'}`}
                            >
                                {copied ? <CheckCircle size={20} /> : <Copy size={20} />}
                            </button>
                        </div>

                        <div className="flex justify-center gap-4 text-slate-300">
                            <Smartphone size={24} />
                            <CreditCard size={24} />
                        </div>

                        <p className="text-xs text-slate-400 font-medium px-4">
                            Your contribution is eligible for tax exemption under Section 80G. Receipt will be sent via email.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
