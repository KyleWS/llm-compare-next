import React from 'react';
import Image from 'next/image';
import { Model } from '../types/models';

interface CapabilitiesComparisonProps {
  model1: Model;
  model2: Model;
}

const CapabilitiesComparison = ({ model1, model2 }: CapabilitiesComparisonProps) => {
  const capabilities = Object.keys(model1.capabilities);

  return (
    <div className="bg-white rounded-2xl p-8 shadow-md">
      <div className="mb-8">
        <h3 className="flex items-center gap-2 text-[#1a1a1a] mb-6 text-2xl font-bold">
          <span className="text-2xl">🎯</span>
          Performance Comparison
        </h3>

        <div className="grid grid-cols-[2fr,1fr,1fr] gap-6">
          {/* Headers */}
          <div className="text-[#4a4a4a] font-medium">Metric</div>
          <div className="text-center">
            <Image src={model1.image} alt={model1.name} width={32} height={32} className="mx-auto mb-2" />
            <div className="font-bold text-[#1a73e8] text-sm">{model1.name}</div>
          </div>
          <div className="text-center">
            <Image src={model2.image} alt={model2.name} width={32} height={32} className="mx-auto mb-2" />
            <div className="font-bold text-[#1a73e8] text-sm">{model2.name}</div>
          </div>

          {/* Capabilities Grid */}
          {capabilities.map((capability) => (
            <React.Fragment key={capability}>
              <div className="text-[#4a4a4a] flex items-center">
                {capability.replace('Score', '')}
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1a73e8] rounded-full"
                    style={{
                      width: `${model1.capabilities[capability as keyof typeof model1.capabilities]}%`
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-[#1a73e8]">
                  {model1.capabilities[capability as keyof typeof model1.capabilities]}%
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1a73e8] rounded-full"
                    style={{
                      width: `${model2.capabilities[capability as keyof typeof model2.capabilities]}%`
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-[#1a73e8]">
                  {model2.capabilities[capability as keyof typeof model2.capabilities]}%
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Specifications Comparison */}
      <div>
        <h3 className="flex items-center gap-2 text-[#1a1a1a] mb-6 text-2xl font-bold">
          <span className="text-2xl">📊</span>
          Specifications Comparison
        </h3>

        <div className="grid grid-cols-[2fr,1fr,1fr] gap-4">
          <div className="text-[#4a4a4a] font-medium">Specification</div>
          <div className="text-center font-bold text-[#1a73e8]">{model1.name}</div>
          <div className="text-center font-bold text-[#1a73e8]">{model2.name}</div>

          {Object.entries(model1.specs).map(([key]) => (
            <React.Fragment key={key}>
              <div className="text-[#4a4a4a] capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="text-center text-[#4a4a4a] text-sm">
                {model1.specs[key as keyof typeof model1.specs]}
              </div>
              <div className="text-center text-[#4a4a4a] text-sm">
                {model2.specs[key as keyof typeof model2.specs]}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesComparison;