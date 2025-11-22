import React, { useState, useEffect } from 'react';

export default function UploadPreview({ stepId }) {
    const [progress, setProgress] = useState(0);
    const isSubmitted = stepId === 8;

    useEffect(() => {
        if (stepId === 7) {
            const interval = setInterval(() => {
                setProgress(p => (p >= 100 ? 0 : p + 1));
            }, 50);
            return () => clearInterval(interval);
        } else {
            setProgress(100);
        }
    }, [stepId]);

    return (
        <div className="h-full flex flex-col items-center justify-center p-8">
            <div className="glass-panel p-8 w-full max-w-md text-center">
                {isSubmitted ? (
                    <div className="space-y-4 fade-in">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/50">
                            <span className="text-4xl">✓</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white">Assignment Submitted!</h2>
                        <div className="bg-white/10 p-4 rounded-lg break-all font-mono text-sm text-blue-300">
                            https://joem.altervista.org/final-project
                        </div>
                        <p className="text-gray-400">Great job! You're all done.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                            <span>Uploading files...</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-500 transition-all duration-100"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <div className="space-y-2 text-left text-sm font-mono text-gray-500">
                            <div className={progress > 20 ? "text-green-400" : ""}>✓ index.html</div>
                            <div className={progress > 50 ? "text-green-400" : ""}>✓ insert.php</div>
                            <div className={progress > 80 ? "text-green-400" : ""}>✓ assets/images/*</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
