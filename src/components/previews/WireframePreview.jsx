import React from 'react';

export default function WireframePreview() {
    return (
        <div className="h-full flex flex-col items-center justify-center p-4">
            <div className="bg-white w-full max-w-md h-[500px] border-4 border-dashed border-gray-400 p-2 flex flex-col gap-2 relative overflow-hidden shadow-2xl transform rotate-1">
                <div className="absolute top-0 right-0 bg-yellow-300 text-black text-xs px-2 py-1 font-bold rotate-45 translate-x-4 translate-y-4 shadow-md">SKETCH</div>

                {/* Hero Section */}
                <div className="border-2 border-gray-800 h-1/3 flex flex-col items-center justify-center p-2 gap-2">
                    <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                    <div className="w-1/2 h-2 bg-gray-300 rounded"></div>
                    <div className="w-full h-20 border border-gray-400 flex items-center justify-center bg-gray-100">
                        <span className="text-gray-400 text-xs">Carousel Images</span>
                    </div>
                </div>

                {/* Steps Section */}
                <div className="flex gap-1 h-1/4">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="border-2 border-gray-800 flex-1 flex flex-col items-center justify-center p-1 gap-1">
                            <div className="w-full h-8 bg-gray-200"></div>
                            <div className="w-3/4 h-2 bg-gray-300"></div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="border-2 border-gray-800 flex-1 flex flex-col items-center justify-center p-2 gap-2">
                    <div className="w-1/3 h-3 bg-gray-300 rounded"></div>
                    <div className="w-full max-w-[200px] space-y-1">
                        <div className="h-6 border border-gray-400 rounded bg-white"></div>
                        <div className="h-6 border border-gray-400 rounded bg-white"></div>
                        <div className="h-6 bg-black rounded text-white text-xs flex items-center justify-center">SUBMIT</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
