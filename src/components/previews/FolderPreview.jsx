import React from 'react';

export default function FolderPreview() {
    return (
        <div className="h-full flex flex-col items-center justify-center p-8">
            <div className="glass-panel w-full max-w-md overflow-hidden">
                <div className="bg-black/40 p-3 flex gap-2 border-b border-white/10">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-xs text-gray-400 font-mono">~/projects/final-landing-page</span>
                </div>
                <div className="p-4 font-mono text-sm space-y-2">
                    <div className="flex items-center gap-2 text-blue-400">
                        <span>📁</span>
                        <span>final-landing-page/</span>
                    </div>
                    <div className="pl-6 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-orange-400 fade-in" style={{ animationDelay: '0.1s' }}>
                            <span>📄</span>
                            <span>index.html</span>
                        </div>
                        <div className="flex items-center gap-2 text-purple-400 fade-in" style={{ animationDelay: '0.2s' }}>
                            <span>🐘</span>
                            <span>insert.php</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-400 fade-in" style={{ animationDelay: '0.3s' }}>
                            <span>🖼️</span>
                            <span>hero.jpg</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-400 fade-in" style={{ animationDelay: '0.4s' }}>
                            <span>🖼️</span>
                            <span>step1.jpg</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
