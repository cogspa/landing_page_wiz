import React, { useState, useEffect } from 'react';
import { steps } from './data/steps';
import FolderPreview from './components/previews/FolderPreview';
import CodePreview from './components/previews/CodePreview';
import UploadPreview from './components/previews/UploadPreview';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [theme, setTheme] = useState('default'); // 'default', 'swiss', 'paper'
  const step = steps[currentStep];

  useEffect(() => {
    document.body.className = theme === 'default' ? '' : `theme-${theme}`;
  }, [theme]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(c => c + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(c => c - 1);
  };

  const renderPreview = () => {
    switch (step.previewType) {
      case 'code-preview':
        return <CodePreview stepId={step.id} />;
      case 'folder':
        return <FolderPreview />;
      case 'upload':
      case 'submit':
        return <UploadPreview stepId={step.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-hidden transition-colors duration-300">
      {/* Sidebar */}
      <div className="w-1/3 min-w-[400px] border-r border-[var(--border-color)] flex flex-col bg-[var(--bg-secondary)] z-10">
        <div className="p-8 border-b border-[var(--border-color)] flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Landing Page Wizard
            </h1>
            <p className="text-[var(--text-secondary)] text-sm mt-2">DMA 50 – Final Project Guide</p>
          </div>

          {/* Theme Selector */}
          <div className="flex gap-2">
            <button
              onClick={() => setTheme('default')}
              className={`w-4 h-4 rounded-full border border-gray-600 bg-[#0f172a] ${theme === 'default' ? 'ring-2 ring-blue-500' : ''}`}
              title="Slate Dark"
            />
            <button
              onClick={() => setTheme('swiss')}
              className={`w-4 h-4 rounded-full border border-gray-300 bg-white ${theme === 'swiss' ? 'ring-2 ring-red-500' : ''}`}
              title="Swiss Light"
            />
            <button
              onClick={() => setTheme('paper')}
              className={`w-4 h-4 rounded-full border border-gray-300 bg-[#fdfbf7] ${theme === 'paper' ? 'ring-2 ring-gray-800' : ''}`}
              title="Paper Minimal"
            />
            <button
              onClick={() => setTheme('pastel')}
              className={`w-4 h-4 rounded-full border border-gray-300 bg-[#B9E3EB] ${theme === 'pastel' ? 'ring-2 ring-[#D9A4EB]' : ''}`}
              title="Pastel Palette"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="mb-8">
            <div className="text-sm text-[var(--accent-color)] font-bold uppercase tracking-wider mb-2">
              Step {step.id} of {steps.length}
            </div>
            <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              {step.description}
            </p>

            <div className="glass-panel p-6">
              <h3 className="text-sm font-bold text-[var(--text-secondary)] uppercase mb-4">Checklist</h3>
              <ul className="space-y-3">
                {step.checklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[var(--text-primary)]">
                    <input
                      type="checkbox"
                      className="mt-1.5 w-4 h-4 rounded border-[var(--border-color)] text-[var(--accent-color)] focus:ring-[var(--accent-color)] bg-[var(--bg-primary)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-8 border-t border-[var(--border-color)] flex justify-between items-center bg-[var(--bg-primary)]">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`btn-secondary ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            ← Previous
          </button>

          <div className="flex gap-1">
            {steps.map((s, i) => (
              <div
                key={s.id}
                className={`w-2 h-2 rounded-full transition-all ${i === currentStep ? 'bg-[var(--accent-color)] w-4' : 'bg-[var(--border-color)]'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`btn-primary ${currentStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next →
          </button>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 relative bg-[var(--bg-primary)] flex flex-col">
        {/* Dotted Grid Background */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(var(--text-secondary) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}>
        </div>

        <div className="relative z-10 h-full">
          {renderPreview()}
        </div>
      </div>
    </div>
  );
}

export default App;
