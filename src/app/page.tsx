'use client';

import { useState } from 'react';
import ModelCard from '../components/ModelCard';
import ModelSelector from '../components/ModelSelector';
import CapabilitiesComparison from '../components/CapabilitiesComparison';
import { models } from '../constants/models';
import { Model } from '../types/models';

export default function Home() {
  const [leftModel, setLeftModel] = useState<Model>(models['o3']);
  const [rightModel, setRightModel] = useState<Model>(models['claude-3-sonnet']);

  const modelsList = Object.values(models);

  const handleModelClose = (side: 'left' | 'right') => {
    const currentModels = new Set([leftModel.id, rightModel.id]);
    const availableModels = modelsList.filter(
      model => !currentModels.has(model.id)
    );
    const randomModel = availableModels[Math.floor(Math.random() * availableModels.length)];
    
    if (side === 'left') {
      setLeftModel(randomModel);
    } else {
      setRightModel(randomModel);
    }
  };

  const handleTryModel = (modelName: string) => {
    alert(`Redirecting to ${modelName} playground...`);
  };

  return (
    <main className="bg-[#f5f7fb] min-h-screen p-8">
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4">
            LLM Model Comparison
          </h1>
          <p className="text-[#4a4a4a] text-lg max-w-2xl mx-auto">
            Compare the latest large language models across performance metrics, capabilities, and specifications. Data sourced from llm-stats.com.
          </p>
        </div>

        {/* Model Selection */}
        <div className="flex justify-center items-center gap-8">
          <ModelSelector
            models={modelsList}
            selectedModel={leftModel}
            otherSelectedModel={rightModel}
            onSelect={setLeftModel}
            side="left"
          />
          <div className="text-[#4a4a4a] font-bold">VS</div>
          <ModelSelector
            models={modelsList}
            selectedModel={rightModel}
            otherSelectedModel={leftModel}
            onSelect={setRightModel}
            side="right"
          />
        </div>

        {/* Models Comparison */}
        <div className="flex items-center justify-center gap-8">
          <ModelCard
            model={leftModel}
            onClose={() => handleModelClose('left')}
            onTryModel={() => handleTryModel(leftModel.name)}
          />
          
          <div className="bg-[#4285f4] text-white px-4 py-2 rounded-lg font-bold text-lg">
            VS
          </div>
          
          <ModelCard
            model={rightModel}
            onClose={() => handleModelClose('right')}
            onTryModel={() => handleTryModel(rightModel.name)}
          />
        </div>

        {/* Capabilities Comparison */}
        <div className="mt-8">
          <CapabilitiesComparison
            model1={leftModel}
            model2={rightModel}
          />
        </div>
      </div>
    </main>
  );
}
