import React, { useState } from 'react';
import { steps } from '../../data/steps';

export default function CodePreview({ stepId }) {
    const step = steps.find(s => s.id === stepId);
    const [viewMode, setViewMode] = useState('preview'); // 'preview' or 'code'

    if (!step || !step.code) return null;

    return (
        <div className="h-full flex flex-col p-4">
            {/* Toolbar */}
            <div className="bg-gray-800 rounded-t-lg p-2 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5 mr-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex bg-gray-900 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('preview')}
                            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${viewMode === 'preview' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Preview
                        </button>
                        <button
                            onClick={() => setViewMode('code')}
                            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${viewMode === 'code' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Source Code
                        </button>
                    </div>

                    <button
                        onClick={() => {
                            const blob = new Blob([step.code], { type: 'text/html' });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `step-${stepId}-index.html`;
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            URL.revokeObjectURL(url);
                        }}
                        className="ml-2 px-3 py-1 rounded text-xs font-medium bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition-colors flex items-center gap-1"
                        title="Download Code"
                    >
                        <span>⬇️</span> Download
                    </button>
                </div>
                <div className="text-gray-500 text-xs font-mono">index.html</div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-white relative rounded-b-lg overflow-hidden shadow-2xl">
                {viewMode === 'preview' ? (
                    <iframe
                        srcDoc={step.code}
                        title="Preview"
                        className="w-full h-full border-none"
                        sandbox="allow-scripts"
                    />
                ) : (
                    <div className="absolute inset-0 bg-[#1e1e1e] overflow-auto p-4">
                        <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap">
                            <code>{step.code}</code>
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
}
