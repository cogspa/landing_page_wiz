import React, { useState } from 'react';

export default function ConceptPreview({ stepId }) {
    const [skill, setSkill] = useState("Baking a Cake");

    return (
        <div className="h-full flex flex-col items-center justify-center p-8 text-center">
            <div className="glass-panel p-8 max-w-md w-full transform transition-all duration-500 hover:scale-105">
                <div className="text-6xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                    {stepId === 1 ? "Brainstorming..." : "Drafting Content..."}
                </h3>

                <div className="bg-white/10 rounded-lg p-4 text-left space-y-3">
                    <div>
                        <label className="text-xs uppercase text-blue-300 font-bold">Skill</label>
                        <div className="text-white font-mono text-lg">{skill}</div>
                    </div>

                    {stepId === 2 && (
                        <div className="fade-in space-y-2 mt-4 pt-4 border-t border-white/10">
                            <div className="flex items-center gap-2">
                                <span className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
                                <span className="text-sm">Prep Ingredients</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
                                <span className="text-sm">Mix & Bake</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
                                <span className="text-sm">Cool & Decorate</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
